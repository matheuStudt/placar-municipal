import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const getJogos = async (req: Request, res: Response) => {
    const campIdRaw = req.query.campeonatoId;
    const rodadaIdRaw = req.query.rodadaId;
    const chaveRaw = req.query.chave;
    const equipeIdRaw = req.query.equipeId;

    const where: any = {};
    if (campIdRaw) where.rodada = { campeonatoId: parseInt(String(campIdRaw)) };
    if (rodadaIdRaw) where.rodadaId = parseInt(String(rodadaIdRaw));
    if (chaveRaw) where.chave = String(chaveRaw);

    if (equipeIdRaw) {
        const eqId = parseInt(String(equipeIdRaw));
        where.OR = [
            { mandanteId: eqId },
            { visitanteId: eqId }
        ];
    }

    try {
        const jogos = await prisma.jogo.findMany({
            where,
            orderBy: { numero: 'asc' },
            include: {
                rodada: { include: { campeonato: { select: { categoria: true } } } },
                mandante: { select: { id: true, logoUrl: true } },
                visitante: { select: { id: true, logoUrl: true } }
            }
        });
        res.json(jogos);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar jogos" });
    }
};

export const getJogoDetalhes = async (req: Request, res: Response) => {
    const jogoId = parseInt(String(req.params.id));
    console.log(`[API] Buscando detalhes do jogo ID: ${jogoId}`);
    try {
        const jogo = await prisma.jogo.findUnique({
            where: { id: jogoId },
            include: {
                rodada: true,
                mandante: { select: { id: true, logoUrl: true } },
                visitante: { select: { id: true, logoUrl: true } }
            }
        });
        if (!jogo) return res.status(404).json({ error: "Jogo não encontrado" });

        const eventosJogo = await prisma.evento.findMany({ where: { jogoId } });
        console.log(`[API] Eventos encontrados para o jogo ${jogoId}:`, eventosJogo.length);

        const buscarElenco = async (equipeId: number) => {
            const vinculos = await prisma.vinculo.findMany({
                where: { equipeId },
                include: { atleta: true }
            });
            return vinculos.map(v => {
                const stats = eventosJogo.find(e => Number(e.atletaId) === Number(v.atletaId)) || { gols: 0, gc: 0, am: 0, vm: 0 };
                return {
                    id: v.atletaId,
                    nome: v.atleta?.nome || "Desconhecido",
                    tipo: v.tipo,
                    gols: stats.gols,
                    gc: stats.gc,
                    am: stats.am,
                    vm: stats.vm
                };
            });
        };

        const elencoMandante = jogo.mandanteId !== null ? await buscarElenco(jogo.mandanteId as number) : [];
        const elencoVisitante = jogo.visitanteId !== null ? await buscarElenco(jogo.visitanteId as number) : [];

        console.log(`[API] Elenco Mandante: ${elencoMandante.length}, Elenco Visitante: ${elencoVisitante.length}`);

        res.json({
            jogo: { ...jogo, campeonatoId: jogo.rodada?.campeonatoId },
            elencoMandante,
            elencoVisitante
        });
    } catch (e) {
        console.error("[API] Erro ao buscar detalhes do jogo:", e);
        res.status(500).json({ error: "Erro ao buscar detalhes do jogo" });
    }
};

export const createJogo = async (req: Request, res: Response) => {
    const { 
        rodadaId, numero, mandanteId, visitanteId, mandanteNome, visitanteNome, 
        mandantePlaceholder, visitantePlaceholder, data, horario, local, chave, 
        sumulaUrl 
    } = req.body;
    try {
        const novo = await prisma.jogo.create({
            data: {
                rodadaId: parseInt(String(rodadaId)),
                numero: parseInt(String(numero)),
                mandanteId: mandanteId ? parseInt(String(mandanteId)) : null,
                visitanteId: visitanteId ? parseInt(String(visitanteId)) : null,
                mandantePlaceholder: mandantePlaceholder || null,
                visitantePlaceholder: visitantePlaceholder || null,
                mandanteNome: mandanteNome || mandantePlaceholder || "A Definir",
                visitanteNome: visitanteNome || visitantePlaceholder || "A Definir",
                data, horario, local, chave,
                sumulaUrl: sumulaUrl || null,
                status: 'Agendado'
            }
        });
        res.status(201).json(novo);
    } catch (e) {
        console.error("[DEBUG] Erro POST /api/jogos:", e);
        res.status(500).json({ error: "Erro ao criar jogo" });
    }
};

export const updateJogo = async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const { 
        numero, horario, local, mandanteId, visitanteId, mandanteNome, 
        visitanteNome, mandantePlaceholder, visitantePlaceholder, data, 
        status, chave, penaltisMandante, penaltisVisitante, sumulaUrl 
    } = req.body;
    try {
        const atualizado = await prisma.jogo.update({
            where: { id },
            data: {
                numero: parseInt(String(numero)),
                horario, local,
                mandanteId: mandanteId ? parseInt(String(mandanteId)) : null,
                visitanteId: visitanteId ? parseInt(String(visitanteId)) : null,
                mandantePlaceholder: mandantePlaceholder || null,
                visitantePlaceholder: visitantePlaceholder || null,
                mandanteNome: mandanteNome || mandantePlaceholder || "A Definir",
                visitanteNome: visitanteNome || visitantePlaceholder || "A Definir",
                data, status, chave,
                penaltisMandante: penaltisMandante !== undefined && penaltisMandante !== null && penaltisMandante !== '' ? Number(penaltisMandante) : null,
                penaltisVisitante: penaltisVisitante !== undefined && penaltisVisitante !== null && penaltisVisitante !== '' ? Number(penaltisVisitante) : null,
                sumulaUrl: sumulaUrl || null
            }
        });
        res.json(atualizado);
    } catch (e) {
        console.error("[DEBUG] Erro PUT /api/jogos/:id:", e);
        res.status(404).json({ error: "Jogo não encontrado" });
    }
};

export const finalizarJogo = async (req: Request, res: Response) => {
    const { 
        jogoId, golsM, golsV, estatisticas, penaltisM, penaltisV, sumulaUrl 
    } = req.body;
    const idProcurado = parseInt(String(jogoId));
    try {
        const jogoAtualizado = await prisma.jogo.update({
            where: { id: idProcurado },
            data: {
                golsMandante: Number(golsM),
                golsVisitante: Number(golsV),
                penaltisMandante: penaltisM !== undefined && penaltisM !== null && penaltisM !== '' ? Number(penaltisM) : null,
                penaltisVisitante: penaltisV !== undefined && penaltisV !== null && penaltisV !== '' ? Number(penaltisV) : null,
                sumulaUrl: sumulaUrl || null,
                status: "Finalizado"
            }
        });

        if (Array.isArray(estatisticas)) {
            await prisma.evento.deleteMany({ where: { jogoId: idProcurado } });
            for (const s of estatisticas) {
                if (!s.atletaId) continue;
                await prisma.evento.create({
                    data: {
                        jogoId: idProcurado,
                        atletaId: Number(s.atletaId),
                        equipeId: s.equipeId ? Number(s.equipeId) : null,
                        gols: Number(s.gols || 0),
                        gc: Number(s.gc || 0),
                        am: Number(s.am || 0),
                        vm: Number(s.vm || 0)
                    }
                });
            }
        }
        res.json(jogoAtualizado);
    } catch (e) {
        res.status(404).json({ error: "Erro ao finalizar jogo" });
    }
};

export const deleteJogo = async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        // Remove eventos (estatísticas) vinculados antes de excluir o jogo
        await prisma.evento.deleteMany({ where: { jogoId: id } });
        await prisma.jogo.delete({ where: { id } });
        res.json({ message: 'Jogo excluído com sucesso.' });
    } catch (e) {
        console.error('[DELETE] Erro ao excluir jogo:', e);
        res.status(404).json({ error: 'Jogo não encontrado ou erro ao excluir.' });
    }
};

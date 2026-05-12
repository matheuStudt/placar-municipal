import { Request, Response } from 'express';
import { prisma } from '../prisma.js';
import { AuthRequest } from '../middleware/auth.middleware.js';

// ── GET /atletas?prefeituraId=X&categoria=Sub-15 ─────────────────────────────
export const getAtletas = async (req: Request, res: Response) => {
    const pId = req.query.prefeituraId;
    if (!pId) {
        return res.status(400).json({ error: "prefeituraId é obrigatório" });
    }
    const prefId = Number(pId);
    if (isNaN(prefId)) {
        return res.status(400).json({ error: "prefeituraId inválido" });
    }
    const categoria = req.query.categoria ? String(req.query.categoria) : undefined;
    try {
        let atletaIdsFilter: number[] | undefined;
        if (categoria) {
            // Retorna apenas atletas que têm vínculo com equipes da categoria solicitada
            const vinculos = await prisma.vinculo.findMany({
                where: { equipe: { categoria, prefeituraId: prefId } },
                select: { atletaId: true }
            });
            atletaIdsFilter = [...new Set(vinculos.map(v => v.atletaId))];
        }
        const atletas = await prisma.atleta.findMany({
            where: {
                prefeituraId: prefId,
                ...(atletaIdsFilter !== undefined ? { id: { in: atletaIdsFilter } } : {})
            },
            orderBy: { nome: 'asc' }
        });
        res.json(atletas);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar atletas" });
    }
};

// ── POST /atletas ────────────────────────────────────────────────────────────
export const createAtleta = async (req: Request, res: Response) => {
    const { nome, cpf, dataNasc } = req.body;
    // Aceita prefeituraId do body ou do token JWT (autenticado)
    const pId = req.body.prefeituraId || (req as AuthRequest).user?.prefeituraId;

    if (!pId) {
        return res.status(400).json({ error: "prefeituraId é obrigatório" });
    }
    const prefId = Number(pId);
    if (isNaN(prefId)) {
        return res.status(400).json({ error: "prefeituraId inválido" });
    }

    if (!nome || !String(nome).trim()) {
        return res.status(400).json({ error: "Nome é obrigatório" });
    }

    try {
        const novo = await prisma.atleta.create({
            data: {
                nome: String(nome).trim(),
                cpf: cpf && String(cpf).trim() ? String(cpf).trim() : null,
                dataNasc: dataNasc && String(dataNasc).trim() ? String(dataNasc).trim() : null,
                prefeituraId: prefId
            }
        });
        res.status(201).json(novo);
    } catch (e: any) {
        // P2002 = violação de unique constraint (CPF duplicado na mesma prefeitura)
        if (e?.code === 'P2002') {
            return res.status(409).json({ error: 'Este CPF já está cadastrado nesta prefeitura.' });
        }
        console.error('[createAtleta]', e);
        res.status(500).json({ error: 'Erro ao criar atleta' });
    }
};

// ── PUT /atletas/:id ─────────────────────────────────────────────────────────
export const updateAtleta = async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const { nome, cpf, dataNasc } = req.body;
    const pId = req.body.prefeituraId || (req as AuthRequest).user?.prefeituraId;

    if (!pId) {
        return res.status(400).json({ error: "prefeituraId é obrigatório" });
    }
    const prefId = Number(pId);
    if (isNaN(prefId)) {
        return res.status(400).json({ error: "prefeituraId inválido" });
    }

    try {
        // updateMany permite filtro composto id + prefeituraId (isolamento de tenant)
        const result = await prisma.atleta.updateMany({
            where: { id, prefeituraId: prefId },
            data: {
                nome: nome ? String(nome).trim() : undefined,
                cpf: cpf !== undefined ? (String(cpf).trim() || null) : undefined,
                dataNasc: dataNasc !== undefined ? (String(dataNasc).trim() || null) : undefined
            }
        });

        if (result.count === 0) {
            return res.status(404).json({ error: "Atleta não encontrado nesta prefeitura" });
        }

        // Retorna o registro atualizado
        const atualizado = await prisma.atleta.findUnique({ where: { id } });
        res.json(atualizado);
    } catch (e: any) {
        if (e?.code === 'P2002') {
            return res.status(409).json({ error: 'Este CPF já está cadastrado nesta prefeitura.' });
        }
        console.error('[updateAtleta]', e);
        res.status(500).json({ error: "Erro ao atualizar atleta" });
    }
};

// ── DELETE /atletas/:id?prefeituraId=X ───────────────────────────────────────
export const deleteAtleta = async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const pId = req.query.prefeituraId || (req as AuthRequest).user?.prefeituraId;

    if (!pId) {
        return res.status(400).json({ error: "prefeituraId é obrigatório" });
    }
    const prefId = Number(pId);
    if (isNaN(prefId)) {
        return res.status(400).json({ error: "prefeituraId inválido" });
    }

    try {
        // Verificar que o atleta pertence a esta prefeitura (isolamento de tenant)
        const atleta = await prisma.atleta.findFirst({
            where: { id, prefeituraId: prefId }
        });
        if (!atleta) {
            return res.status(404).json({ error: "Atleta não encontrado nesta prefeitura" });
        }

        // Verificar se possui súmulas (eventos)
        const checkEventos = await prisma.evento.count({ where: { atletaId: id } });
        if (checkEventos > 0) {
            return res.status(400).json({ error: "Não é possível excluir o atleta pois ele possui registros em súmulas." });
        }

        await prisma.vinculo.deleteMany({ where: { atletaId: id } });
        await prisma.atleta.delete({ where: { id } });
        res.status(204).send();
    } catch (e) {
        console.error('[deleteAtleta]', e);
        res.status(500).json({ error: "Erro ao excluir atleta. Verifique dependências." });
    }
};

// ── GET /atletas/:id/historico ───────────────────────────────────────────────
export const getAtletaHistorico = async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        const atleta = await prisma.atleta.findUnique({
            where: { id },
            include: {
                vinculos: {
                    include: {
                        equipe: {
                            include: { prefeitura: true }
                        }
                    },
                    orderBy: { id: 'desc' }
                }
            }
        });

        if (!atleta) return res.status(404).json({ error: "Atleta não encontrado" });

        const eventos = await prisma.evento.findMany({
            where: { atletaId: id },
            select: { equipeId: true, gols: true }
        });

        const golsPorEquipe: Record<number, number> = {};
        let totalGols = 0;
        eventos.forEach(e => {
            if (e.equipeId) {
                golsPorEquipe[e.equipeId] = (golsPorEquipe[e.equipeId] || 0) + (e.gols || 0);
            }
            totalGols += (e.gols || 0);
        });

        res.json({
            ...atleta,
            totalGols,
            golsPorEquipe
        });
    } catch (e) {
        console.error('[getAtletaHistorico]', e);
        res.status(500).json({ error: "Erro ao buscar histórico do atleta" });
    }
};

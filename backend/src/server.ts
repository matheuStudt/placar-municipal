import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '@prisma/client';

dotenv.config({ path: new URL('../../.env', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1') });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('[SERVER] DATABASE_URL:', process.env.DATABASE_URL);
console.log('--- RESTART TEST 123 ---');
// throw new Error('RESTART TEST ERROR');

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do frontend
const frontendPath = path.join(__dirname, '../../frontend');
app.use(express.static(frontendPath));

const prisma = new PrismaClient();

// --- ROTAS DE CAMPEONATOS ---

app.get('/api/campeonatos', async (req: Request, res: Response) => {
    const prefeituraId = req.query.prefeituraId ? parseInt(String(req.query.prefeituraId)) : undefined;
    try {
        const camps = await prisma.campeonato.findMany({
            where: prefeituraId ? { prefeituraId } : {}
        });
        res.json(camps);
    } catch (e) {
        console.error("[DEBUG] Erro GET rodadas:", e);
        res.status(500).json({ error: "Erro ao buscar campeonatos" });
    }
});

app.post('/api/campeonatos', async (req: Request, res: Response) => {
    const { nome, ano, formato, prefeituraId, descricao, dataInicio, dataFim, classificadosPorChave } = req.body;
    try {
        const novo = await prisma.campeonato.create({
            data: {
                nome,
                ano: parseInt(String(ano)) || new Date().getFullYear(),
                formato,
                descricao,
                dataInicio: dataInicio || "2024-01-01",
                dataFim: dataFim || "2024-12-31",
                prefeituraId: parseInt(String(prefeituraId)) || 1,
                classificadosPorChave: classificadosPorChave ? parseInt(String(classificadosPorChave)) : 4
            }
        });
        res.status(201).json(novo);
    } catch (e) {
        res.status(500).json({ error: "Erro ao criar campeonato" });
    }
});

app.put('/api/campeonatos/:id', async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const { nome, ano, formato, descricao, dataInicio, dataFim, status, classificadosPorChave } = req.body;
    try {
        const atualizado = await prisma.campeonato.update({
            where: { id },
            data: {
                nome,
                ano: parseInt(String(ano)),
                formato,
                descricao,
                dataInicio,
                dataFim,
                status,
                classificadosPorChave: classificadosPorChave ? parseInt(String(classificadosPorChave)) : undefined
            }
        });
        res.json(atualizado);
    } catch (e) {
        res.status(404).json({ error: "Não encontrado" });
    }
});

app.delete('/api/campeonatos/:id', async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        await prisma.participacao.deleteMany({ where: { campeonatoId: id } });
        await prisma.rodada.deleteMany({ where: { campeonatoId: id } });
        await prisma.campeonato.delete({ where: { id } });
        res.status(204).send();
    } catch {
        res.status(404).send();
    }
});

// --- ROTAS DE ATLETAS ---

app.get('/api/atletas', async (req: Request, res: Response) => {
    try {
        const atletas = await prisma.atleta.findMany();
        res.json(atletas);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar atletas" });
    }
});

app.post('/api/atletas', async (req: Request, res: Response) => {
    const { nome, cpf, dataNasc } = req.body;
    try {
        const novo = await prisma.atleta.create({
            data: {
                nome: String(nome),
                cpf: String(cpf || "000.000.000-00"),
                dataNasc: String(dataNasc || "2000-01-01")
            }
        });
        res.status(201).json(novo);
    } catch (e) {
        res.status(500).json({ error: "Erro ao criar atleta" });
    }
});

app.put('/api/atletas/:id', async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const { nome, cpf, dataNasc } = req.body;
    try {
        const atualizado = await prisma.atleta.update({
            where: { id },
            data: { nome, cpf, dataNasc }
        });
        res.json(atualizado);
    } catch (e) {
        res.status(404).json({ error: "Atleta não encontrado" });
    }
});

app.delete('/api/atletas/:id', async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        const checkEventos = await prisma.evento.count({ where: { atletaId: id } });
        if (checkEventos > 0) return res.status(400).json({ error: "Não é possível excluir o atleta pois ele possui registros em súmulas." });

        await prisma.vinculo.deleteMany({ where: { atletaId: id } });
        await prisma.atleta.delete({ where: { id } });
        res.status(204).send();
    } catch (e) {
        res.status(500).json({ error: "Erro ao excluir atleta. Verifique dependências." });
    }
});

// --- LOGIN ---

app.post('/api/login', async (req: Request, res: Response) => {
    const { email, senha } = req.body;
    console.log(`[DEBUG] Tentativa de login: email=${email}, senha=${senha}`);

    try {
        const user = await (prisma as any).usuario.findFirst({
            where: { email, senha },
            include: { prefeitura: true }
        });

        if (!user) {
            console.log(`[DEBUG] Login falhou: Usuário não encontrado no banco.`);
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        console.log(`[DEBUG] Login sucesso para: ${user.email}`);
        res.json({
            id: user.id,
            email: user.email,
            prefeituraId: user.prefeituraId,
            prefeituraNome: user.prefeitura?.nome || 'Prefeitura Não Vinculada',
            prefeituraSlug: user.prefeitura?.slug || ''
        });
    } catch (e) {
        console.error("[DEBUG] Erro no login:", e);
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

// --- ROTAS DE EQUIPES ---

app.get('/api/equipes', async (req: Request, res: Response) => {
    const prefeituraId = req.query.prefeituraId ? parseInt(String(req.query.prefeituraId)) : undefined;
    try {
        const equipes = await prisma.equipe.findMany({
            where: prefeituraId ? { prefeituraId } : {}
        });
        res.json(equipes);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar equipes" });
    }
});

app.post('/api/equipes', async (req: Request, res: Response) => {
    const { nome, responsavel, telefone, local, prefeituraId } = req.body;
    try {
        const nova = await prisma.equipe.create({
            data: {
                nome,
                responsavel,
                telefone,
                local,
                prefeituraId: parseInt(String(prefeituraId)) || 1
            }
        });
        res.status(201).json(nova);
    } catch (e) {
        res.status(500).json({ error: "Erro ao criar equipe" });
    }
});

app.get('/api/equipes/:id', async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        const equipe = await prisma.equipe.findUnique({ where: { id } });
        if (!equipe) return res.status(404).json({ error: "Equipe não encontrada" });
        res.json(equipe);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar equipe" });
    }
});

app.put('/api/equipes/:id', async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const { nome, responsavel, telefone, local } = req.body;
    try {
        const atualizada = await prisma.equipe.update({
            where: { id },
            data: { nome, responsavel, telefone, local }
        });
        res.json(atualizada);
    } catch (e) {
        res.status(404).json({ error: "Equipe não encontrada" });
    }
});

app.delete('/api/equipes/:id', async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        const checkJogos = await prisma.jogo.count({ where: { OR: [{ mandanteId: id }, { visitanteId: id }] } });
        if (checkJogos > 0) return res.status(400).json({ error: "Não é possível excluir a equipe pois ela já possui jogos na tabela." });

        await prisma.vinculo.deleteMany({ where: { equipeId: id } });
        await prisma.participacao.deleteMany({ where: { equipeId: id } });
        await prisma.equipe.delete({ where: { id } });
        res.status(204).send();
    } catch (e) {
        res.status(500).json({ error: "Erro ao excluir equipe. Verifique dependências." });
    }
});

// --- ELENCO ---

app.get('/api/equipes/:id/elenco', async (req: Request, res: Response) => {
    const equipeId = parseInt(String(req.params.id));
    try {
        const vinculos = await prisma.vinculo.findMany({
            where: { equipeId },
            include: { atleta: true }
        });
        const elenco = vinculos.map(v => ({
            vinculoId: v.id,
            atletaId: v.atletaId,
            nome: v.atleta?.nome || "Desconhecido",
            tipo: v.tipo
        }));
        res.json(elenco);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar elenco" });
    }
});

app.post('/api/vinculos', async (req: Request, res: Response) => {
    const { atletaId, equipeId, tipo } = req.body;
    try {
        const novo = await prisma.vinculo.create({
            data: {
                atletaId: parseInt(String(atletaId)),
                equipeId: parseInt(String(equipeId)),
                tipo: String(tipo)
            }
        });
        res.status(201).json(novo);
    } catch (e) {
        res.status(500).json({ error: "Erro ao criar vínculo" });
    }
});

// --- PARTICIPAÇÕES ---

app.get('/api/campeonatos/:id/equipes', async (req: Request, res: Response) => {
    const campeonatoId = parseInt(String(req.params.id));
    try {
        const participacoes = await prisma.participacao.findMany({
            where: { campeonatoId },
            include: { equipe: true }
        });
        const inscritos = participacoes.map(p => ({
            participacaoId: p.id,
            id: p.equipe?.id,
            nome: p.equipe?.nome,
            local: p.equipe?.local,
            chave: p.chave
        }));
        res.json(inscritos);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar inscritos" });
    }
});

app.post('/api/participacoes', async (req: Request, res: Response) => {
    const { equipeId, campeonatoId, chave } = req.body;
    try {
        const nova = await prisma.participacao.create({
            data: {
                equipeId: parseInt(String(equipeId)),
                campeonatoId: parseInt(String(campeonatoId)),
                chave: String(chave || "")
            }
        });
        res.status(201).json(nova);
    } catch (e) {
        res.status(500).json({ error: "Erro ao inscrever equipe" });
    }
});

// --- CLASSIFICAÇÃO ---

app.get('/api/campeonatos/:id/classificacao', async (req: Request, res: Response) => {
    const campeonatoId = parseInt(String(req.params.id));
    const { chave } = req.query;
    try {
        const participacoes = await prisma.participacao.findMany({
            where: {
                campeonatoId,
                ...(chave ? { chave: String(chave) } : {})
            },
            include: { equipe: true }
        });

        const jogos = await prisma.jogo.findMany({
            where: {
                rodada: { campeonatoId },
                status: 'Finalizado'
            }
        });

        const tabela: Record<number, any> = {};
        participacoes.forEach(p => {
            if (p.equipe) {
                tabela[p.equipe.id] = { id: p.equipe.id, nome: p.equipe.nome, p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 };
            }
        });

        jogos.forEach(j => {
            const mId = j.mandanteId;
            const vId = j.visitanteId;
            const gM = j.golsMandante || 0;
            const gV = j.golsVisitante || 0;

            if (mId && tabela[mId]) {
                const item = tabela[mId];
                item.j++;
                item.gp += gM;
                item.gc += gV;
                if (gM > gV) { item.p += 3; item.v++; }
                else if (gM < gV) { item.d++; }
                else { item.p += 1; item.e++; }
            }
            if (vId && tabela[vId]) {
                const item = tabela[vId];
                item.j++;
                item.gp += gV;
                item.gc += gM;
                if (gV > gM) { item.p += 3; item.v++; }
                else if (gV < gM) { item.d++; }
                else { item.p += 1; item.e++; }
            }
        });

        const resultado = Object.values(tabela).map((item: any) => {
            item.sg = item.gp - item.gc;
            return item;
        });

        resultado.sort((a: any, b: any) => {
            if (b.p !== a.p) return b.p - a.p;      // Pontos (Desc)
            if (b.v !== a.v) return b.v - a.v;      // Vitórias (Desc)
            if (a.gc !== b.gc) return a.gc - b.gc;  // Gols Sofridos (Asc - menor é melhor)
            return b.gp - a.gp;                     // Gols Pró (Desc)
        });

        res.json(resultado);
    } catch (e) {
        res.status(500).json({ error: "Erro ao gerar classificação" });
    }
});

// --- RODADAS ---

app.get('/api/campeonatos/:id/rodadas', async (req: Request, res: Response) => {
    const campeonatoId = parseInt(String(req.params.id));
    try {
        const rodadas = await prisma.rodada.findMany({
            where: { campeonatoId },
            orderBy: { numero: 'asc' }
        });
        res.json(rodadas);
    } catch (e) {
        console.error("[DEBUG] Erro GET /api/campeonatos/:id/rodadas:", e);
        res.status(500).json({ error: "Erro ao buscar rodadas" });
    }
});

app.post('/api/rodadas', async (req: Request, res: Response) => {
    const { numero, nome, campeonatoId } = req.body;
    try {
        // Conta rodadas existentes para numerar automaticamente se não vier numero
        const count = await prisma.rodada.count({ where: { campeonatoId: parseInt(String(campeonatoId)) } });
        const nova = await prisma.rodada.create({
            data: {
                numero: parseInt(String(numero)) || (count + 1),
                nome: nome || null,
                tipo: req.body.tipo || "GRUPO",
                campeonatoId: parseInt(String(campeonatoId))
            }
        });
        res.status(201).json(nova);
    } catch (e) {
        console.error("[DEBUG] Erro POST /api/rodadas:", e);
        res.status(500).json({ error: "Erro ao criar rodada" });
    }
});

app.delete('/api/rodadas/:id', async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        await prisma.jogo.deleteMany({ where: { rodadaId: id } });
        await prisma.rodada.delete({ where: { id } });
        res.status(204).send();
    } catch (e) {
        console.error("[DEBUG] Erro DELETE /api/rodadas/:id:", e);
        res.status(500).json({ error: "Erro ao excluir rodada" });
    }
});

// --- JOGOS ---

app.get('/api/jogos', async (req: Request, res: Response) => {
    const campIdRaw = req.query.campeonatoId;
    const rodadaIdRaw = req.query.rodadaId;
    const chaveRaw = req.query.chave;

    const where: any = {};
    if (campIdRaw) where.rodada = { campeonatoId: parseInt(String(campIdRaw)) };
    if (rodadaIdRaw) where.rodadaId = parseInt(String(rodadaIdRaw));
    if (chaveRaw) where.chave = String(chaveRaw);

    try {
        const jogos = await prisma.jogo.findMany({
            where,
            orderBy: { numero: 'asc' },
            include: { rodada: true }
        });
        res.json(jogos);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar jogos" });
    }
});

app.get('/api/jogos/:id/detalhes', async (req: Request, res: Response) => {
    const jogoId = parseInt(String(req.params.id));
    console.log(`[API] Buscando detalhes do jogo ID: ${jogoId}`);
    try {
        const jogo = await prisma.jogo.findUnique({
            where: { id: jogoId },
            include: { rodada: true }
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
            jogo: {
                ...jogo,
                campeonatoId: jogo.rodada?.campeonatoId
            },
            elencoMandante,
            elencoVisitante
        });
    } catch (e) {
        console.error("[API] Erro ao buscar detalhes do jogo:", e);
        res.status(500).json({ error: "Erro ao buscar detalhes do jogo" });
    }
});

app.post('/api/jogos', async (req: Request, res: Response) => {
    const { rodadaId, numero, mandanteId, visitanteId, mandanteNome, visitanteNome, mandantePlaceholder, visitantePlaceholder, data, horario, local, chave } = req.body;
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
                data,
                horario,
                local,
                chave,
                status: 'Agendado'
            }
        });
        res.status(201).json(novo);
    } catch (e) {
        console.error("[DEBUG] Erro POST /api/jogos:", e);
        res.status(500).json({ error: "Erro ao criar jogo" });
    }
});

app.put('/api/jogos/:id', async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const { numero, horario, local, mandanteId, visitanteId, mandanteNome, visitanteNome, mandantePlaceholder, visitantePlaceholder, data, status, chave } = req.body;
    try {
        const atualizado = await prisma.jogo.update({
            where: { id },
            data: {
                numero: parseInt(String(numero)),
                horario,
                local,
                mandanteId: mandanteId ? parseInt(String(mandanteId)) : null,
                visitanteId: visitanteId ? parseInt(String(visitanteId)) : null,
                mandantePlaceholder: mandantePlaceholder || null,
                visitantePlaceholder: visitantePlaceholder || null,
                mandanteNome: mandanteNome || mandantePlaceholder || "A Definir",
                visitanteNome: visitanteNome || visitantePlaceholder || "A Definir",
                data,
                status,
                chave
            }
        });
        res.json(atualizado);
    } catch (e) {
        console.error("[DEBUG] Erro PUT /api/jogos/:id:", e);
        res.status(404).json({ error: "Jogo não encontrado" });
    }
});

app.post('/api/jogos/finalizar', async (req: Request, res: Response) => {
    const { jogoId, golsM, golsV, estatisticas } = req.body;
    const idProcurado = parseInt(String(jogoId));
    try {
        const jogoAtualizado = await prisma.jogo.update({
            where: { id: idProcurado },
            data: {
                golsMandante: Number(golsM),
                golsVisitante: Number(golsV),
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
});

app.post('/api/campeonatos/:id/gerar-chaveamento', async (req: Request, res: Response) => {
    const campeonatoId = parseInt(String(req.params.id));
    try {
        // 1. Obter todas as equipes e classificar por chave
        const participacoes = await prisma.participacao.findMany({
            where: { campeonatoId },
            include: { equipe: true }
        });

        const jogosGrupo = await prisma.jogo.findMany({
            where: { rodada: { campeonatoId, tipo: 'GRUPO' }, status: 'Finalizado' }
        });

        const chavesUnicas = [...new Set(participacoes.map(p => p.chave))];
        const rankingPorChave: Record<string, any[]> = {};

        for (const chave of chavesUnicas) {
            const equipesChave = participacoes.filter(p => p.chave === chave);
            const tabela: Record<number, any> = {};

            equipesChave.forEach(p => {
                if (p.equipe) {
                    tabela[p.equipe.id] = { id: p.equipe.id, nome: p.equipe.nome, p: 0, v: 0, sg: 0, gp: 0, gc: 0 };
                }
            });

            jogosGrupo.forEach(j => {
                const mId = j.mandanteId;
                const vId = j.visitanteId;
                const gM = j.golsMandante || 0;
                const gV = j.golsVisitante || 0;

                if (mId && tabela[mId]) {
                    tabela[mId].gp += gM;
                    tabela[mId].gc += gV;
                    if (gM > gV) { tabela[mId].p += 3; tabela[mId].v++; }
                    else if (gM < gV) { } // No d needed here? let's keep it consistent
                    else { tabela[mId].p += 1; }
                }
                if (vId && tabela[vId]) {
                    tabela[vId].gp += gV;
                    tabela[vId].gc += gM;
                    if (gV > gM) { tabela[vId].p += 3; tabela[vId].v++; }
                    else if (gV < gM) { }
                    else { tabela[vId].p += 1; }
                }
            });

            const resultado = Object.values(tabela).map((item: any) => { item.sg = item.gp - item.gc; return item; });
            resultado.sort((a: any, b: any) => (b.p - a.p) || (b.v - a.v) || (a.gc - b.gc) || (b.gp - a.gp));
            if (chave !== null) {
                rankingPorChave[chave] = resultado;
            } else {
                rankingPorChave['GERAL'] = resultado;
            }
        }

        // 2. Localizar jogos de MATA_MATA que contêm placeholders e substituí-los
        const jogosMataMata = await prisma.jogo.findMany({
            where: { rodada: { campeonatoId, tipo: 'MATA_MATA' } }
        });

        let atualizados = 0;
        const chavesOrdenadas = Object.keys(rankingPorChave).sort((a, b) => b.length - a.length);

        const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        for (const jogo of jogosMataMata) {
            let updateData: any = {};

            const processPlaceholder = (placeholder: string | null) => {
                if (!placeholder) return null;
                const matchPos = placeholder.match(/(\d+)º/);
                if (!matchPos) return null;
                const posicao = parseInt(matchPos[1]) - 1; // 0-indexed

                for (const ch of chavesOrdenadas) {
                    if (ch === 'GERAL') continue;
                    const regex = new RegExp('(^|\\s|º|[^a-zA-Z0-9])' + escapeRegex(ch) + '($|\\s|[^a-zA-Z0-9])', 'i');
                    if (regex.test(placeholder) || placeholder.toUpperCase().includes(`CHAVE ${ch.toUpperCase()}`) || placeholder.toUpperCase().includes(`GRUPO ${ch.toUpperCase()}`)) {
                        if (rankingPorChave[ch] && rankingPorChave[ch][posicao]) {
                            return rankingPorChave[ch][posicao];
                        }
                    }
                }

                // Fallback para GERAL se nenhuma chave for especificada e hover apenas GERAL
                if (rankingPorChave['GERAL'] && rankingPorChave['GERAL'][posicao]) {
                    return rankingPorChave['GERAL'][posicao];
                }
                return null;
            };

            if (jogo.mandantePlaceholder && !jogo.mandanteId) {
                const classificado = processPlaceholder(jogo.mandantePlaceholder);
                if (classificado) {
                    updateData.mandanteId = classificado.id;
                    updateData.mandanteNome = classificado.nome;
                }
            }

            if (jogo.visitantePlaceholder && !jogo.visitanteId) {
                const classificado = processPlaceholder(jogo.visitantePlaceholder);
                if (classificado) {
                    updateData.visitanteId = classificado.id;
                    updateData.visitanteNome = classificado.nome;
                }
            }

            if (Object.keys(updateData).length > 0) {
                await prisma.jogo.update({
                    where: { id: jogo.id },
                    data: updateData
                });
                atualizados++;
            }
        }

        res.json({ message: "Chaveamento gerado com sucesso", jogosAtualizados: atualizados });
    } catch (e) {
        console.error("[DEBUG] Erro gerar chaveamento:", e);
        res.status(500).json({ error: "Erro ao gerar chaveamento" });
    }
});

// --- ESTATÍSTICAS ---

app.get('/api/campeonatos/:id/estatisticas', async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        const eventos = await prisma.evento.findMany({
            where: { jogo: { rodada: { campeonatoId: id } } },
            include: {
                atleta: { include: { vinculos: { include: { equipe: true } } } }
            }
        });

        console.log(`[DEBUG] Query Eventos retornou: ${eventos.length} registros`);

        const artilhariaMap: any = {};
        const disciplinaMap: any = {};

        eventos.forEach(e => {
            const atletaId = e.atletaId;
            const nomeAtleta = e.atleta.nome;
            const vinculo = e.atleta.vinculos[0];
            const nomeEquipe = vinculo?.equipe?.nome || "Time";

            if (e.gols > 0) {
                if (!artilhariaMap[atletaId]) artilhariaMap[atletaId] = { nome: nomeAtleta, equipeNome: nomeEquipe, gols: 0 };
                artilhariaMap[atletaId].gols += e.gols;
            }

            if (e.am > 0 || e.vm > 0) {
                if (!disciplinaMap[nomeEquipe]) disciplinaMap[nomeEquipe] = { nome: nomeEquipe, amarelos: 0, vermelhos: 0, peso: 0 };
                disciplinaMap[nomeEquipe].amarelos += e.am;
                disciplinaMap[nomeEquipe].vermelhos += e.vm;
                disciplinaMap[nomeEquipe].peso += (e.am * 1) + (e.vm * 3);
            }
        });

        // Melhor Defesa (Média de gols sofridos)
        const defesaMap: any = {};
        const jogosConcluidos = await prisma.jogo.findMany({
            where: { rodada: { campeonatoId: id }, status: 'Finalizado' }
        });

        jogosConcluidos.forEach(j => {
            if (j.mandanteId !== null) {
                const mId = j.mandanteId as number;
                if (!defesaMap[mId]) defesaMap[mId] = { nome: j.mandanteNome, golsSofridos: 0, jogos: 0 };
                defesaMap[mId].golsSofridos += j.golsVisitante;
                defesaMap[mId].jogos++;
            }

            if (j.visitanteId !== null) {
                const vId = j.visitanteId as number;
                if (!defesaMap[vId]) defesaMap[vId] = { nome: j.visitanteNome, golsSofridos: 0, jogos: 0 };
                defesaMap[vId].golsSofridos += j.golsMandante;
                defesaMap[vId].jogos++;
            }
        });

        const artilharia = Object.values(artilhariaMap).sort((a: any, b: any) => b.gols - a.gols);
        const disciplina = Object.values(disciplinaMap).sort((a: any, b: any) => b.peso - a.peso);
        const defesa = Object.values(defesaMap).map((d: any) => ({
            ...d,
            media: d.jogos > 0 ? (d.golsSofridos / d.jogos).toFixed(2) : "0.00"
        })).sort((a: any, b: any) => Number(a.media) - Number(b.media) || a.golsSofridos - b.golsSofridos);

        console.log(`[API STATS] Enviando ${artilharia.length} registros de artilharia para o camp ${id}`);
        res.json({ artilharia, disciplina, defesa });
    } catch (e) {
        res.status(500).json({ error: "Erro ao gerar estatísticas" });
    }
});

// --- CONFIGURAÇÕES DA PREFEITURA ---

app.get('/api/configuracao', async (req: Request, res: Response) => {
    const slug = req.query.slug;
    const prefeituraId = req.query.prefeituraId ? parseInt(String(req.query.prefeituraId)) : 1;
    try {
        const pref = await prisma.prefeitura.findFirst({
            where: slug ? { slug: String(slug) } : { id: prefeituraId }
        });
        if (!pref) return res.status(404).json({ error: "Prefeitura não encontrada" });
        res.json(pref);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar configurações" });
    }
});

app.put('/api/configuracao', async (req: Request, res: Response) => {
    const { id, nome, logoUrl, corPrimaria, corSecundaria } = req.body;
    try {
        const pref = await prisma.prefeitura.update({
            where: { id: parseInt(String(id)) || 1 },
            data: { nome, logoUrl, corPrimaria, corSecundaria }
        });
        res.json(pref);
    } catch (e) {
        res.status(500).json({ error: "Erro ao salvar configurações" });
    }
});

// --- MASTER ADMIN ---

const checkSuperAdmin = async (req: Request, res: Response, next: express.NextFunction) => {
    const adminId = parseInt(String(req.headers['x-admin-id'] || req.query.adminId || req.body?.adminId));
    if (!adminId || isNaN(adminId)) return res.status(401).json({ error: "Acesso negado. Admin ID não fornecido." });

    const adminUser = await prisma.usuario.findUnique({ where: { id: adminId } });
    if (!adminUser || adminUser.prefeituraId !== null) {
        return res.status(403).json({ error: "Acesso negado. Requer permissão de Super Admin." });
    }
    next();
};

app.get('/api/admin/prefeituras', checkSuperAdmin, async (req: Request, res: Response) => {
    try {
        const prefeituras = await prisma.prefeitura.findMany({
            include: {
                _count: { select: { usuarios: true, campeonatos: true, equipes: true } }
            }
        });
        res.json(prefeituras);
    } catch (e) {
        res.status(500).json({ error: "Erro ao listar prefeituras." });
    }
});

app.post('/api/admin/prefeituras', checkSuperAdmin, async (req: Request, res: Response) => {
    const { nome, slug, logoUrl, corPrimaria, corSecundaria } = req.body;
    try {
        const p = await prisma.prefeitura.create({
            data: { nome, slug, logoUrl, corPrimaria: corPrimaria || "#0d6efd", corSecundaria: corSecundaria || "#6c757d" }
        });
        res.status(201).json(p);
    } catch (e) {
        res.status(500).json({ error: "Erro ao criar prefeitura." });
    }
});

app.put('/api/admin/prefeituras/:id', checkSuperAdmin, async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const { nome, slug, logoUrl, corPrimaria, corSecundaria } = req.body;
    try {
        const p = await prisma.prefeitura.update({
            where: { id },
            data: { nome, slug, logoUrl, corPrimaria, corSecundaria }
        });
        res.json(p);
    } catch (e) {
        res.status(500).json({ error: "Erro ao atualizar prefeitura." });
    }
});

app.delete('/api/admin/prefeituras/:id', checkSuperAdmin, async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        // Exclusão de prefeitura é algo complexo (cascata). 
        // Para a fase atual, vamos apenas evitar exclusão ou fazer exclusão simples das dependências diretas,
        // mas idealmente não se exclui prefeitura com dados.
        await prisma.usuario.deleteMany({ where: { prefeituraId: id } });
        await prisma.prefeitura.delete({ where: { id } });
        res.status(204).send();
    } catch (e) {
        res.status(500).json({ error: "Não foi possível excluir a prefeitura." });
    }
});

app.get('/api/admin/usuarios', checkSuperAdmin, async (req: Request, res: Response) => {
    try {
        const usuarios = await prisma.usuario.findMany({
            include: { prefeitura: true }
        });
        res.json(usuarios.map(u => ({
            id: u.id,
            email: u.email,
            prefeituraId: u.prefeituraId,
            prefeituraNome: u.prefeitura?.nome || "Super Admin"
        })));
    } catch (e) {
        res.status(500).json({ error: "Erro ao listar usuários." });
    }
});

app.post('/api/admin/usuarios', checkSuperAdmin, async (req: Request, res: Response) => {
    const { email, senha, prefeituraId } = req.body;
    try {
        const u = await prisma.usuario.create({
            data: {
                email,
                senha,
                prefeituraId: prefeituraId ? parseInt(String(prefeituraId)) : null
            }
        });
        res.status(201).json({ id: u.id, email: u.email, prefeituraId: u.prefeituraId });
    } catch (e) {
        res.status(500).json({ error: "Erro ao criar usuário. Email já existe?" });
    }
});

app.put('/api/admin/usuarios/:id', checkSuperAdmin, async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const { email, senha, prefeituraId } = req.body;
    try {
        const dataToUpdate: any = { email, prefeituraId: prefeituraId ? parseInt(String(prefeituraId)) : null };
        if (senha) dataToUpdate.senha = senha;

        const u = await prisma.usuario.update({
            where: { id },
            data: dataToUpdate
        });
        res.json({ id: u.id, email: u.email, prefeituraId: u.prefeituraId });
    } catch (e) {
        res.status(500).json({ error: "Erro ao atualizar usuário." });
    }
});

app.delete('/api/admin/usuarios/:id', checkSuperAdmin, async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        await prisma.usuario.delete({ where: { id } });
        res.status(204).send();
    } catch (e) {
        res.status(500).json({ error: "Erro ao excluir usuário." });
    }
});

// --- INICIALIZAÇÃO ---

//const PORT = process.env.PORT || 3001;
//app.listen(PORT, () => {
//    console.log(`\n🚀 Servidor Rodando em http://localhost:${PORT}`);
//    console.log(`✅ Sistema Online: Prata da casa pronto para o jogo!\n`);
//});

// O Render vai enviar a porta pela variável de ambiente PORT
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`\n🚀 Servidor Rodando na porta ${PORT}`);
});
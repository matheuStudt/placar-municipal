import { prisma } from '../prisma.js';
export const getEquipes = async (req, res) => {
    const prefeituraId = req.query.prefeituraId ? parseInt(String(req.query.prefeituraId)) : undefined;
    try {
        const equipes = await prisma.equipe.findMany({
            where: prefeituraId ? { prefeituraId } : {}
        });
        res.json(equipes);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao buscar equipes" });
    }
};
export const createEquipe = async (req, res) => {
    const { nome, responsavel, telefone, local, prefeituraId, logoUrl, categoria } = req.body;
    try {
        const nova = await prisma.equipe.create({
            data: {
                nome,
                responsavel,
                telefone,
                local,
                logoUrl: logoUrl || null,
                categoria: categoria || null,
                prefeituraId: parseInt(String(prefeituraId)) || 1
            }
        });
        res.status(201).json(nova);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao criar equipe" });
    }
};
export const getEquipeById = async (req, res) => {
    const id = parseInt(String(req.params.id));
    try {
        const equipe = await prisma.equipe.findUnique({ where: { id } });
        if (!equipe)
            return res.status(404).json({ error: "Equipe não encontrada" });
        res.json(equipe);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao buscar equipe" });
    }
};
export const updateEquipe = async (req, res) => {
    const id = parseInt(String(req.params.id));
    const { nome, responsavel, telefone, local, logoUrl, categoria } = req.body;
    try {
        const atualizada = await prisma.equipe.update({
            where: { id },
            data: { nome, responsavel, telefone, local, logoUrl: logoUrl || null, categoria: categoria || null }
        });
        res.json(atualizada);
    }
    catch (e) {
        res.status(404).json({ error: "Equipe não encontrada" });
    }
};
export const deleteEquipe = async (req, res) => {
    const id = parseInt(String(req.params.id));
    try {
        const checkJogos = await prisma.jogo.count({ where: { OR: [{ mandanteId: id }, { visitanteId: id }] } });
        if (checkJogos > 0)
            return res.status(400).json({ error: "Não é possível excluir a equipe pois ela já possui jogos na tabela." });
        await prisma.vinculo.deleteMany({ where: { equipeId: id } });
        await prisma.participacao.deleteMany({ where: { equipeId: id } });
        await prisma.equipe.delete({ where: { id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao excluir equipe. Verifique dependências." });
    }
};
export const getElenco = async (req, res) => {
    const equipeId = parseInt(String(req.params.id));
    try {
        const vinculos = await prisma.vinculo.findMany({
            where: { equipeId },
            include: { atleta: true }
        });
        const elenco = vinculos.map(v => ({
            id: v.atletaId,
            vinculoId: v.id,
            atletaId: v.atletaId,
            nome: v.atleta?.nome || "Desconhecido",
            tipo: v.tipo
        }));
        res.json(elenco);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao buscar elenco" });
    }
};
export const limparElenco = async (req, res) => {
    const equipeId = parseInt(String(req.params.id));
    try {
        await prisma.vinculo.deleteMany({
            where: { equipeId }
        });
        res.status(204).send();
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao limpar elenco" });
    }
};

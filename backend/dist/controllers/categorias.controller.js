import { prisma } from '../prisma.js';
export const getCategorias = async (req, res) => {
    const prefeituraId = parseInt(String(req.query.prefeituraId));
    if (!prefeituraId)
        return res.status(400).json({ error: "Prefeitura ID é obrigatório" });
    try {
        let categorias = await prisma.categoria.findMany({
            where: { prefeituraId },
            orderBy: { nome: 'asc' }
        });
        // Se não houver categorias, cria as padrões para esta prefeitura
        if (categorias.length === 0) {
            const defaults = ["Masculino Livre", "Feminino Livre", "Sub-15", "Sub-18", "Veteranos", "Misto"];
            await prisma.categoria.createMany({
                data: defaults.map(nome => ({
                    nome,
                    prefeituraId
                })),
                skipDuplicates: true
            });
            categorias = await prisma.categoria.findMany({
                where: { prefeituraId },
                orderBy: { nome: 'asc' }
            });
        }
        res.json(categorias);
    }
    catch (e) {
        console.error("Erro ao buscar categorias:", e);
        res.status(500).json({ error: "Erro ao buscar categorias" });
    }
};
export const createCategoria = async (req, res) => {
    const { nome, prefeituraId } = req.body;
    if (!nome || !prefeituraId)
        return res.status(400).json({ error: "Nome e Prefeitura ID são obrigatórios" });
    try {
        const nova = await prisma.categoria.create({
            data: {
                nome,
                prefeituraId: parseInt(String(prefeituraId))
            }
        });
        res.status(201).json(nova);
    }
    catch (e) {
        if (e.code === 'P2002') {
            return res.status(400).json({ error: "Uma categoria com este nome já existe para esta prefeitura." });
        }
        res.status(500).json({ error: "Erro ao criar categoria" });
    }
};
export const deleteCategoria = async (req, res) => {
    const id = parseInt(String(req.params.id));
    try {
        await prisma.categoria.delete({ where: { id } });
        res.json({ message: "Categoria excluída com sucesso" });
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao excluir categoria" });
    }
};

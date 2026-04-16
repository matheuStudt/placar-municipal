import { prisma } from '../prisma.js';
export const getAtletas = async (req, res) => {
    try {
        const atletas = await prisma.atleta.findMany();
        res.json(atletas);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao buscar atletas" });
    }
};
export const createAtleta = async (req, res) => {
    const { nome, cpf, dataNasc } = req.body;
    try {
        const novo = await prisma.atleta.create({
            data: {
                nome: String(nome),
                cpf: cpf && String(cpf).trim() ? String(cpf).trim() : null,
                dataNasc: dataNasc && String(dataNasc).trim() ? String(dataNasc).trim() : null
            }
        });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(500).json({ error: 'Erro ao criar atleta' });
    }
};
export const updateAtleta = async (req, res) => {
    const id = parseInt(String(req.params.id));
    const { nome, cpf, dataNasc } = req.body;
    try {
        const atualizado = await prisma.atleta.update({
            where: { id },
            data: { nome, cpf, dataNasc }
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(404).json({ error: "Atleta não encontrado" });
    }
};
export const deleteAtleta = async (req, res) => {
    const id = parseInt(String(req.params.id));
    try {
        const checkEventos = await prisma.evento.count({ where: { atletaId: id } });
        if (checkEventos > 0)
            return res.status(400).json({ error: "Não é possível excluir o atleta pois ele possui registros em súmulas." });
        await prisma.vinculo.deleteMany({ where: { atletaId: id } });
        await prisma.atleta.delete({ where: { id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao excluir atleta. Verifique dependências." });
    }
};
export const getAtletaHistorico = async (req, res) => {
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
        if (!atleta)
            return res.status(404).json({ error: "Atleta não encontrado" });
        const totalGols = await prisma.evento.aggregate({
            where: { atletaId: id },
            _sum: { gols: true }
        });
        res.json({
            ...atleta,
            totalGols: totalGols._sum.gols || 0
        });
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: "Erro ao buscar histórico do atleta" });
    }
};

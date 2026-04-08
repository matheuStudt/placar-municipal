import { prisma } from '../prisma.js';
export const createVinculo = async (req, res) => {
    const { atletaId, equipeId, tipo } = req.body;
    try {
        const aId = parseInt(String(atletaId));
        const eId = parseInt(String(equipeId));
        // Impede duplicidade: mesmo atleta na mesma equipe
        const existente = await prisma.vinculo.findFirst({
            where: { atletaId: aId, equipeId: eId }
        });
        if (existente) {
            return res.status(409).json({ error: "Este atleta já está vinculado a esta equipe." });
        }
        const novo = await prisma.vinculo.create({
            data: { atletaId: aId, equipeId: eId, tipo: String(tipo) }
        });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao criar vínculo" });
    }
};
export const deleteVinculo = async (req, res) => {
    const id = parseInt(String(req.params.id));
    try {
        await prisma.vinculo.delete({ where: { id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao excluir vínculo" });
    }
};

import { prisma } from '../prisma.js';
export const createVinculo = async (req, res) => {
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
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao criar vínculo" });
    }
};

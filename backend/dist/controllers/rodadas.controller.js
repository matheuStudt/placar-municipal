import { prisma } from '../prisma.js';
export const getRodadasByCampeonato = async (req, res) => {
    const campeonatoId = parseInt(String(req.params.id));
    try {
        const rodadas = await prisma.rodada.findMany({
            where: { campeonatoId },
            orderBy: { numero: 'asc' }
        });
        res.json(rodadas);
    }
    catch (e) {
        console.error("[DEBUG] Erro GET /api/campeonatos/:id/rodadas:", e);
        res.status(500).json({ error: "Erro ao buscar rodadas" });
    }
};
export const createRodada = async (req, res) => {
    const { numero, nome, campeonatoId } = req.body;
    try {
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
    }
    catch (e) {
        console.error("[DEBUG] Erro POST /api/rodadas:", e);
        res.status(500).json({ error: "Erro ao criar rodada" });
    }
};
export const deleteRodada = async (req, res) => {
    const id = parseInt(String(req.params.id));
    try {
        await prisma.jogo.deleteMany({ where: { rodadaId: id } });
        await prisma.rodada.delete({ where: { id } });
        res.status(204).send();
    }
    catch (e) {
        console.error("[DEBUG] Erro DELETE /api/rodadas/:id:", e);
        res.status(500).json({ error: "Erro ao excluir rodada" });
    }
};

import { prisma } from '../prisma.js';
export const getEquipesInscritas = async (req, res) => {
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
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao buscar inscritos" });
    }
};
export const createParticipacao = async (req, res) => {
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
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao inscrever equipe" });
    }
};

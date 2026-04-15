import { prisma } from '../prisma.js';
export const getConfiguracao = async (req, res) => {
    const slug = req.query.slug;
    const prefeituraId = req.query.prefeituraId ? parseInt(String(req.query.prefeituraId)) : 1;
    try {
        let pref = await prisma.prefeitura.findFirst({
            where: slug ? { slug: String(slug) } : { id: prefeituraId }
        });
        // Fallback: se não encontrou pelo slug (ex: slug='principal' que não existe),
        // retorna a primeira prefeitura cadastrada para não quebrar o portal
        if (!pref && slug) {
            pref = await prisma.prefeitura.findFirst({ orderBy: { id: 'asc' } });
        }
        if (!pref)
            return res.status(404).json({ error: "Prefeitura não encontrada" });
        res.json(pref);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao buscar configurações" });
    }
};
export const updateConfiguracao = async (req, res) => {
    const { id, nome, logoUrl, corPrimaria, corSecundaria } = req.body;
    try {
        const pref = await prisma.prefeitura.update({
            where: { id: parseInt(String(id)) || 1 },
            data: { nome, logoUrl, corPrimaria, corSecundaria }
        });
        res.json(pref);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao salvar configurações" });
    }
};

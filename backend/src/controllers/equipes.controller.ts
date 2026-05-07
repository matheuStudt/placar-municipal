import { Request, Response } from 'express';
import { prisma } from '../prisma.js';
import { GoogleGenAI } from '@google/genai';

export const getEquipes = async (req: Request, res: Response) => {
    const prefeituraId = req.query.prefeituraId ? parseInt(String(req.query.prefeituraId)) : undefined;
    try {
        const equipes = await prisma.equipe.findMany({
            where: prefeituraId ? { prefeituraId } : {}
        });
        res.json(equipes);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar equipes" });
    }
};

export const createEquipe = async (req: Request, res: Response) => {
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
    } catch (e) {
        res.status(500).json({ error: "Erro ao criar equipe" });
    }
};

export const getEquipeById = async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    try {
        const equipe = await prisma.equipe.findUnique({ where: { id } });
        if (!equipe) return res.status(404).json({ error: "Equipe não encontrada" });
        res.json(equipe);
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar equipe" });
    }
};

export const updateEquipe = async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const { nome, responsavel, telefone, local, logoUrl, categoria } = req.body;
    try {
        const atualizada = await prisma.equipe.update({
            where: { id },
            data: { nome, responsavel, telefone, local, logoUrl: logoUrl || null, categoria: categoria || null }
        });
        res.json(atualizada);
    } catch (e) {
        res.status(404).json({ error: "Equipe não encontrada" });
    }
};

export const deleteEquipe = async (req: Request, res: Response) => {
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
};

export const getElenco = async (req: Request, res: Response) => {
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
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar elenco" });
    }
};

export const limparElenco = async (req: Request, res: Response) => {
    const equipeId = parseInt(String(req.params.id));
    try {
        await prisma.vinculo.deleteMany({
            where: { equipeId }
        });
        res.status(204).send();
    } catch (e) {
        res.status(500).json({ error: "Erro ao limpar elenco" });
    }
};

export const escanearLista = async (req: Request, res: Response) => {
    try {
        const file = req.file;
        const prefeituraIdStr = req.query.prefeituraId;

        if (!prefeituraIdStr) return res.status(400).json({ error: "Prefeitura ID não fornecido." });
        if (!file) return res.status(400).json({ error: "Nenhum arquivo enviado." });

        const prefeituraId = parseInt(String(prefeituraIdStr));

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) return res.status(500).json({ error: "GEMINI_API_KEY não configurada no servidor." });

        const ai = new GoogleGenAI({ apiKey });

        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: [
                {
                    role: 'user',
                    parts: [
                        {
                            inlineData: {
                                data: file.buffer.toString("base64"),
                                mimeType: file.mimetype
                            }
                        },
                        {
                            text: 'Extraia os nomes dos jogadores desta lista de inscrição. Ignore cabeçalhos e números. Retorne APENAS um array JSON no formato: [{"nome": "NOME COMPLETO EM MAIÚSCULO"}].'
                        }
                    ]
                }
            ]
        });

        let text = response.text || "[]";
        text = text.replace(/```json/g, "").replace(/```/g, "").trim();
        let extractedNames: { nome: string }[] = [];
        try {
            extractedNames = JSON.parse(text);
        } catch (e) {
            console.error("Erro no parse do JSON do Gemini:", text);
            return res.status(400).json({ error: "A IA não retornou um formato JSON válido." });
        }

        const resultados: { nome: string, status: string, atletaId?: number }[] = [];
        for (const item of extractedNames) {
            const atleta = await prisma.atleta.findFirst({
                where: {
                    prefeituraId,
                    nome: { equals: item.nome, mode: 'insensitive' }
                }
            });

            if (atleta) {
                resultados.push({ nome: item.nome, status: 'EXISTENTE', atletaId: atleta.id });
            } else {
                resultados.push({ nome: item.nome, status: 'NOVO' });
            }
        }

        res.json(resultados);

    } catch (e: any) {
        console.error("Erro no escanearLista:", e);
        res.status(500).json({ error: "Erro interno no OCR." });
    }
};

export const vincularLote = async (req: Request, res: Response) => {
    const equipeId = parseInt(String(req.params.id));
    const { prefeituraId, atletas } = req.body;

    if (!prefeituraId || !equipeId || !atletas || !Array.isArray(atletas)) {
        return res.status(400).json({ error: "Dados inválidos." });
    }

    try {
        await prisma.$transaction(async (tx) => {
            const idsParaVincular: number[] = [];

            for (const item of atletas) {
                if (item.status === 'NOVO') {
                    const novoAtleta = await tx.atleta.create({
                        data: {
                            nome: item.nome,
                            prefeituraId: parseInt(String(prefeituraId))
                        }
                    });
                    idsParaVincular.push(novoAtleta.id);
                } else if (item.status === 'EXISTENTE' && item.atletaId) {
                    idsParaVincular.push(item.atletaId);
                }
            }

            const existentes = await tx.vinculo.findMany({
                where: {
                    equipeId,
                    atletaId: { in: idsParaVincular }
                }
            });

            const idsExistentes = existentes.map(v => v.atletaId);
            const idsNovosVinculos = idsParaVincular.filter(id => !idsExistentes.includes(id));

            if (idsNovosVinculos.length > 0) {
                await tx.vinculo.createMany({
                    data: idsNovosVinculos.map(atletaId => ({
                        equipeId,
                        atletaId,
                        tipo: "Atleta"
                    }))
                });
            }
        });

        res.json({ success: true, message: "Lote vinculado com sucesso!" });

    } catch (e: any) {
        console.error("Erro no vincularLote:", e);
        res.status(500).json({ error: "Erro ao processar lote." });
    }
};

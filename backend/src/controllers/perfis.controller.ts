import { Response } from 'express';
import { prisma } from '../prisma.js';
import { AuthRequest } from '../middleware/auth.middleware.js';

export const getPerfis = async (req: AuthRequest, res: Response) => {
    const prefeituraId = req.user?.prefeituraId;
    if (!prefeituraId) return res.status(403).json({ error: "Acesso negado." });

    try {
        const perfis = await prisma.perfilAcesso.findMany({
            where: { prefeituraId }
        });
        res.json(perfis);
    } catch (e) {
        res.status(500).json({ error: "Erro ao listar perfis." });
    }
};

export const createPerfil = async (req: AuthRequest, res: Response) => {
    const prefeituraId = req.user?.prefeituraId;
    if (!prefeituraId) return res.status(403).json({ error: "Acesso negado." });

    const { nome, permissoes } = req.body;
    try {
        const perfil = await prisma.perfilAcesso.create({
            data: { 
                nome, 
                permissoes, 
                prefeituraId 
            }
        });
        res.status(201).json(perfil);
    } catch (e) {
        res.status(500).json({ error: "Erro ao criar perfil." });
    }
};

export const updatePerfil = async (req: AuthRequest, res: Response) => {
    const prefeituraId = req.user?.prefeituraId;
    const id = parseInt(String(req.params.id));
    const { nome, permissoes } = req.body;

    try {
        const perfil = await prisma.perfilAcesso.update({
            where: { 
                id, 
                prefeituraId: prefeituraId as number 
            },
            data: { nome, permissoes }
        });
        res.json(perfil);
    } catch (e) {
        res.status(500).json({ error: "Erro ao atualizar perfil." });
    }
};

export const deletePerfil = async (req: AuthRequest, res: Response) => {
    const prefeituraId = req.user?.prefeituraId;
    const id = parseInt(String(req.params.id));

    try {
        await prisma.perfilAcesso.delete({
            where: { 
                id, 
                prefeituraId: prefeituraId as number 
            }
        });
        res.status(204).send();
    } catch (e) {
        res.status(500).json({ error: "Erro ao excluir perfil." });
    }
};

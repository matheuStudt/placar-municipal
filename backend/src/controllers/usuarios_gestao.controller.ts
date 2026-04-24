import { Response } from 'express';
import { prisma } from '../prisma.js';
import bcrypt from 'bcrypt';
import { AuthRequest } from '../middleware/auth.middleware.js';

const SALT_ROUNDS = 10;

export const getUsuarios = async (req: AuthRequest, res: Response) => {
    let prefeituraId = req.user?.prefeituraId;

    if (req.user?.role === 'MASTER') {
        if (req.query.prefeituraId) {
            prefeituraId = parseInt(String(req.query.prefeituraId));
        } else {
            prefeituraId = undefined; // MASTER buscando todos
        }
    } else {
        if (!prefeituraId) return res.status(403).json({ error: "Acesso negado." });
    }

    try {
        const whereClause = prefeituraId ? { prefeituraId } : {};
        const usuarios = await prisma.usuario.findMany({
            where: whereClause,
            include: { perfil: true, prefeitura: true }
        });
        res.json(usuarios.map(u => ({
            id: u.id,
            email: u.email,
            role: u.role,
            perfilId: u.perfilId,
            perfilNome: u.perfil?.nome || "Sem Perfil",
            prefeituraId: u.prefeituraId,
            prefeituraNome: u.prefeitura?.nome || "Todas"
        })));
    } catch (e) {
        res.status(500).json({ error: "Erro ao listar usuários." });
    }
};

export const createUsuario = async (req: AuthRequest, res: Response) => {
    let prefeituraId = req.user?.prefeituraId;
    const { email, senha, perfilId, role } = req.body;

    if (req.user?.role === 'MASTER') {
        if (req.body.prefeituraId) {
            prefeituraId = parseInt(String(req.body.prefeituraId));
        } else {
            prefeituraId = undefined;
        }
    } else {
        if (!prefeituraId) return res.status(403).json({ error: "Acesso negado." });
    }

    try {
        const senhaHash = await bcrypt.hash(String(senha), SALT_ROUNDS);
        const u = await prisma.usuario.create({
            data: {
                email,
                senha: senhaHash,
                prefeituraId: prefeituraId || null,
                perfilId: perfilId ? parseInt(String(perfilId)) : null,
                role: role || 'COMUM'
            }
        });
        res.status(201).json({ id: u.id, email: u.email });
    } catch (e) {
        res.status(500).json({ error: "Erro ao criar usuário. Email já existe?" });
    }
};

export const updateUsuario = async (req: AuthRequest, res: Response) => {
    const id = parseInt(String(req.params.id));
    const { email, senha, perfilId, role, prefeituraId: bodyPrefeituraId } = req.body;

    try {
        const dataToUpdate: any = { 
            email, 
            perfilId: perfilId ? parseInt(String(perfilId)) : null,
            role: role || undefined
        };

        if (req.user?.role === 'MASTER' && bodyPrefeituraId !== undefined) {
             dataToUpdate.prefeituraId = bodyPrefeituraId ? parseInt(String(bodyPrefeituraId)) : null;
        }

        if (senha) {
            dataToUpdate.senha = await bcrypt.hash(String(senha), SALT_ROUNDS);
        }

        const u = await prisma.usuario.update({
            where: { id }, // A proteção de acesso por tenant já foi validada no middleware verificarHierarquiaUsuario
            data: dataToUpdate
        });
        res.json({ id: u.id, email: u.email });
    } catch (e) {
        res.status(500).json({ error: "Erro ao atualizar usuário." });
    }
};

export const deleteUsuario = async (req: AuthRequest, res: Response) => {
    const id = parseInt(String(req.params.id));

    try {
        await prisma.usuario.delete({
            where: { id } // A proteção de acesso por tenant já foi validada no middleware verificarHierarquiaUsuario
        });
        res.status(204).send();
    } catch (e) {
        res.status(500).json({ error: "Erro ao excluir usuário." });
    }
};

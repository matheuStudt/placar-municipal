import { prisma } from '../prisma.js';
import bcrypt from 'bcrypt';
const SALT_ROUNDS = 10;
export const getUsuarios = async (req, res) => {
    const prefeituraId = req.user?.prefeituraId;
    if (!prefeituraId)
        return res.status(403).json({ error: "Acesso negado." });
    try {
        const usuarios = await prisma.usuario.findMany({
            where: { prefeituraId: prefeituraId },
            include: { perfil: true }
        });
        res.json(usuarios.map(u => ({
            id: u.id,
            email: u.email,
            role: u.role,
            perfilId: u.perfilId,
            perfilNome: u.perfil?.nome || "Sem Perfil"
        })));
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao listar usuários." });
    }
};
export const createUsuario = async (req, res) => {
    const prefeituraId = req.user?.prefeituraId;
    if (!prefeituraId)
        return res.status(403).json({ error: "Acesso negado." });
    const { email, senha, perfilId, role } = req.body;
    try {
        const senhaHash = await bcrypt.hash(String(senha), SALT_ROUNDS);
        const u = await prisma.usuario.create({
            data: {
                email,
                senha: senhaHash,
                prefeituraId,
                perfilId: perfilId ? parseInt(String(perfilId)) : null,
                role: role || 'COMUM'
            }
        });
        res.status(201).json({ id: u.id, email: u.email });
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao criar usuário. Email já existe?" });
    }
};
export const updateUsuario = async (req, res) => {
    const prefeituraId = req.user?.prefeituraId;
    const id = parseInt(String(req.params.id));
    const { email, senha, perfilId, role } = req.body;
    try {
        const dataToUpdate = {
            email,
            perfilId: perfilId ? parseInt(String(perfilId)) : null,
            role: role || undefined
        };
        if (senha) {
            dataToUpdate.senha = await bcrypt.hash(String(senha), SALT_ROUNDS);
        }
        const u = await prisma.usuario.update({
            where: {
                id,
                prefeituraId: prefeituraId
            },
            data: dataToUpdate
        });
        res.json({ id: u.id, email: u.email });
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao atualizar usuário." });
    }
};
export const deleteUsuario = async (req, res) => {
    const prefeituraId = req.user?.prefeituraId;
    const id = parseInt(String(req.params.id));
    try {
        await prisma.usuario.delete({
            where: {
                id,
                prefeituraId: prefeituraId
            }
        });
        res.status(204).send();
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao excluir usuário." });
    }
};

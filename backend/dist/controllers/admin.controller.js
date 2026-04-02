import { prisma } from '../prisma.js';
export const checkSuperAdmin = async (req, res, next) => {
    const adminId = parseInt(String(req.headers['x-admin-id'] || req.query.adminId || req.body?.adminId));
    if (!adminId || isNaN(adminId))
        return res.status(401).json({ error: "Acesso negado. Admin ID não fornecido." });
    const adminUser = await prisma.usuario.findUnique({ where: { id: adminId } });
    if (!adminUser || adminUser.prefeituraId !== null) {
        return res.status(403).json({ error: "Acesso negado. Requer permissão de Super Admin." });
    }
    next();
};
export const getPrefeituras = async (req, res) => {
    try {
        const prefeituras = await prisma.prefeitura.findMany({
            include: {
                _count: { select: { usuarios: true, campeonatos: true, equipes: true } }
            }
        });
        res.json(prefeituras);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao listar prefeituras." });
    }
};
export const createPrefeitura = async (req, res) => {
    const { nome, slug, logoUrl, corPrimaria, corSecundaria } = req.body;
    try {
        const p = await prisma.prefeitura.create({
            data: { nome, slug, logoUrl, corPrimaria: corPrimaria || "#0d6efd", corSecundaria: corSecundaria || "#6c757d" }
        });
        res.status(201).json(p);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao criar prefeitura." });
    }
};
export const updatePrefeitura = async (req, res) => {
    const id = parseInt(String(req.params.id));
    const { nome, slug, logoUrl, corPrimaria, corSecundaria } = req.body;
    try {
        const p = await prisma.prefeitura.update({
            where: { id },
            data: { nome, slug, logoUrl, corPrimaria, corSecundaria }
        });
        res.json(p);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao atualizar prefeitura." });
    }
};
export const deletePrefeitura = async (req, res) => {
    const id = parseInt(String(req.params.id));
    try {
        await prisma.usuario.deleteMany({ where: { prefeituraId: id } });
        await prisma.prefeitura.delete({ where: { id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(500).json({ error: "Não foi possível excluir a prefeitura." });
    }
};
export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany({
            include: { prefeitura: true }
        });
        res.json(usuarios.map(u => ({
            id: u.id,
            email: u.email,
            prefeituraId: u.prefeituraId,
            prefeituraNome: u.prefeitura?.nome || "Super Admin"
        })));
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao listar usuários." });
    }
};
export const createUsuario = async (req, res) => {
    const { email, senha, prefeituraId } = req.body;
    try {
        const u = await prisma.usuario.create({
            data: {
                email,
                senha,
                prefeituraId: prefeituraId ? parseInt(String(prefeituraId)) : null
            }
        });
        res.status(201).json({ id: u.id, email: u.email, prefeituraId: u.prefeituraId });
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao criar usuário. Email já existe?" });
    }
};
export const updateUsuario = async (req, res) => {
    const id = parseInt(String(req.params.id));
    const { email, senha, prefeituraId } = req.body;
    try {
        const dataToUpdate = { email, prefeituraId: prefeituraId ? parseInt(String(prefeituraId)) : null };
        if (senha)
            dataToUpdate.senha = senha;
        const u = await prisma.usuario.update({
            where: { id },
            data: dataToUpdate
        });
        res.json({ id: u.id, email: u.email, prefeituraId: u.prefeituraId });
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao atualizar usuário." });
    }
};
export const deleteUsuario = async (req, res) => {
    const id = parseInt(String(req.params.id));
    try {
        await prisma.usuario.delete({ where: { id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao excluir usuário." });
    }
};

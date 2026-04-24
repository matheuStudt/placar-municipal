import jwt from 'jsonwebtoken';
import { prisma } from '../prisma.js';
const JWT_SECRET = process.env.JWT_SECRET || 'placar_municipal_secret_fallback';
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) {
        res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
        return;
    }
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    }
    catch (e) {
        res.status(401).json({ error: 'Token inválido ou expirado. Faça login novamente.' });
    }
};
export const verificarPermissao = (modulo) => {
    return async (req, res, next) => {
        if (!req.user) {
            res.status(401).json({ error: 'Não autenticado' });
            return;
        }
        // Verificação rápida pelo token (se aplicável)
        if (req.user.role === 'MASTER' || req.user.role === 'ADMIN') {
            next();
            return;
        }
        try {
            const usuario = await prisma.usuario.findUnique({
                where: { id: req.user.id },
                include: { perfil: true }
            });
            if (!usuario) {
                res.status(401).json({ error: 'Usuário não encontrado.' });
                return;
            }
            // Bypass direto no banco: Donos de tenant ou perfis master têm passe livre total
            if (usuario.role === 'MASTER' || usuario.role === 'ADMIN') {
                next();
                return;
            }
            if (!usuario.perfil) {
                console.warn('Bloqueio 403 em', req.originalUrl, 'Motivo: Perfil de acesso não encontrado. Usuário:', req.user);
                res.status(403).json({ error: 'Sem permissão: Perfil de acesso não encontrado.' });
                return;
            }
            const permissoes = usuario.perfil.permissoes;
            const isPerfilAdmin = usuario.perfil.nome && (usuario.perfil.nome.toUpperCase() === 'ADMIN' || usuario.perfil.nome.toUpperCase() === 'MASTER');
            if (isPerfilAdmin || (Array.isArray(permissoes) && (permissoes.includes(modulo) || permissoes.includes('ALL')))) {
                next();
            }
            else {
                console.warn('Bloqueio 403 em', req.originalUrl, `Motivo: Falta de permissão no módulo [${modulo}]. Usuário:`, req.user);
                res.status(403).json({ error: `Acesso negado: Você não tem permissão para acessar o módulo [${modulo}].` });
            }
        }
        catch (error) {
            console.error('[verificarPermissao] Erro:', error);
            res.status(500).json({ error: 'Erro interno ao verificar permissões.' });
        }
    };
};
export const verificarHierarquiaUsuario = async (req, res, next) => {
    // Se for POST, e tentar criar MASTER
    if (req.method === 'POST' && req.body.role === 'MASTER' && req.user?.role !== 'MASTER') {
        res.status(403).json({ error: "Você não tem permissão para criar um usuário MASTER." });
        return;
    }
    // Se for PUT, PATCH ou DELETE, precisamos verificar o alvo
    if (['PUT', 'PATCH', 'DELETE'].includes(req.method)) {
        if (!req.params.id) {
            res.status(400).json({ error: "ID inválido." });
            return;
        }
        const idAlvo = parseInt(String(req.params.id));
        if (isNaN(idAlvo)) {
            res.status(400).json({ error: "ID inválido." });
            return;
        }
        try {
            const alvo = await prisma.usuario.findUnique({ where: { id: idAlvo } });
            if (!alvo) {
                res.status(404).json({ error: "Usuário alvo não encontrado." });
                return;
            }
            // ADMIN não pode modificar MASTER
            if (alvo.role === 'MASTER' && req.user?.role !== 'MASTER') {
                res.status(403).json({ error: "Acesso negado: Somente um MASTER pode modificar ou excluir outro MASTER." });
                return;
            }
            // ADMIN não pode promover a MASTER
            if (req.body.role === 'MASTER' && req.user?.role !== 'MASTER') {
                res.status(403).json({ error: "Você não tem permissão para promover um usuário a MASTER." });
                return;
            }
            // Isolamento de Tenant (ADMIN só mexe na própria prefeitura)
            if (req.user?.role !== 'MASTER' && alvo.prefeituraId !== req.user?.prefeituraId) {
                res.status(403).json({ error: "Acesso negado. Usuário pertence a outra prefeitura." });
                return;
            }
        }
        catch (e) {
            console.error('[verificarHierarquiaUsuario] Erro:', e);
            res.status(500).json({ error: "Erro interno ao verificar hierarquia." });
            return;
        }
    }
    next();
};

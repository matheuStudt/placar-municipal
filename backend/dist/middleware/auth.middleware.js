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
        // Usuário MASTER da prefeitura tem acesso total
        if (req.user.role === 'MASTER') {
            next();
            return;
        }
        try {
            const usuario = await prisma.usuario.findUnique({
                where: { id: req.user.id },
                include: { perfil: true }
            });
            if (!usuario || !usuario.perfil) {
                res.status(403).json({ error: 'Sem permissão: Perfil de acesso não encontrado.' });
                return;
            }
            const permissoes = usuario.perfil.permissoes;
            if (Array.isArray(permissoes) && (permissoes.includes(modulo) || permissoes.includes('ALL'))) {
                next();
            }
            else {
                res.status(403).json({ error: `Acesso negado: Você não tem permissão para acessar o módulo [${modulo}].` });
            }
        }
        catch (error) {
            console.error('[verificarPermissao] Erro:', error);
            res.status(500).json({ error: 'Erro interno ao verificar permissões.' });
        }
    };
};

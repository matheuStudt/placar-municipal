import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma.js';

const JWT_SECRET = process.env.JWT_SECRET || 'placar_municipal_secret_fallback';

export interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
        prefeituraId: number | null;
        role: string; // 'COMUM' | 'MASTER'
    };
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!token) {
        res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
        return;
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET) as {
            id: number;
            email: string;
            prefeituraId: number | null;
            role: string;
        };
        req.user = payload;
        next();
    } catch (e) {
        res.status(401).json({ error: 'Token inválido ou expirado. Faça login novamente.' });
    }
};

export const verificarPermissao = (modulo: string) => {
    return async (req: AuthRequest, res: Response, next: NextFunction) => {
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

            const permissoes = usuario.perfil.permissoes as string[];
            const isPerfilAdmin = usuario.perfil.nome && (usuario.perfil.nome.toUpperCase() === 'ADMIN' || usuario.perfil.nome.toUpperCase() === 'MASTER');

            if (isPerfilAdmin || (Array.isArray(permissoes) && (permissoes.includes(modulo) || permissoes.includes('ALL')))) {
                next();
            } else {
                console.warn('Bloqueio 403 em', req.originalUrl, `Motivo: Falta de permissão no módulo [${modulo}]. Usuário:`, req.user);
                res.status(403).json({ error: `Acesso negado: Você não tem permissão para acessar o módulo [${modulo}].` });
            }
        } catch (error) {
            console.error('[verificarPermissao] Erro:', error);
            res.status(500).json({ error: 'Erro interno ao verificar permissões.' });
        }
    };
};


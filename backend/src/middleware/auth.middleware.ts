import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'placar_municipal_secret_fallback';

export interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
        prefeituraId: number | null;
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
        const payload = jwt.verify(token, JWT_SECRET) as { id: number; email: string; prefeituraId: number | null };
        req.user = payload;
        next();
    } catch (e) {
        res.status(401).json({ error: 'Token inválido ou expirado. Faça login novamente.' });
    }
};

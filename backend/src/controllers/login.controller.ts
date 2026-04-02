import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;
    console.log(`[DEBUG] Tentativa de login: email=${email}, senha=${senha}`);

    try {
        const user = await (prisma as any).usuario.findFirst({
            where: { email, senha },
            include: { prefeitura: true }
        });

        if (!user) {
            console.log(`[DEBUG] Login falhou: Usuário não encontrado no banco.`);
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        console.log(`[DEBUG] Login sucesso para: ${user.email}`);
        res.json({
            id: user.id,
            email: user.email,
            prefeituraId: user.prefeituraId,
            prefeituraNome: user.prefeitura?.nome || 'Prefeitura Não Vinculada',
            prefeituraSlug: user.prefeitura?.slug || ''
        });
    } catch (e) {
        console.error("[DEBUG] Erro no login:", e);
        res.status(500).json({ error: 'Erro no servidor' });
    }
};

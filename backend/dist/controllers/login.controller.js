import { prisma } from '../prisma.js';
import bcrypt from 'bcrypt';
const SALT_ROUNDS = 10;
export const login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const user = await prisma.usuario.findFirst({
            where: { email },
            include: { prefeitura: true }
        });
        if (!user) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        // Suporta senhas ainda em texto puro (migração gradual) e senhas hasheadas
        let senhaValida = false;
        if (user.senha.startsWith('$2b$') || user.senha.startsWith('$2a$')) {
            // Já está hasheada - comparar com bcrypt
            senhaValida = await bcrypt.compare(senha, user.senha);
        }
        else {
            // Ainda em texto puro - comparar direto e migrar para hash
            senhaValida = user.senha === senha;
            if (senhaValida) {
                // Migra automaticamente para hash no primeiro login bem-sucedido
                const hash = await bcrypt.hash(senha, SALT_ROUNDS);
                await prisma.usuario.update({
                    where: { id: user.id },
                    data: { senha: hash }
                });
            }
        }
        if (!senhaValida) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        res.json({
            id: user.id,
            email: user.email,
            prefeituraId: user.prefeituraId,
            prefeituraNome: user.prefeitura?.nome || 'Prefeitura Não Vinculada',
            prefeituraSlug: user.prefeitura?.slug || ''
        });
    }
    catch (e) {
        console.error("[ERROR] Erro no login:", e);
        res.status(500).json({ error: 'Erro no servidor' });
    }
};

import { prisma } from '../prisma.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'placar_municipal_secret_fallback';
const JWT_EXPIRES_IN = '8h';
export const login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const user = await prisma.usuario.findFirst({
            where: { email },
            include: { prefeitura: true, perfil: true }
        });
        if (!user) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        // Suporta senhas em texto puro (migração gradual) e hasheadas
        let senhaValida = false;
        if (user.senha.startsWith('$2b$') || user.senha.startsWith('$2a$')) {
            senhaValida = await bcrypt.compare(senha, user.senha);
        }
        else {
            senhaValida = user.senha === senha;
            if (senhaValida) {
                // Migra automaticamente para hash no primeiro login
                const hash = await bcrypt.hash(senha, 10);
                await prisma.usuario.update({
                    where: { id: user.id },
                    data: { senha: hash }
                });
            }
        }
        if (!senhaValida) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        // Gerar token JWT com role incluso
        const token = jwt.sign({ id: user.id, email: user.email, prefeituraId: user.prefeituraId, role: user.role || 'COMUM' }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        // Define as permissões para o frontend
        let permissoes = [];
        if (user.role === 'MASTER') {
            permissoes = ['ALL'];
        }
        else if (user.perfil) {
            permissoes = user.perfil.permissoes;
        }
        res.json({
            token,
            id: user.id,
            email: user.email,
            role: user.role || 'COMUM',
            prefeituraId: user.prefeituraId,
            prefeituraNome: user.prefeitura?.nome || 'Prefeitura Não Vinculada',
            prefeituraSlug: user.prefeitura?.slug || '',
            permissoes
        });
    }
    catch (e) {
        console.error('[ERROR] Erro no login:', e);
        res.status(500).json({ error: 'Erro no servidor' });
    }
};

import { Router } from 'express';
import { prisma } from '../prisma.js';
const router = Router();
// Rota pública — sem middleware de autenticação
// Retorna apenas os campos necessários para o seletor de portal
router.get('/', async (req, res) => {
    try {
        const prefeituras = await prisma.prefeitura.findMany({
            where: { nome: { not: 'Administração' } },
            select: { id: true, nome: true, slug: true, logoUrl: true },
            orderBy: { nome: 'asc' }
        });
        res.json(prefeituras);
    }
    catch (e) {
        res.status(500).json({ error: 'Erro ao listar prefeituras.' });
    }
});
export default router;

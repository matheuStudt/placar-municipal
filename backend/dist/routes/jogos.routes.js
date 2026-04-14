import { Router } from 'express';
import { getJogos, getJogoDetalhes, createJogo, updateJogo, finalizarJogo, deleteJogo } from '../controllers/jogos.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
const router = Router();
// Rotas públicas
router.get('/', getJogos);
router.get('/:id/detalhes', getJogoDetalhes);
// Rotas protegidas
router.post('/', authMiddleware, createJogo);
router.post('/finalizar', authMiddleware, finalizarJogo);
router.put('/:id', authMiddleware, updateJogo);
router.delete('/:id', authMiddleware, deleteJogo);
export default router;

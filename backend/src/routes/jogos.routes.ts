import { Router } from 'express';
import { getJogos, getJogoDetalhes, createJogo, updateJogo, finalizarJogo, deleteJogo, reprogramarRodada } from '../controllers/jogos.controller.js';
import { authMiddleware, verificarPermissao } from '../middleware/auth.middleware.js';

const router = Router();

// Rotas públicas
router.get('/', getJogos);
router.get('/:id/detalhes', getJogoDetalhes);

// Rotas protegidas
router.post('/', authMiddleware, verificarPermissao('jogos'), createJogo);
router.post('/finalizar', authMiddleware, verificarPermissao('sumulas'), finalizarJogo);
// Reprogramação em massa — deve vir ANTES de /:id para não ser interceptada como ID dinâmico
router.post('/reprogramar-rodada', authMiddleware, verificarPermissao('jogos'), reprogramarRodada);
router.put('/:id', authMiddleware, verificarPermissao('sumulas'), updateJogo);
router.delete('/:id', authMiddleware, verificarPermissao('jogos'), deleteJogo);

export default router;

import { Router } from 'express';
import { getJogos, getJogoDetalhes, createJogo, updateJogo, finalizarJogo } from '../controllers/jogos.controller.js';
const router = Router();
router.get('/', getJogos);
router.post('/', createJogo);
router.post('/finalizar', finalizarJogo);
router.get('/:id/detalhes', getJogoDetalhes);
router.put('/:id', updateJogo);
export default router;

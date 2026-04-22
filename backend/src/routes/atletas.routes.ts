import { Router } from 'express';
import { getAtletas, createAtleta, updateAtleta, deleteAtleta, getAtletaHistorico } from '../controllers/atletas.controller.js';
import { authMiddleware, verificarPermissao } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', getAtletas);
router.get('/:id/historico', getAtletaHistorico);
router.post('/', authMiddleware, verificarPermissao('atletas'), createAtleta);
router.put('/:id', authMiddleware, verificarPermissao('atletas'), updateAtleta);
router.delete('/:id', authMiddleware, verificarPermissao('atletas'), deleteAtleta);

export default router;

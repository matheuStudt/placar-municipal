import { Router } from 'express';
import { getEquipes, createEquipe, getEquipeById, updateEquipe, deleteEquipe, getElenco, limparElenco } from '../controllers/equipes.controller.js';
import { authMiddleware, verificarPermissao } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', getEquipes);
router.get('/:id', getEquipeById);
router.get('/:id/elenco', getElenco);
router.post('/', authMiddleware, verificarPermissao('equipes'), createEquipe);
router.put('/:id', authMiddleware, verificarPermissao('equipes'), updateEquipe);
router.delete('/:id', authMiddleware, verificarPermissao('equipes'), deleteEquipe);
router.delete('/:id/elenco', authMiddleware, verificarPermissao('equipes'), limparElenco);

export default router;

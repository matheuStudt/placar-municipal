import { Router } from 'express';
import { getEquipes, createEquipe, getEquipeById, updateEquipe, deleteEquipe, getElenco, limparElenco } from '../controllers/equipes.controller.js';

const router = Router();

router.get('/', getEquipes);
router.post('/', createEquipe);
router.get('/:id', getEquipeById);
router.put('/:id', updateEquipe);
router.delete('/:id', deleteEquipe);
router.get('/:id/elenco', getElenco);
router.delete('/:id/elenco', limparElenco);

export default router;

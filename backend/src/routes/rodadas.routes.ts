import { Router } from 'express';
import { createRodada, deleteRodada } from '../controllers/rodadas.controller.js';

const router = Router();

router.post('/', createRodada);
router.delete('/:id', deleteRodada);

export default router;

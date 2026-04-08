import { Router } from 'express';
import { createRodada, deleteRodada } from '../controllers/rodadas.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', authMiddleware, createRodada);
router.delete('/:id', authMiddleware, deleteRodada);

export default router;

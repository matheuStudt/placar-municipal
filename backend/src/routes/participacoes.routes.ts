import { Router } from 'express';
import { createParticipacao } from '../controllers/participacoes.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', authMiddleware, createParticipacao);

export default router;

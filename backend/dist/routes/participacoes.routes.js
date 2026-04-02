import { Router } from 'express';
import { createParticipacao } from '../controllers/participacoes.controller.js';
const router = Router();
router.post('/', createParticipacao);
export default router;

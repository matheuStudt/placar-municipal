import { Router } from 'express';
import { getConfiguracao, updateConfiguracao } from '../controllers/configuracao.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
const router = Router();
router.get('/', getConfiguracao);
router.put('/', authMiddleware, updateConfiguracao);
export default router;

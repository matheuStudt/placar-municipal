import { Router } from 'express';
import { getConfiguracao, updateConfiguracao } from '../controllers/configuracao.controller.js';

const router = Router();

router.get('/', getConfiguracao);
router.put('/', updateConfiguracao);

export default router;

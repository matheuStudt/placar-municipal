import { Router } from 'express';
import * as controller from '../controllers/perfis.controller.js';
import { authMiddleware, verificarPermissao } from '../middleware/auth.middleware.js';

const router = Router();

router.use(authMiddleware);

router.get('/', controller.getPerfis);
router.post('/', verificarPermissao('gestao_usuarios'), controller.createPerfil);
router.put('/:id', verificarPermissao('gestao_usuarios'), controller.updatePerfil);
router.delete('/:id', verificarPermissao('gestao_usuarios'), controller.deletePerfil);

export default router;

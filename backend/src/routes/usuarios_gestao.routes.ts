import { Router } from 'express';
import * as controller from '../controllers/usuarios_gestao.controller.js';
import { authMiddleware, verificarPermissao } from '../middleware/auth.middleware.js';

const router = Router();

router.use(authMiddleware);

router.get('/', verificarPermissao('gestao_usuarios'), controller.getUsuarios);
router.post('/', verificarPermissao('gestao_usuarios'), controller.createUsuario);
router.put('/:id', verificarPermissao('gestao_usuarios'), controller.updateUsuario);
router.delete('/:id', verificarPermissao('gestao_usuarios'), controller.deleteUsuario);

export default router;

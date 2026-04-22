import { Router } from 'express';
import { getCategorias, createCategoria, deleteCategoria } from '../controllers/categorias.controller.js';
import { authMiddleware, verificarPermissao } from '../middleware/auth.middleware.js';
const router = Router();
router.get('/', getCategorias);
router.post('/', authMiddleware, verificarPermissao('categorias'), createCategoria);
router.delete('/:id', authMiddleware, verificarPermissao('categorias'), deleteCategoria);
export default router;

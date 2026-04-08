import { Router } from 'express';
import { getAtletas, createAtleta, updateAtleta, deleteAtleta } from '../controllers/atletas.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', getAtletas);
router.post('/', authMiddleware, createAtleta);
router.put('/:id', authMiddleware, updateAtleta);
router.delete('/:id', authMiddleware, deleteAtleta);

export default router;

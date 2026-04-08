import { Router } from 'express';
import { createVinculo, deleteVinculo } from '../controllers/vinculos.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', authMiddleware, createVinculo);
router.delete('/:id', authMiddleware, deleteVinculo);

export default router;

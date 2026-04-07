import { Router } from 'express';
import { createVinculo, deleteVinculo } from '../controllers/vinculos.controller.js';

const router = Router();

router.post('/', createVinculo);
router.delete('/:id', deleteVinculo);

export default router;

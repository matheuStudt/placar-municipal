import { Router } from 'express';
import { createVinculo } from '../controllers/vinculos.controller.js';

const router = Router();

router.post('/', createVinculo);

export default router;

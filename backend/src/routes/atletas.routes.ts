import { Router } from 'express';
import { getAtletas, createAtleta, updateAtleta, deleteAtleta } from '../controllers/atletas.controller.js';

const router = Router();

router.get('/', getAtletas);
router.post('/', createAtleta);
router.put('/:id', updateAtleta);
router.delete('/:id', deleteAtleta);

export default router;

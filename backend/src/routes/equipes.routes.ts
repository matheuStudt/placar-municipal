import { Router } from 'express';
import { getEquipes, createEquipe, getEquipeById, updateEquipe, deleteEquipe, getElenco, limparElenco, escanearLista, vincularLote } from '../controllers/equipes.controller.js';
import { authMiddleware, verificarPermissao } from '../middleware/auth.middleware.js';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.get('/', getEquipes);
router.get('/:id', getEquipeById);
router.get('/:id/elenco', getElenco);
router.post('/', authMiddleware, verificarPermissao('equipes'), createEquipe);
router.put('/:id', authMiddleware, verificarPermissao('equipes'), updateEquipe);
router.delete('/:id', authMiddleware, verificarPermissao('equipes'), deleteEquipe);
router.delete('/:id/elenco', authMiddleware, verificarPermissao('equipes'), limparElenco);

// Rotas de OCR e Lote
router.post('/escanear-lista', authMiddleware, verificarPermissao('equipes'), upload.single('file'), escanearLista);
router.post('/:id/vincular-lote', authMiddleware, verificarPermissao('equipes'), vincularLote);

export default router;

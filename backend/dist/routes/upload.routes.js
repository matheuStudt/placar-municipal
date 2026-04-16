import { Router } from 'express';
import { uploadFile } from '../controllers/upload.controller.js';
import multer from 'multer';
// Usaremos buffer em memória para despachar direto pro Supabase sem salvar no disco intermediário
const upload = multer({ storage: multer.memoryStorage() });
const router = Router();
router.post('/', upload.single('file'), uploadFile);
export default router;

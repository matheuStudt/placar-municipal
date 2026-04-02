import { Router } from 'express';
import { 
    checkSuperAdmin, 
    getPrefeituras, createPrefeitura, updatePrefeitura, deletePrefeitura,
    getUsuarios, createUsuario, updateUsuario, deleteUsuario 
} from '../controllers/admin.controller.js';

const router = Router();

router.use(checkSuperAdmin);

router.get('/prefeituras', getPrefeituras);
router.post('/prefeituras', createPrefeitura);
router.put('/prefeituras/:id', updatePrefeitura);
router.delete('/prefeituras/:id', deletePrefeitura);

router.get('/usuarios', getUsuarios);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

export default router;

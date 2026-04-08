import { Router } from 'express';
import { 
    getCampeonatos, createCampeonato, updateCampeonato, deleteCampeonato,
    getClassificacao, gerarChaveamento, getEstatisticas 
} from '../controllers/campeonatos.controller.js';
import { getEquipesInscritas } from '../controllers/participacoes.controller.js';
import { getRodadasByCampeonato } from '../controllers/rodadas.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

// Rotas públicas (usadas pelo portal)
router.get('/', getCampeonatos);
router.get('/:id/equipes', getEquipesInscritas);
router.get('/:id/rodadas', getRodadasByCampeonato);
router.get('/:id/classificacao', getClassificacao);
router.get('/:id/estatisticas', getEstatisticas);

// Rotas protegidas
router.post('/', authMiddleware, createCampeonato);
router.put('/:id', authMiddleware, updateCampeonato);
router.delete('/:id', authMiddleware, deleteCampeonato);
router.post('/:id/gerar-chaveamento', authMiddleware, gerarChaveamento);

export default router;

import { Router } from 'express';
import { getCampeonatos, createCampeonato, updateCampeonato, deleteCampeonato, getClassificacao, gerarChaveamento, getEstatisticas } from '../controllers/campeonatos.controller.js';
import { getEquipesInscritas } from '../controllers/participacoes.controller.js';
import { getRodadasByCampeonato } from '../controllers/rodadas.controller.js';
import { authMiddleware, verificarPermissao } from '../middleware/auth.middleware.js';
const router = Router();
// Rotas públicas (usadas pelo portal)
router.get('/', getCampeonatos);
router.get('/:id/equipes', getEquipesInscritas);
router.get('/:id/rodadas', getRodadasByCampeonato);
router.get('/:id/classificacao', getClassificacao);
router.get('/:id/estatisticas', getEstatisticas);
// Rotas protegidas
router.post('/', authMiddleware, verificarPermissao('campeonatos'), createCampeonato);
router.put('/:id', authMiddleware, verificarPermissao('campeonatos'), updateCampeonato);
router.delete('/:id', authMiddleware, verificarPermissao('campeonatos'), deleteCampeonato);
router.post('/:id/gerar-chaveamento', authMiddleware, verificarPermissao('campeonatos'), gerarChaveamento);
export default router;

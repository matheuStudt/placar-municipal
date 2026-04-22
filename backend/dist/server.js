import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
// DOTENV DEVE SER CARREGADO ANTES DE QUALQUER IMPORT QUE USE process.env
// (Em ES Modules, imports são hoisted - rodar dotenv.config() aqui antes de usar as vars)
dotenv.config({ path: new URL('../../.env', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1') });
import campeonatosRoutes from './routes/campeonatos.routes.js';
import atletasRoutes from './routes/atletas.routes.js';
import loginRoutes from './routes/login.routes.js';
import equipesRoutes from './routes/equipes.routes.js';
import vinculosRoutes from './routes/vinculos.routes.js';
import participacoesRoutes from './routes/participacoes.routes.js';
import rodadasRoutes from './routes/rodadas.routes.js';
import jogosRoutes from './routes/jogos.routes.js';
import configuracaoRoutes from './routes/configuracao.routes.js';
import adminRoutes from './routes/admin.routes.js';
import uploadRoutes from './routes/upload.routes.js';
import prefeiturasPubRoutes from './routes/prefeituras.routes.js';
import categoriasRoutes from './routes/categorias.routes.js';
import perfisRoutes from './routes/perfis.routes.js';
import usuariosGestaoRoutes from './routes/usuarios_gestao.routes.js';
import { initStorage } from './controllers/upload.controller.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('[SERVER] DATABASE_URL:', process.env.DATABASE_URL);
console.log('[SERVER] SUPABASE_URL:', process.env.SUPABASE_URL || '⚠️  não configurado');
console.log('--- SERVER STARTING ---');
const app = express();
app.use(cors());
app.use(express.json());
// Servir arquivos estáticos do frontend
const frontendPath = path.join(__dirname, '../../frontend');
app.use(express.static(frontendPath));
// Rotas da API
app.use('/api/campeonatos', campeonatosRoutes);
app.use('/api/atletas', atletasRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/equipes', equipesRoutes);
app.use('/api/vinculos', vinculosRoutes);
app.use('/api/participacoes', participacoesRoutes);
app.use('/api/rodadas', rodadasRoutes);
app.use('/api/jogos', jogosRoutes);
app.use('/api/configuracao', configuracaoRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/prefeituras', prefeiturasPubRoutes); // pública — sem auth
app.use('/api/categorias', categoriasRoutes);
app.use('/api/perfis', perfisRoutes);
app.use('/api/usuarios-gestao', usuariosGestaoRoutes);
// O Render vai enviar a porta pela variável de ambiente PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`\n🚀 Servidor Rodando na porta ${PORT}`);
    // Inicializa o bucket do Supabase APÓS o servidor subir (dotenv já carregado)
    initStorage();
});

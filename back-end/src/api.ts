import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/router'; // <--- O suspeito
import { errorHandler } from './middlewares/errorHandler';
import { COOKIESSECRET, URLFRONTCORS } from './config/env';

console.log('🔄 Inicializando API...');

const api = express();

const allowedOrigins = ['http://localhost:3000', URLFRONTCORS || ''];
console.log('🛡️ CORS allowed origins:', allowedOrigins);

api.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

api.use(express.json());

// Fallback pro segredo do cookie pra não quebrar se o .env falhar
api.use(cookieParser(COOKIESSECRET || 'fallback_secret_dev'));

// --- 🕵️‍♂️ VERIFICAÇÃO DE ROTA (O Pulo do Gato) ---
// O Express explode se passarmos algo undefined ou um objeto errado aqui.
if (!routes) {
    console.error("❌ ERRO CRÍTICO: As rotas (routes) estão undefined/null!");
    process.exit(1);
}

// Correção para CommonJS: verifica se o routes veio embrulhado num "default"
const safeRoutes = (routes as any).default || routes;

console.log('🛣️ Carregando rotas...');
api.use(safeRoutes);

api.use(errorHandler);

console.log('✅ API Configurada com sucesso.');

// Exportação NOMEADA (Mais segura que export default)
export { api };
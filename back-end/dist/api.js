"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const router_1 = __importDefault(require("./routes/router")); // <--- O suspeito
const errorHandler_1 = require("./middlewares/errorHandler");
const env_1 = require("./config/env");
console.log('🔄 Inicializando API...');
const api = (0, express_1.default)();
exports.api = api;
const allowedOrigins = ['http://localhost:3000', env_1.URLFRONTCORS || ''];
console.log('🛡️ CORS allowed origins:', allowedOrigins);
api.use((0, cors_1.default)({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
api.use(express_1.default.json());
// Fallback pro segredo do cookie pra não quebrar se o .env falhar
api.use((0, cookie_parser_1.default)(env_1.COOKIESSECRET || 'fallback_secret_dev'));
// --- 🕵️‍♂️ VERIFICAÇÃO DE ROTA (O Pulo do Gato) ---
// O Express explode se passarmos algo undefined ou um objeto errado aqui.
if (!router_1.default) {
    console.error("❌ ERRO CRÍTICO: As rotas (routes) estão undefined/null!");
    process.exit(1);
}
// Correção para CommonJS: verifica se o routes veio embrulhado num "default"
const safeRoutes = router_1.default.default || router_1.default;
console.log('🛣️ Carregando rotas...');
api.use(safeRoutes);
api.use(errorHandler_1.errorHandler);
console.log('✅ API Configurada com sucesso.');
//# sourceMappingURL=api.js.map
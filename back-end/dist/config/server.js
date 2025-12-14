"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// --- 🛡️ ZONA DE SEGURANÇA ---
process.on('uncaughtException', (error) => {
    console.error('💥 ERRO FATAL (Uncaught Exception):', error);
});
process.on('unhandledRejection', (reason) => {
    console.error('💥 PROMISE REJEITADA (Unhandled Rejection):', reason);
});
// ----------------------------
// ⚠️ MUDANÇA AQUI: Chaves { api } porque removemos o export default
const api_1 = require("../api");
const createAdminAuto_1 = require("../util/createAdminAuto");
const env_1 = require("./env");
const logger_1 = require("./logger");
const SERVER_PORT = Number(env_1.PORT) || 3333;
const SERVER_HOST = env_1.URLSERVER || '0.0.0.0';
logger_1.logger.info(`🔍 Iniciando servidor na porta ${SERVER_PORT}...`);
const server = api_1.api.listen(SERVER_PORT, SERVER_HOST, () => {
    logger_1.logger.info(`🚀 Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
    logger_1.logger.info(`📚 Docs available at http://${SERVER_HOST}:${SERVER_PORT}/api/doc`);
    (0, createAdminAuto_1.createAdminAuto)().catch((err) => {
        logger_1.logger.error('❌ Falha ao criar Admin:', err);
    });
});
// Garante que erros no start do servidor sejam vistos
server.on('error', (err) => {
    console.error('❌ Erro no servidor Express:', err);
});
//# sourceMappingURL=server.js.map
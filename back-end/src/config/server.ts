import 'dotenv/config';

// --- 🛡️ ZONA DE SEGURANÇA ---
process.on('uncaughtException', (error) => {
    console.error('💥 ERRO FATAL (Uncaught Exception):', error);
});
process.on('unhandledRejection', (reason) => {
    console.error('💥 PROMISE REJEITADA (Unhandled Rejection):', reason);
});
// ----------------------------

// ⚠️ MUDANÇA AQUI: Chaves { api } porque removemos o export default
import { api } from '../api';
import { createAdminAuto } from '../util/createAdminAuto';
import { PORT, URLSERVER } from './env';
import { logger } from './logger';

const SERVER_PORT = Number(PORT) || 3333;
const SERVER_HOST = URLSERVER || '0.0.0.0';

logger.info(`🔍 Iniciando servidor na porta ${SERVER_PORT}...`);

const server = api.listen(SERVER_PORT, SERVER_HOST, () => {
    logger.info(`🚀 Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
    logger.info(`📚 Docs available at http://${SERVER_HOST}:${SERVER_PORT}/api/doc`);

    createAdminAuto().catch((err) => {
        logger.error('❌ Falha ao criar Admin:', err);
    });
});

// Garante que erros no start do servidor sejam vistos
server.on('error', (err) => {
    console.error('❌ Erro no servidor Express:', err);
});
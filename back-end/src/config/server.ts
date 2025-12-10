import api from '../api';
import { createAdminAuto } from '../util/createAdminAuto';
import { PORT, URL_SERVER } from './env';
import 'dotenv/config.js';
import { logger } from './logger';

api.listen(PORT, () => {
    logger.info(`Server is running on port http://${URL_SERVER}:${PORT}`);
    logger.info(`Server docs is running on port http://${URL_SERVER}:${PORT}/api/doc`);
    createAdminAuto();
});

import api from '../api';
import { createAdminAuto } from '../util/createAdminAuto';
import { PORT, URLSERVER } from './env';
import 'dotenv/config.js';
import { logger } from './logger';

api.listen(Number(PORT), URLSERVER, () => {
    logger.info(`Server is running on port http://${URLSERVER}:${PORT}`);
    logger.info(`Server docs is running on port http://${URLSERVER}:${PORT}/api/doc`);
    createAdminAuto();
});

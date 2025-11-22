import api from '../api';
import { createAdminAuto } from '../util/createAdminAuto';
import { PORT } from './env';
import 'dotenv/config.js';
import { logger } from './logger';

api.listen(PORT, () => {
    logger.info(`Server is running on port http://localhost:${PORT}`);
    logger.info(`Server docs is running on port http://localhost:${PORT}/api/doc`);
    createAdminAuto();
});

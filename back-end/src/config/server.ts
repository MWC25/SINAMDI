import api from '../api';
import { createAdminAuto } from '../util/createAdminAuto';
import { PORT } from './env';
import 'dotenv/config.js';
import { logger } from './logger';

api.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
    createAdminAuto();
});

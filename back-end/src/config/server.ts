import api from '../api';
import { createAdminAuto } from '../util/createAdminAuto';
import 'dotenv/config.js';
import { logger } from './logger';

api.listen(8080, "0.0.0.0", () => {
    logger.info(`Server is running on port http://0.0.0.0:8080`);
    logger.info(`Server docs is running on port http://0.0.0.0:8080/api/doc`);
    createAdminAuto();
});

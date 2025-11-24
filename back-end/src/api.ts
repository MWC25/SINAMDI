import express from 'express';
import routes from './routes/router';
import { errorHandler } from './middlewares/errorHandler';

const api: express.Application = express();

api.use(express.json());
api.use(routes)
api.use(errorHandler);
export default api;
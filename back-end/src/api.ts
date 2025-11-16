import express from 'express';
import routes from './routes/router';

const api: express.Application = express();

api.use(express.json());

api.use(routes)


export default api;
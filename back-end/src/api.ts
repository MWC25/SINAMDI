import express from 'express';
import routes from './routes/router';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import { COOKIES_SECRET } from './config/env';
import cookieParser from 'cookie-parser';

const api: express.Application = express();

const allowedOrigins = ['http://localhost:3000', 'http://34.170.157.45:3000'];

api.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);
api.use(express.json());
api.use(cookieParser(COOKIES_SECRET));
api.use(routes)
api.use(errorHandler);
export default api;
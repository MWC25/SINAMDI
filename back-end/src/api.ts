import express from 'express';
import routes from './routes/router';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import { COOKIES_SECRET, URL_FRONT_CORS } from './config/env';
import cookieParser from 'cookie-parser';

const api: express.Application = express();

const allowedOrigins = ['http://localhost:3000', URL_FRONT_CORS];
console.log('CORS allowed origins:', allowedOrigins);

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
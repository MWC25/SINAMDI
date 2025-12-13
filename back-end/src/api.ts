import express from 'express';
import routes from './routes/router';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import { COOKIESSECRET, URLFRONTCORS } from './config/env';
import cookieParser from 'cookie-parser';

const api: express.Application = express();

const allowedOrigins = ['http://localhost:3000', URLFRONTCORS];
console.log('CORS allowed origins:', allowedOrigins);

api.use(
    cors({
        origin: "*",
        credentials: false,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);
api.use(express.json());
api.use(cookieParser(COOKIESSECRET));
api.use(routes)
api.use(errorHandler);
export default api;
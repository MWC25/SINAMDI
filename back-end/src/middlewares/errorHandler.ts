import { NextFunction, Request, Response } from 'express';
import { logger } from '../config/logger';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {

    if (err && err.errorType) {
        logger.error(`Error occurred: ${err.message}`, {
            code: err.errorType.code,
            status: err.errorType.status,
            stack: err.stack,
        });
        return res.status(err.errorType.status).json({
            error: true,
            code: err.errorType.code,
            message: err.message,
        });
    }
    
    logger.error(`Unexpected error: ${err.message}`, {
        stack: err.stack,
    });
    return res.status(500).json({
        error: true,
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred.',
    });
}

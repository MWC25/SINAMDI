import { NextFunction, Request, Response } from 'express';
import { authService } from '../services/auth.service';

export const authController = {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            return await authService.authenticate(req, res);
        } catch (error) {
            return next(error);
        }
    },
};

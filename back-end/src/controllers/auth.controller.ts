import { NextFunction, Request, Response } from 'express';
import { authService } from '../services/auth.service';

export const authController = {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await authService.authenticate(req, res);
            return res.status(200).json(result);
        } catch (error) {
            return next(error);
        }
    },
};

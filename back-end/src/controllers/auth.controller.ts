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

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await authService.logout(req, res);

            if (result) {
                return res.status(200).json({ message: 'Logout successful' });
            }
            
            return res.status(500).json({ message: 'Logout failed' });
        } catch (error) {
            return next(error);
        }
    }
};

import { NextFunction, Request, Response } from "express";
import { JWTProvider } from "../config/JWTProvider";
import { logger } from "../config/logger";
import { roleRepository } from "../repositories/role.repository";

export async function authorization(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: true,
            message: 'Token not provided.',
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = JWTProvider.verifyToken(token!);
        
        
        if (!decoded || !decoded.id) {
            throw new Error('Invalid token payload.');
        }

        const userRole = await roleRepository.getRoleByUserId(decoded.id);

        res.locals.user = { id: decoded.id, role: userRole?.role };

        return next();
    } catch (error: any) {
        logger.error(`Authorization Middleware Error: ${error.message}`);
         return res.status(401).json({
             error: true,
             message: 'Invalid token.',
         });
    }
}

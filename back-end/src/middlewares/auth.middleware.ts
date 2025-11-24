import { NextFunction, Request, Response } from "express";
import { JWTProvider } from "../config/JWTProvider";
import { roleRepository } from "../repositories/role.repository";
import { createHttpError, ErrorTypes } from "../util/error/error";

export async function authorization(req: Request, res: Response, next: NextFunction) {
    try {
         const authHeader = req.headers.authorization;

         if (!authHeader) {
            return next(createHttpError(
                 ErrorTypes.UNAUTHORIZED,
                 'Authorization header missing.'
             ));
         }

        const token = authHeader.split(' ')[1];

        if (!token) {
             return next(
                 createHttpError(
                     ErrorTypes.UNAUTHORIZED,
                     'Bearer token missing.'
                 )
             );
         }
        const decoded = JWTProvider.verifyToken(token);
        
        if (!decoded || !decoded.id) {
            return next(createHttpError(ErrorTypes.UNAUTHORIZED, 'Invalid token.'));
        }

        const userRole = await roleRepository.getRoleByUserId(decoded.id);

        res.locals.user = { id: decoded.id, role: userRole?.role };

        return next();
    } catch (error: any) {
        return next(error);
    }
}

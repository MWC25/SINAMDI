import { NextFunction, Request, Response } from 'express';
import { JWTProvider } from '../config/JWTProvider';
import { roleRepository } from '../repositories/role.repository';
import { createHttpError, ErrorTypes } from '../util/error/error';

export async function authorization(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const token = req.signedCookies.authToken || req.cookies.authToken 

        if (!token) {
            return next(
                createHttpError(
                    ErrorTypes.UNAUTHORIZED,
                    'No token provided.'
                )
            );
        }
        const decoded = JWTProvider.verifyToken(token);

        if (!decoded || !decoded.id) {
            return next(
                createHttpError(ErrorTypes.UNAUTHORIZED, 'Invalid token.')
            );
        }

        const userRole = await roleRepository.getRoleByUserId(decoded.id);

        res.cookie('userDetails', userRole?.role, {
            httpOnly: false,
            secure: false,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 1,
        });

        res.locals.user = { id: decoded.id, role: userRole?.role };

        return next();
    } catch (error: any) {
        return next(error);
    }
}

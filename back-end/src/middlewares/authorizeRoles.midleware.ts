import { NextFunction, Request, Response } from 'express';
import { createHttpError, ErrorTypes } from '../util/error/error';

export function authorizeRoles(...roles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = res.locals.user?.role;

        if (!roles.includes(userRole)) {
            return next(
                createHttpError(
                    ErrorTypes.FORBIDDEN,
                    'Access denied: insufficient permissions.'
                )
            );
        }

        return next();
    };
}

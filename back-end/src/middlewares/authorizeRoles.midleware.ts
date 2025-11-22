import { NextFunction, Request, Response } from "express";

export function authorizeRoles(...roles: string[]) {

    return (req: Request, res: Response, next: NextFunction) =>{

        const userRole = res.locals.user?.role;

        if (!roles.includes(userRole)) {
            return res.status(403).json({
                error: true,
                message: 'Forbidden: You do not have the required permissions to access this resource.',
            });
        }

        return next();
    }
    
}
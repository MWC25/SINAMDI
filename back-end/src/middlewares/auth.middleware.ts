import { JWTProvider } from "../config/JWTProvider";
import { logger } from "../config/logger";

export function authorization(req: any, res: any, next: any) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: true,
            message: 'Token not provided.',
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = JWTProvider.verifyToken(token);

        if (!decoded || !decoded.id) {
            return res.status(401).json({
                error: true,
                message: 'Invalid token.',
            });
        }

        return next();
    } catch (error: any) {
        logger.error('Authorization Middleware Error: ', error.message);
        return res.status(401).json({
            message: error.message,
        });
    }
}

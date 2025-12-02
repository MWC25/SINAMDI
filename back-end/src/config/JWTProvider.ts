import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { JWTSECRET } from './env';
import { createHttpError, ErrorTypes } from '../util/error/error';

interface JwtPayload {
    id: string;
    iat?: number;
    exp?: number;
}

export const JWTProvider = {
    generateToken(
        userId: string,
        expiresIn?: jwt.SignOptions['expiresIn']
    ): string {
        if (!JWTSECRET) {
            throw createHttpError(ErrorTypes.INTERNAL,
                'Server configuration error: JWT secret not set'
            );
        }

        return jwt.sign({ id: userId }, JWTSECRET, {
            expiresIn: expiresIn ?? '1h',
        });
    },

    verifyToken(token: string): JwtPayload {
        if (!JWTSECRET) {
            throw createHttpError(ErrorTypes.INTERNAL,
                'Server configuration error: JWT secret not set'
            );
        }

        try {
            const decoded = jwt.verify(token, JWTSECRET) as JwtPayload;
            return decoded;
        } catch (err) {
            throw createHttpError(ErrorTypes.UNAUTHORIZED,
                'Invalid token: ' + (err instanceof Error ? err.message : 'Unknown error')
            );
        }
    },
};

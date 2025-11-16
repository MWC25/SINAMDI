import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { JWTSECRET } from './env';

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
            throw new Error('Server configuration error: JWT secret not set');
        }

        return jwt.sign({ id: userId }, JWTSECRET, {
            expiresIn: expiresIn ?? '1h',
        });
    },

    verifyToken(token: string): JwtPayload {
        if (!JWTSECRET) {
            throw new Error('Server configuration error: JWT secret not set');
        }

        try {
            const decoded = jwt.verify(token, JWTSECRET) as JwtPayload;
            return decoded;
        } catch (err) {
            throw new Error('Invalid token');
        }
    },
};

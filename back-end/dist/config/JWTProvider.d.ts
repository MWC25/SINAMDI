import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
interface JwtPayload {
    id: string;
    iat?: number;
    exp?: number;
}
export declare const JWTProvider: {
    generateToken(userId: string, expiresIn?: jwt.SignOptions["expiresIn"]): string;
    verifyToken(token: string): JwtPayload;
};
export {};
//# sourceMappingURL=JWTProvider.d.ts.map
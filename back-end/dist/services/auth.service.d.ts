import { Request, Response } from 'express';
import 'dotenv/config';
export declare const authService: {
    authenticate(req: Request, res: Response): Promise<{
        token: string;
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            username: string;
            registration: string;
            passwordHash: string;
            role: import("../generated/prisma/enums").Role;
            isActive: boolean;
            lastLogin: Date | null;
            institutionId: string | null;
        };
    }>;
    logout(req: Request, res: Response): Promise<boolean>;
};
//# sourceMappingURL=auth.service.d.ts.map
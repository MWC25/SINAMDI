import { UserDTOType } from '../DTOs/user.dto';
import { Role, User } from '../generated/prisma/client';
export declare const userService: {
    createUser(userData: UserDTOType): Promise<User>;
    getUserById(userId: string): Promise<User>;
    updateUser(userId: string, userData: Partial<{
        username?: string;
        password?: string;
        institutionName?: string;
        role?: string;
        isActive?: boolean;
    }>): Promise<User>;
    deleteUser(userId: string): Promise<void>;
    getAllUsers(): Promise<{
        institution: {
            name: string;
        } | null;
        id: string;
        createdAt: Date;
        username: string;
        registration: string;
        role: Role;
        isActive: boolean;
        lastLogin: Date | null;
    }[]>;
};
//# sourceMappingURL=user.service.d.ts.map
import { Prisma, Institution } from '@prisma/client';
export declare const userRepository: {
    getUserByUserName(username: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        registration: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        isActive: boolean;
        lastLogin: Date | null;
        institutionId: string | null;
    } | null>;
    createUserWithInstitution(userData: {
        username: string;
        password: string;
        institution: Institution;
        registration: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        registration: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        isActive: boolean;
        lastLogin: Date | null;
        institutionId: string | null;
    }>;
    createUser(userData: {
        username: string;
        password: string;
        registration: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        registration: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        isActive: boolean;
        lastLogin: Date | null;
        institutionId: string | null;
    }>;
    getUserById(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        registration: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        isActive: boolean;
        lastLogin: Date | null;
        institutionId: string | null;
    } | null>;
    updateUser(userId: string, userData: Partial<Prisma.UserUncheckedUpdateInput>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        registration: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        isActive: boolean;
        lastLogin: Date | null;
        institutionId: string | null;
    }>;
    deleteUser(userId: string): Promise<void>;
    getAllUsers(): Promise<{
        institution: {
            name: string;
        } | null;
        id: string;
        createdAt: Date;
        username: string;
        registration: string;
        role: import("@prisma/client").$Enums.Role;
        isActive: boolean;
        lastLogin: Date | null;
    }[]>;
};
//# sourceMappingURL=user.repository.d.ts.map
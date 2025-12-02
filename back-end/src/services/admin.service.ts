import { userDTO } from '../DTOs/user.dto';
import { Role, User } from '../generated/prisma/client';
import { AdminRepository } from '../repositories/admin.repository';
import { hashPassword } from '../util/cryptPassword';
import { generateRegistration } from '../util/generateResitration';

export const AdminService = {
    async createAdminUser(data: any): Promise<User> {
        try {
            const dto = userDTO.buildCreateUserDto(data);
            const hashedPassword = await hashPassword(dto.password);

            const newAdmin = await AdminRepository.createAdmin({
                username: dto.username,
                passwordHash: hashedPassword,
                registration: generateRegistration(),
                role: Role.ADMIN,
            });

            return newAdmin;
        } catch (error: any) {
            throw createHttpError(
                `Failed to create admin user: ${error.message}`
            );
        }
    },
};

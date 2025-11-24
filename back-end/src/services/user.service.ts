import { UserDTOType } from '../DTOs/user.dto';
import { Role, User } from '../generated/prisma/client';
import { institutionRepository } from '../repositories/institution.repository';
import { userRepository } from '../repositories/user.repository';
import { hashPassword } from '../util/cryptPassword';
import { createHttpError, ErrorTypes } from '../util/error/error';
import { generateRegistration } from '../util/generateResitration';

export const userService = {
    async createUser(userData: UserDTOType): Promise<User> {
        const hashedPassword = await hashPassword(userData.password);
        const registration = generateRegistration();

        const userExists = await userRepository.getUserByUserName(
            userData.username
        );

        if (userExists) {
            throw createHttpError(ErrorTypes.BAD_REQUEST, 'Username already taken.');
        }

        if (userData.institutionName !== undefined) {
            const institution =
                await institutionRepository.getInstitutionByName(
                    userData.institutionName
                );

            if (!institution) {
                throw createHttpError(ErrorTypes.NOT_FOUND, 'Institution not found.');
            }

            const newUser = await userRepository.createUserWithInstitution({
                username: userData.username,
                password: hashedPassword,
                institution: institution!,
                registration: registration,
            });

            return newUser;
        }

        const newUser = await userRepository.createUser({
            username: userData.username,
            password: hashedPassword,
            registration: registration,
        });

        return newUser;
    },

    async getUserById(userId: string): Promise<User> {
        const user = await userRepository.getUserById(userId);

        if (!user) {
            throw createHttpError(ErrorTypes.NOT_FOUND, 'User not found.');
        }
        return user;
    },

    async updateUser(
        userId: string,
        userData: Partial<{
            username?: string;
            password?: string;
            institutionName?: string;
            role?: string;
            isActive?: boolean;
        }>
    ): Promise<User> {
        const user = await userRepository.getUserById(userId);
        if (!user) {
            throw createHttpError(ErrorTypes.NOT_FOUND, 'User not found.');
        }

        const updateData: any = {};

        if (userData.username) {
            updateData.username = userData.username;
        }
        if (userData.password) {
            updateData.passwordHash = await hashPassword(userData.password);
        }
        if (userData.institutionName) {
            const institution =
                await institutionRepository.getInstitutionByName(
                    userData.institutionName
                );
            if (!institution) {
                throw createHttpError(ErrorTypes.NOT_FOUND, 'Institution not found.');
            }
            updateData.institutionId = institution.id;
        }

        if (userData.role) {

            const role = userData.role.trim().toUpperCase();
            if (!(role in Role)) {
                throw createHttpError(ErrorTypes.BAD_REQUEST, 'Invalid role.');
            }
            updateData.role = role;
        }

        if (userData.isActive) {
            updateData.isActive = userData.isActive;
        }
        
        const dateTimeNow = new Date();
        
        updateData.updatedAt = dateTimeNow;

        return await userRepository.updateUser(userId, updateData);
    },

    async deleteUser(userId: string): Promise<void> {
        const user = await userRepository.getUserById(userId);
        if (!user) {
            throw createHttpError(ErrorTypes.NOT_FOUND, 'User not found.');
        }

        await userRepository.deleteUser(userId);
        return;
    },

    async getAllUsers() {
        const users = await userRepository.getAllUsers();
        return users;
    },
};

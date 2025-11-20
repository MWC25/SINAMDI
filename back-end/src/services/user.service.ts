import { UserDTOType } from '../DTOs/user.dto';
import { User } from '../generated/prisma/client';
import { institutionRepository } from '../repositories/institution.repository';
import { userRepository } from '../repositories/user.repository';
import { hashPassword } from '../util/cryptPassword';
import { generateRegistration } from '../util/generateResitration';


export const userService = {

    async createUser(userData: UserDTOType): Promise<User> {
    const hashedPassword = await hashPassword(userData.password)
    const registration = generateRegistration();

    const userExists = await userRepository.getUserByUserName(userData.username);

    if (userExists) {
        throw new Error('Username already taken.');
    }

    if(userData.institutionName !== undefined){
        const institution = await institutionRepository.getInstitutionByName(userData.institutionName);

        if (!institution) {
            throw new Error('Institution not found.');
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
            throw new Error('User not found.');
        }
        return user;
    },

       async updateUser(userId: string, userData: Partial<UserDTOType>): Promise<User> {
        // Implementation for updating user
        const user = await userRepository.getUserById(userId);
        if(!user) {
            throw new Error('User not found.');
        }

        const updateData: any ={};

        if (userData.username) {
            updateData.username = userData.username;
        }
        if (userData.password) {
            updateData.passwordHash = await hashPassword(userData.password);
        }
        if (userData.institutionName) {
            const institution = await institutionRepository.getInstitutionByName(userData.institutionName);
            if (!institution) {
                throw new Error('Institution not found.');
            }
            updateData.institutionId = institution.id;
        }
        return await userRepository.updateUser(userId, updateData);
    },

    async deleteUser(userId: string): Promise<void> {
        // Implementation for deleting user

    },

    async getAllUsers() {
        const users = await userRepository.getAllUsers();
        return users;
    }
};


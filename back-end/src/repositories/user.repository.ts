import { prisma } from '../config/prisma';
import { Institution } from '../generated/prisma/client';

export const userRepository = {
    async getUserByUserName(username: string) {
        return await prisma.user.findUnique({
            where: {
                username: username,
            },
        });
    },

    async createUserWithInstitution(userData: {
        username: string;
        password: string;
        institution: Institution;
        registration: string;
    }) {
        return await prisma.user.create({
            data: {
                username: userData.username,
                passwordHash: userData.password,
                institutionId: userData.institution.id,
                registration: userData.registration,
            },
        });
    },

    async createUser(userData: {
        username: string;
        password: string;
        registration: string;
    }) {
        return await prisma.user.create({
            data: {
                username: userData.username,
                passwordHash: userData.password,
                registration: userData.registration,
            },
        });
    },

    async getUserById(userId: string) {
        return await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
    },

    async updateUser(userId: string, userData: Partial<{ username: string; passwordHash: string; institutionId: string; registration: string; }>) {
        return await prisma.user.update({
            where: {
                id: userId,
            },
            data: userData,
        });
    },

    async deleteUser(userId: string) {

    },

    async getAllUsers() {
        return await prisma.user.findMany({
            select: {
                id:true,
                username: true,
                registration: true,
                role: true,
                institution: {
                    select: {
                        name: true,
                    }
                }
            }
     });
    },



};



"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const prisma_1 = require("../config/prisma");
exports.userRepository = {
    async getUserByUserName(username) {
        return await prisma_1.prisma.user.findUnique({
            where: {
                username: username,
            },
        });
    },
    async createUserWithInstitution(userData) {
        return await prisma_1.prisma.user.create({
            data: {
                username: userData.username,
                passwordHash: userData.password,
                institutionId: userData.institution.id,
                registration: userData.registration,
            },
        });
    },
    async createUser(userData) {
        return await prisma_1.prisma.user.create({
            data: {
                username: userData.username,
                passwordHash: userData.password,
                registration: userData.registration,
            },
        });
    },
    async getUserById(userId) {
        return await prisma_1.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
    },
    async updateUser(userId, userData) {
        return await prisma_1.prisma.user.update({
            where: {
                id: userId,
            },
            data: userData,
        });
    },
    async deleteUser(userId) {
        await prisma_1.prisma.user.delete({
            where: {
                id: userId,
            },
        });
    },
    async getAllUsers() {
        return await prisma_1.prisma.user.findMany({
            select: {
                id: true,
                username: true,
                registration: true,
                role: true,
                isActive: true,
                createdAt: true,
                lastLogin: true,
                institution: {
                    select: {
                        name: true,
                    }
                }
            }
        });
    },
};
//# sourceMappingURL=user.repository.js.map
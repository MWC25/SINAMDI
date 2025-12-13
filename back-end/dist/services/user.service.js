"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const client_1 = require("../generated/prisma/client");
const institution_repository_1 = require("../repositories/institution.repository");
const user_repository_1 = require("../repositories/user.repository");
const cryptPassword_1 = require("../util/cryptPassword");
const error_1 = require("../util/error/error");
const generateResitration_1 = require("../util/generateResitration");
exports.userService = {
    async createUser(userData) {
        const hashedPassword = await (0, cryptPassword_1.hashPassword)(userData.password);
        const registration = (0, generateResitration_1.generateRegistration)();
        const userExists = await user_repository_1.userRepository.getUserByUserName(userData.username);
        if (userExists) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Username already taken.');
        }
        if (userData.institutionName !== undefined) {
            const institution = await institution_repository_1.institutionRepository.getInstitutionByName(userData.institutionName);
            if (!institution) {
                throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'Institution not found.');
            }
            const newUser = await user_repository_1.userRepository.createUserWithInstitution({
                username: userData.username,
                password: hashedPassword,
                institution: institution,
                registration: registration,
            });
            return newUser;
        }
        const newUser = await user_repository_1.userRepository.createUser({
            username: userData.username,
            password: hashedPassword,
            registration: registration,
        });
        return newUser;
    },
    async getUserById(userId) {
        const user = await user_repository_1.userRepository.getUserById(userId);
        if (!user) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'User not found.');
        }
        return user;
    },
    async updateUser(userId, userData) {
        const user = await user_repository_1.userRepository.getUserById(userId);
        if (!user) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'User not found.');
        }
        const updateData = {};
        if (userData.username) {
            updateData.username = userData.username;
        }
        if (userData.password) {
            updateData.passwordHash = await (0, cryptPassword_1.hashPassword)(userData.password);
        }
        if (userData.institutionName) {
            const institution = await institution_repository_1.institutionRepository.getInstitutionByName(userData.institutionName);
            if (!institution) {
                throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'Institution not found.');
            }
            updateData.institutionId = institution.id;
        }
        if (userData.role) {
            const role = userData.role.trim().toUpperCase();
            if (!(role in client_1.Role)) {
                throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Invalid role.');
            }
            updateData.role = role;
        }
        if (userData.isActive) {
            updateData.isActive = userData.isActive;
        }
        const dateTimeNow = new Date();
        updateData.updatedAt = dateTimeNow;
        return await user_repository_1.userRepository.updateUser(userId, updateData);
    },
    async deleteUser(userId) {
        const user = await user_repository_1.userRepository.getUserById(userId);
        if (!user) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'User not found.');
        }
        await user_repository_1.userRepository.deleteUser(userId);
        return;
    },
    async getAllUsers() {
        const users = await user_repository_1.userRepository.getAllUsers();
        return users;
    },
};
//# sourceMappingURL=user.service.js.map
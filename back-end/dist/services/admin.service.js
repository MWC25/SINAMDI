"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const user_dto_1 = require("../DTOs/user.dto");
const client_1 = require("../generated/prisma/client");
const admin_repository_1 = require("../repositories/admin.repository");
const cryptPassword_1 = require("../util/cryptPassword");
const error_1 = require("../util/error/error");
const generateResitration_1 = require("../util/generateResitration");
exports.AdminService = {
    async createAdminUser(data) {
        try {
            const dto = user_dto_1.userDTO.buildCreateUserDto(data);
            const hashedPassword = await (0, cryptPassword_1.hashPassword)(dto.password);
            const newAdmin = await admin_repository_1.AdminRepository.createAdmin({
                username: dto.username,
                passwordHash: hashedPassword,
                registration: (0, generateResitration_1.generateRegistration)(),
                role: client_1.Role.ADMIN,
            });
            return newAdmin;
        }
        catch (error) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.INTERNAL, `Failed to create admin user: ${error.message}`);
        }
    },
};
//# sourceMappingURL=admin.service.js.map
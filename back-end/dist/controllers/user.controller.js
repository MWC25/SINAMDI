"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_dto_1 = require("../DTOs/user.dto");
const user_service_1 = require("../services/user.service");
const logger_1 = require("../config/logger");
const error_1 = require("../util/error/error");
exports.userController = {
    async create(req, res, next) {
        try {
            const newUserData = user_dto_1.userDTO.buildCreateUserDto(req.body);
            const newUser = await user_service_1.userService.createUser(newUserData);
            logger_1.logger.info(`User created: ${newUser.username} (ID: ${newUser.id} create by Admin ID: ${res.locals.user.id})`);
            return res.status(201).json({
                message: 'User created successfully',
                user: newUser,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async getUserById(req, res, next) {
        try {
            const userId = req.params.userId;
            if (!userId) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'User ID is required.'));
            }
            const newUser = await user_service_1.userService.getUserById(userId);
            return res.status(200).json({
                message: 'User retrieved successfully.',
                user: newUser,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async updateUser(req, res, next) {
        try {
            const userId = req.params.userId;
            const updatedUserData = req.body;
            if (!userId) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'User ID is required.'));
            }
            const updateUser = await user_service_1.userService.updateUser(userId, updatedUserData);
            logger_1.logger.info(`User updated: ${updateUser.username} (ID: ${updateUser.id} update by Admin ID: ${res.locals.user.id})`);
            return res.status(200).json({
                message: 'User updated successfully.',
                user: updateUser,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async deleteUser(req, res, next) {
        try {
            const userId = req.params.userId;
            if (!userId) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'User ID is required.'));
            }
            await user_service_1.userService.deleteUser(userId);
            logger_1.logger.info(`User deleted: ID: ${userId} deleted by Admin ID: ${res.locals.user.id}`);
            return res.status(200).json({
                message: 'User deleted successfully.',
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async getAllUsers(req, res, next) {
        try {
            const users = await user_service_1.userService.getAllUsers();
            return res.status(200).json({
                message: 'Users retrieved successfully.',
                users: users,
            });
        }
        catch (error) {
            return next(error);
        }
    },
};
//# sourceMappingURL=user.controller.js.map
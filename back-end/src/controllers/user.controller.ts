import { NextFunction, Request, Response } from 'express';

import { userDTO, UserDTOType } from '../DTOs/user.dto';
import { userService } from '../services/user.service';
import { logger } from '../config/logger';
import { createHttpError, ErrorTypes } from '../util/error/error';

export const userController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const newUserData: UserDTOType = userDTO.buildCreateUserDto(
                req.body
            );

            const newUser = await userService.createUser(newUserData);

            logger.info(
                `User created: ${newUser.username} (ID: ${newUser.id} create by Admin ID: ${res.locals.user.id})`
            );

            return res.status(201).json({
                message: 'User created successfully',
                user: newUser,
            });
        } catch (error) {
            return next(error);
        }
    },

    async getUserById(req: Request, res: Response, next: NextFunction) {

        try {
            const userId = req.params.userId;

            if (!userId) {
                return next(createHttpError(ErrorTypes.BAD_REQUEST, 'User ID is required.'));
            }

            const newUser = await userService.getUserById(userId);

            return res.status(200).json({
                message: 'User retrieved successfully.',
                user: newUser,
            });
        } catch (error) {
            return next(error);
        }
    },

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.userId;
            const updatedUserData = req.body;

            if (!userId) {
                return next(createHttpError(ErrorTypes.BAD_REQUEST, 'User ID is required.'));
            }

            const updateUser = await userService.updateUser(
                userId,
                updatedUserData
            );

            logger.info(
                `User updated: ${updateUser.username} (ID: ${updateUser.id} update by Admin ID: ${res.locals.user.id})`
            );
            return res.status(200).json({
                message: 'User updated successfully.',
                user: updateUser,
            });
        } catch (error) {
            return next(error);
        }
    },

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.userId;

            if (!userId) {
                return next(createHttpError(ErrorTypes.BAD_REQUEST, 'User ID is required.'));
            }

            await userService.deleteUser(userId);

            logger.info(
                `User deleted: ID: ${userId} deleted by Admin ID: ${res.locals.user.id}`
            );
            return res.status(200).json({
                message: 'User deleted successfully.',
            });
        } catch (error) {
            return next(error);
        }
    },

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.getAllUsers();

            return res.status(200).json({
                message: 'Users retrieved successfully.',
                users: users,
            });
        } catch (error) {
            return next(error);
        }
    },
};

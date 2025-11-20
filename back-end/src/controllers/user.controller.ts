import { Request, Response } from "express";
import { Role } from "../generated/prisma/enums";
import { userDTO, UserDTOType } from "../DTOs/user.dto";
import { userService } from "../services/user.service";
import { logger } from "../config/logger";


export const userController = {

    async create(req: Request, res: Response) {
        try {
            if(res.locals.user.role !== Role.ADMIN){
                logger.warn(`Unauthorized user (ID: ${res.locals.user.id}) attempted to create a new user.`);
                return res.status(401).json({
                    message: "Unaunthorized",
                    error: true
                })
            }

            const newUserData: UserDTOType = userDTO.buildCreateUserDto(req.body);

            const newUser =  await userService.createUser(newUserData);

            logger.info(`User created: ${newUser.username} (ID: ${newUser.id} create by Admin ID: ${res.locals.user.id})`);

            return res.status(201).json({
                message: "User create sucessfully",
                user: newUser,
            })

        } catch (error) {
            logger.error(`Admin (ID: ${res.locals.user.id}) failed to create user: ${(error as Error).message}`);
            return res.status(400).json({
                message: "Error creating user: " + (error as Error).message,
                error: true
            })
        }
    },

    async getUserById(req: Request, res: Response) {

        if (res.locals.user.role !== Role.ADMIN) {
            logger.warn(
                `Unauthorized user (ID: ${res.locals.user.id}) attempted to create a new user.`
            );
            return res.status(401).json({
                message: 'Unaunthorized',
                error: true,
            });
        }

        try {
            const userId = req.params.userId;

            if (!userId) {
                return res.status(400).json({
                    message: 'User ID is required.',
                    error: true,
                });
            }

            const newUser = await userService.getUserById(userId);

            return res.status(200).json({
                message: 'User retrieved successfully.',
                user: newUser,
            });

        } catch (error) {
            logger.error(`Admin (ID: ${res.locals.user.id}) failed to retrieve user: ${(error as Error).message}`);
            return res.status(400).json({
                message: "Error retrieving user: " + (error as Error).message,
                error: true
            });
        }
    },

    async updateUser(req: Request, res: Response) {
        // Implementation for updating a user
        if (res.locals.user.role !== Role.ADMIN) {
            logger.warn(`Unauthorized user (ID: ${res.locals.user.id}) attempted to update user.`);
            return res.status(401).json({
                message: 'Unauthorized',
                error: true,
            });
        }
        try {
            const userId = req.params.userId;
            const updatedUserData = req.body;

            if (!userId) {
                return res.status(400).json({
                    message: 'User ID is required.',
                    error: true,
                });
            }

            const updateUser = await userService.updateUser(userId, updatedUserData);

            logger.info(`User updated: ${updateUser.username} (ID: ${updateUser.id} update by Admin ID: ${res.locals.user.id})`);
            return res.status(200).json({
                message: 'User updated successfully.',
                user: updateUser,
            });
        } catch (error) {
            logger.error(`Admin (ID: ${res.locals.user.id}) failed to update user: ${(error as Error).message}`);
            return res.status(400).json({
                message: "Error updating user: " + (error as Error).message,
                error: true
            });
        }


    },

    async deleteUser(req: Request, res: Response) {
        // Implementation for deleting a user
    },

    async getAllUsers(req: Request, res: Response) {
        // Implementation for getting all users
        if (res.locals.user.role !== Role.ADMIN) {
            logger.warn(
                `Unauthorized user (ID: ${res.locals.user.id}) attempted to find all users.`
            );
            return res.status(401).json({
                message: 'Unauthorized',
                error: true,
            });
        }
        try {
            const users = await userService.getAllUsers();

            return res.status(200).json({
                message: 'Users retrieved successfully.',
                users: users,
            });
        } catch (error) {
             logger.error(`Admin (ID: ${res.locals.user.id}) failed to retrieve users: ${(error as Error).message}`);
            return res.status(500).json({
                message: "Error retrieving users: " + (error as Error).message,
                error: true
            });

        }
    }
}
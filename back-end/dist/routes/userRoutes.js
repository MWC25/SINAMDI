"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const user_controller_1 = require("../controllers/user.controller");
const authorizeRoles_midleware_1 = require("../middlewares/authorizeRoles.midleware");
const enums_1 = require("../generated/prisma/enums");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: user
 *   description: Endpoints for User management
 */
/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               institutionName:
 *                 type: string
 *               role:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /user/:userId:
 *   get:
 *     summary: Get a user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found successfully
 *       404:
 *         description: User not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /user/:userId:
 *   put:
 *     summary: Update a user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               institutionName:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /users/all:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Users found successfully
 *       401:
 *         description: Unauthorized
 */
router.post('/user/create', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN), (req, res, next) => {
    return user_controller_1.userController.create(req, res, next);
});
router.get('/user/get/:userId', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN), (req, res, next) => {
    return user_controller_1.userController.getUserById(req, res, next);
});
router.put('/user/update/:userId', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN), (req, res, next) => {
    return user_controller_1.userController.updateUser(req, res, next);
});
router.get('/user/all', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN), (req, res, next) => {
    return user_controller_1.userController.getAllUsers(req, res, next);
});
router.delete('/user/delete/:userId', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN), (req, res, next) => {
    return user_controller_1.userController.deleteUser(req, res, next);
});
exports.default = router;
//# sourceMappingURL=userRoutes.js.map
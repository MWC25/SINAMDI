import { Request, Response, Router } from 'express';
import { authorization } from '../middlewares/auth.middleware';
import { userController } from '../controllers/user.controller';
import { authorizeRoles } from '../middlewares/authorizeRoles.midleware';
import { Role } from '../generated/prisma/enums';

const router: Router = Router();

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

router.post(
    '/user/create',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response) => {
        return userController.create(req, res);
    }
);

router.get(
    '/user/:userId',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response) => {
        return userController.getUserById(req, res);
    }
);

router.put(
    '/user/:userId',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response) => {
        return userController.updateUser(req, res);
    }
);

router.get(
    '/users/all',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response) => {
        return userController.getAllUsers(req, res);
    }
);

router.delete(
    '/user/:userId',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response) => {
        return userController.deleteUser(req, res);
    }
);

export default router;

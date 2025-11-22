import { Request, Response, Router } from 'express';
import { authController } from '../controllers/auth.controller';

const router: Router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints for authentication
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - Auth
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
 *     responses:
 *       200:
 *         description: Successful login, returns a JWT token and user information
 *       401:
 *         description: Unauthorized
 */

router.post('/auth/login', (req: Request, res: Response, next) => {
    return authController.login(req, res, next);
});

export default router;

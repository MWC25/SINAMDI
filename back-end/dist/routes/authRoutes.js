"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
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
router.post('/auth/login', (req, res, next) => {
    return auth_controller_1.authController.login(req, res, next);
});
router.post('/auth/logout', (req, res, next) => {
    return auth_controller_1.authController.logout(req, res, next);
});
exports.default = router;
//# sourceMappingURL=authRoutes.js.map
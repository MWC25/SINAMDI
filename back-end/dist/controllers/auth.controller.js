"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
exports.authController = {
    async login(req, res, next) {
        try {
            const result = await auth_service_1.authService.authenticate(req, res);
            return res.status(200).json(result);
        }
        catch (error) {
            return next(error);
        }
    },
    async logout(req, res, next) {
        try {
            const result = await auth_service_1.authService.logout(req, res);
            if (result) {
                return res.status(200).json({ message: 'Logout successful' });
            }
            return res.status(500).json({ message: 'Logout failed' });
        }
        catch (error) {
            return next(error);
        }
    }
};
//# sourceMappingURL=auth.controller.js.map
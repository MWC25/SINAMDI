"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = authorization;
const JWTProvider_1 = require("../config/JWTProvider");
const role_repository_1 = require("../repositories/role.repository");
const error_1 = require("../util/error/error");
async function authorization(req, res, next) {
    try {
        const token = req.signedCookies.authToken || req.cookies.authToken;
        if (!token) {
            return next((0, error_1.createHttpError)(error_1.ErrorTypes.UNAUTHORIZED, 'No token provided.'));
        }
        const decoded = JWTProvider_1.JWTProvider.verifyToken(token);
        if (!decoded || !decoded.id) {
            return next((0, error_1.createHttpError)(error_1.ErrorTypes.UNAUTHORIZED, 'Invalid token.'));
        }
        const userRole = await role_repository_1.roleRepository.getRoleByUserId(decoded.id);
        res.cookie('userDetails', userRole?.role, {
            httpOnly: false,
            secure: false,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 1,
        });
        res.locals.user = { id: decoded.id, role: userRole?.role };
        return next();
    }
    catch (error) {
        return next(error);
    }
}
//# sourceMappingURL=auth.middleware.js.map
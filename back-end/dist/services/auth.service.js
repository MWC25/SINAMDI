"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const cryptPassword_1 = require("../util/cryptPassword");
require("dotenv/config");
const JWTProvider_1 = require("../config/JWTProvider");
const error_1 = require("../util/error/error");
exports.authService = {
    async authenticate(req, res) {
        const { username, password } = req.body;
        const user = await user_repository_1.userRepository.getUserByUserName(username);
        if (!user) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.UNAUTHORIZED, 'Invalid Credentials');
        }
        if ((await (0, cryptPassword_1.verifyPassword)(password, user.passwordHash)) === false) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.UNAUTHORIZED, 'Invalid Credentials');
        }
        const token = JWTProvider_1.JWTProvider.generateToken(user.id);
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 1,
            signed: true,
        });
        return { token, user };
    },
    async logout(req, res) {
        res.clearCookie('authToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
        });
        return true;
    }
};
//# sourceMappingURL=auth.service.js.map
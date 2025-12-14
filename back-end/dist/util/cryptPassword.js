"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const error_1 = require("./error/error");
async function hashPassword(password) {
    const saltRounds = 10;
    if (!password) {
        throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Password cannot be empty');
    }
    try {
        const hashedPassword = await bcryptjs_1.default.hash(password, saltRounds);
        return hashedPassword;
    }
    catch (error) {
        throw error;
    }
}
async function verifyPassword(password, hashedPassword) {
    if (!password) {
        throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Password cannot be empty');
    }
    if (!hashedPassword) {
        throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Hashed password cannot be empty');
    }
    try {
        const matchPassoword = await bcryptjs_1.default.compare(password, hashedPassword);
        return matchPassoword;
    }
    catch (error) {
        throw error;
    }
}
//# sourceMappingURL=cryptPassword.js.map
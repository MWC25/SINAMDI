"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDTO = void 0;
const error_1 = require("../util/error/error");
exports.userDTO = {
    buildCreateUserDto(data) {
        if (!data.username || !data.password) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Invalid data: username and password are required.');
        }
        return {
            username: String(data.username),
            password: String(data.password),
            role: data.role,
            institutionName: data.institutionName
                ? String(data.institutionName)
                : undefined,
        };
    },
};
//# sourceMappingURL=user.dto.js.map
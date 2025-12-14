"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = authorizeRoles;
const error_1 = require("../util/error/error");
function authorizeRoles(...roles) {
    return (req, res, next) => {
        const userRole = res.locals.user?.role;
        if (!roles.includes(userRole)) {
            return next((0, error_1.createHttpError)(error_1.ErrorTypes.FORBIDDEN, 'Access denied: insufficient permissions.'));
        }
        return next();
    };
}
//# sourceMappingURL=authorizeRoles.midleware.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const logger_1 = require("../config/logger");
function errorHandler(err, req, res, next) {
    if (err && err.errorType) {
        logger_1.logger.error(`Error occurred: ${err.message}`, {
            code: err.errorType.code,
            status: err.errorType.status,
            stack: err.stack,
        });
        return res.status(err.errorType.status).json({
            error: true,
            code: err.errorType.code,
            message: err.message,
        });
    }
    logger_1.logger.error(`Unexpected error: ${err.message}`, {
        stack: err.stack,
    });
    return res.status(500).json({
        error: true,
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred.',
    });
}
//# sourceMappingURL=errorHandler.js.map
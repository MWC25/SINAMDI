"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
const createAdminAuto_1 = require("../util/createAdminAuto");
const env_1 = require("./env");
require("dotenv/config.js");
const logger_1 = require("./logger");
api_1.default.listen(Number(env_1.PORT), env_1.URLSERVER, () => {
    logger_1.logger.info(`Server is running on port http://${env_1.URLSERVER}:${env_1.PORT}`);
    logger_1.logger.info(`Server docs is running on port http://${env_1.URLSERVER}:${env_1.PORT}/api/doc`);
    (0, createAdminAuto_1.createAdminAuto)();
});
//# sourceMappingURL=server.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("./middlewares/errorHandler");
const env_1 = require("./config/env");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const api = (0, express_1.default)();
const allowedOrigins = ['http://localhost:3000', env_1.URLFRONTCORS];
console.log('CORS allowed origins:', allowedOrigins);
api.use((0, cors_1.default)({
    origin: "*",
    credentials: false,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
api.use(express_1.default.json());
api.use((0, cookie_parser_1.default)(env_1.COOKIESSECRET));
api.use(router_1.default);
api.use(errorHandler_1.errorHandler);
exports.default = api;
//# sourceMappingURL=api.js.map
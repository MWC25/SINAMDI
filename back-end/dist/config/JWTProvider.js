"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTProvider = void 0;
const jwt = __importStar(require("jsonwebtoken"));
require("dotenv/config");
const env_1 = require("./env");
const error_1 = require("../util/error/error");
exports.JWTProvider = {
    generateToken(userId, expiresIn) {
        if (!env_1.JWTSECRET) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.INTERNAL, 'Server configuration error: JWT secret not set');
        }
        return jwt.sign({ id: userId }, env_1.JWTSECRET, {
            expiresIn: expiresIn ?? '1h',
        });
    },
    verifyToken(token) {
        if (!env_1.JWTSECRET) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.INTERNAL, 'Server configuration error: JWT secret not set');
        }
        try {
            const decoded = jwt.verify(token, env_1.JWTSECRET);
            return decoded;
        }
        catch (err) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.UNAUTHORIZED, 'Invalid token: ' + (err instanceof Error ? err.message : 'Unknown error'));
        }
    },
};
//# sourceMappingURL=JWTProvider.js.map
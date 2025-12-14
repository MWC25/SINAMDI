"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientHash = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const error_1 = require("./error/error");
exports.patientHash = {
    async generateHash(name, cpf) {
        if (!name || !cpf) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Name and CPF are required to generate patient hash.');
        }
        if (cpf.length !== 11) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'CPF must be exactly 11 digits long.');
        }
        const normalizedData = `${name.trim().toLowerCase()}|${cpf.trim()}`;
        const saltRounds = 10;
        const hash = await bcryptjs_1.default.hash(normalizedData, saltRounds);
        return hash;
    },
    async verifyHash(name, cpf, hash) {
        if (!name || !cpf || !hash) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Name, CPF, and hash are required to verify patient hash.');
        }
        if (cpf.length !== 11) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'CPF must be exactly 11 digits long.');
        }
        const normalizedData = `${name.trim().toLowerCase()}|${cpf.trim()}`;
        const isMatch = await bcryptjs_1.default.compare(normalizedData, hash);
        return isMatch;
    },
};
//# sourceMappingURL=patientHash.js.map
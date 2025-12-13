"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.institutionDTO = void 0;
const enums_1 = require("../generated/prisma/enums");
const error_1 = require("../util/error/error");
exports.institutionDTO = {
    buildInstitutionDto(data) {
        if (!data.name || !data.type || !data.address) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, "Invalid data: name, type and address are required.");
        }
        if ((data.type.trim() in enums_1.InstitutionType) === false) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, "Invalid institution type.");
        }
        if (!data.address.street || !data.address.number || !data.address.neighborhood ||
            !data.address.city || !data.address.state || !data.address.zipCode) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, "Invalid address data: all address fields are required.");
        }
        if (data.address.complement === undefined) {
            data.address.complement = "";
        }
        if (isNaN(data.address.number)) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, "Invalid address number: must be a number.");
        }
        if (data.address.zipCode.toString().length > 8) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, "Invalid zip code: length exceeds limit.");
        }
        return {
            name: data.name.trim(),
            type: enums_1.InstitutionType[data.type.trim()],
            address: {
                street: data.address.street.trim(),
                number: String(data.address.number).trim(),
                complement: data.address.complement.trim(),
                neighborhood: data.address.neighborhood.trim(),
                city: data.address.city.trim(),
                state: enums_1.State[data.address.state.trim()],
                zipCode: (data.address.zipCode.trim()).toString()
            }
        };
    }
};
//# sourceMappingURL=institution.dto.js.map
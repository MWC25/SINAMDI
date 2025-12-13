"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.institutionService = void 0;
const institution_repository_1 = require("../repositories/institution.repository");
const error_1 = require("../util/error/error");
exports.institutionService = {
    async createInstitution(data) {
        const institutionExists = await institution_repository_1.institutionRepository.getInstitutionByName(data.name);
        if (institutionExists) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.CONFLICT, 'Institution with this name already exists.');
        }
        return await institution_repository_1.institutionRepository.createInstitution(data);
    },
    async getInstitutionById(id) {
        const institution = await institution_repository_1.institutionRepository.getInstitutionById(id);
        if (!institution) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'Institution not found.');
        }
        return institution;
    },
    async getAllInstitutions() {
        const institutions = await institution_repository_1.institutionRepository.getAllInstitutions();
        if (institutions.length === 0) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'No institutions found.');
        }
        return institutions;
    },
    async updateInstitution(id, data) {
        const institution = await institution_repository_1.institutionRepository.getInstitutionById(id);
        if (!institution) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'Institution not found.');
        }
        const updatedInstitution = await institution_repository_1.institutionRepository.updateInstitution(id, data);
        return updatedInstitution;
    },
    async deleteInstitution(id) {
        const institution = await institution_repository_1.institutionRepository.getInstitutionById(id);
        if (!institution) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'Institution not found.');
        }
        await institution_repository_1.institutionRepository.deleteInstitution(id);
        return;
    },
};
//# sourceMappingURL=institution.service.js.map
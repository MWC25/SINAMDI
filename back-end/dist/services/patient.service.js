"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientService = void 0;
const patients_repository_1 = require("../repositories/patients.repository");
const error_1 = require("../util/error/error");
exports.patientService = {
    async create(data) {
        return await patients_repository_1.patientRepository.create(data);
    },
    async getAll() {
        return await patients_repository_1.patientRepository.findAll();
    },
    async getById(id) {
        const patient = await patients_repository_1.patientRepository.findById(id);
        if (!patient) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'Patient not found');
        }
        return patient;
    },
    async update(id, data) {
        await this.getById(id);
        return await patients_repository_1.patientRepository.update(id, data);
    },
    async delete(id) {
        await this.getById(id);
        return await patients_repository_1.patientRepository.delete(id);
    }
};
//# sourceMappingURL=patient.service.js.map
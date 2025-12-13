"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientController = void 0;
const patient_service_1 = require("../services/patient.service");
const patient_dto_1 = require("../DTOs/patient.dto");
const error_1 = require("../util/error/error");
exports.patientController = {
    async create(req, res, next) {
        try {
            const data = patient_dto_1.patientDTO.buildCreatePatientDto(req.body);
            const newPatient = await patient_service_1.patientService.create(data);
            return res.status(201).json({
                message: 'Patient created successfully',
                patient: newPatient
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async getAll(req, res, next) {
        try {
            const patients = await patient_service_1.patientService.getAll();
            return res.status(200).json({
                message: 'Patients retrieved successfully',
                patients,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'ID is required'));
            }
            const patient = await patient_service_1.patientService.getById(id);
            return res.status(200).json({
                message: 'Patient retrieved successfully',
                patient,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async update(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'ID is required'));
            }
            const data = patient_dto_1.patientDTO.buildUpdatePatientDto(req.body);
            const updatedPatient = await patient_service_1.patientService.update(id, data);
            return res.status(200).json({
                message: 'Patient updated successfully',
                patient: updatedPatient,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'ID is required'));
            }
            await patient_service_1.patientService.delete(id);
            return res.status(200).json({
                message: 'Patient deleted successfully',
            });
        }
        catch (error) {
            return next(error);
        }
    }
};
//# sourceMappingURL=patient.controller.js.map
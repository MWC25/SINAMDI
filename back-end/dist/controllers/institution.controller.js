"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.institutionController = void 0;
const institution_dto_1 = require("../DTOs/institution.dto");
const institution_service_1 = require("../services/institution.service");
const error_1 = require("../util/error/error");
exports.institutionController = {
    async createInstitution(req, res, next) {
        try {
            const data = institution_dto_1.institutionDTO.buildInstitutionDto(req.body);
            const newInstitution = await institution_service_1.institutionService.createInstitution(data);
            return res.status(201).json({
                message: 'Institution created successfully',
                institution: newInstitution,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async getInstitutionById(req, res, next) {
        try {
            const institutionId = req.params.id;
            if (!institutionId) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.VALIDATION, 'Institution ID is required.'));
            }
            const institution = await institution_service_1.institutionService.getInstitutionById(institutionId);
            return res.status(200).json({
                message: `Institution with ID: ${institutionId} fetched successfully`,
                institution: institution,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async getAllInstitutions(res, next) {
        try {
            const institutions = await institution_service_1.institutionService.getAllInstitutions();
            return res.status(200).json({
                message: 'All institutions fetched successfully',
                institutions: institutions,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async updateInstitution(req, res, next) {
        try {
            const institutionId = req.params.id;
            const updateData = req.body;
            if (!institutionId) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.VALIDATION, 'Institution ID is required for update.'));
            }
            if (!updateData) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.VALIDATION, 'Update data is required.'));
            }
            updateData.updatedAt = new Date();
            const institution = await institution_service_1.institutionService.updateInstitution(institutionId, updateData);
            return res.status(200).json({
                message: 'Institution updated successfully',
                institution: institution,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async deleteInstitution(req, res, next) {
        try {
            const institutionId = req.params.id;
            if (!institutionId) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.VALIDATION, 'Institution ID is required for deletion.'));
            }
            await institution_service_1.institutionService.getInstitutionById(institutionId);
            if (!institutionId) {
                return next((0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'Institution not found.'));
            }
            await institution_service_1.institutionService.deleteInstitution(institutionId);
            return res.status(200).json({
                message: `Institution with ID: ${institutionId} deleted successfully`,
            });
        }
        catch (error) {
            return next(error);
        }
    },
};
//# sourceMappingURL=institution.controller.js.map
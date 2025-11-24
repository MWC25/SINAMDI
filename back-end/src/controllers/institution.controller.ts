import { NextFunction, Request, Response } from 'express';
import { institutionDTO, InstitutionDTOType } from '../DTOs/institution.dto';
import { institutionService } from '../services/institution.service';
import { createHttpError, ErrorTypes } from '../util/error/error';

export const institutionController = {
    async createInstitution(req: Request, res: Response, next: NextFunction) {
        try {
            const data: InstitutionDTOType = institutionDTO.buildInstitutionDto(
                req.body
            );

            const newInstitution = await institutionService.createInstitution(
                data
            );

            return res.status(201).json({
                message: 'Institution created successfully',
                institution: newInstitution,
            });
        } catch (error) {
            return next(error);
        }
    },

    async getInstitutionById(req: Request, res: Response, next: NextFunction) {
        try {
            const institutionId = req.params.id;

            if (!institutionId) {
                return next(
                    createHttpError(
                        ErrorTypes.VALIDATION,
                        'Institution ID is required.'
                    )
                );
            }

            const institution = await institutionService.getInstitutionById(
                institutionId
            );

            return res.status(200).json({
                message: `Institution with ID: ${institutionId} fetched successfully`,
                institution: institution,
            });
        } catch (error) {
            return next(error);
        }
    },

    async getAllInstitutions(res: Response, next: NextFunction) {
        try {
            const institutions = await institutionService.getAllInstitutions();

            return res.status(200).json({
                message: 'All institutions fetched successfully',
                institutions: institutions,
            });
        } catch (error) {
            return next(error);
        }
    },

    async updateInstitution(req: Request, res: Response, next: NextFunction) {
        try {
            const institutionId = req.params.id;
            const updateData = req.body;

            if (!institutionId) {
                return next(
                    createHttpError(
                        ErrorTypes.VALIDATION,
                        'Institution ID is required for update.'
                    )
                );
            }

            if (!updateData) {
                return next(
                    createHttpError(
                        ErrorTypes.VALIDATION,
                        'Update data is required.'
                    )
                );
            }

            updateData.updatedAt = new Date();

            const institution = await institutionService.updateInstitution(
                institutionId,
                updateData
            );

            return res.status(200).json({
                message: 'Institution updated successfully',
                institution: institution,
            });
        } catch (error) {
            return next(error);
        }
    },

    async deleteInstitution(req: Request, res: Response, next: NextFunction) {
        try {
            const institutionId = req.params.id;
            if (!institutionId) {
                return next(
                    createHttpError(
                        ErrorTypes.VALIDATION,
                        'Institution ID is required for deletion.'
                    )
                );
            }

            await institutionService.getInstitutionById(institutionId);

            if (!institutionId) {
                return next(
                    createHttpError(
                        ErrorTypes.NOT_FOUND,
                        'Institution not found.'
                    )
                );
            }

            await institutionService.deleteInstitution(institutionId);

            return res.status(200).json({
                message: `Institution with ID: ${institutionId} deleted successfully`,
            });
        } catch (error) {
            return next(error);
        }
    },
};

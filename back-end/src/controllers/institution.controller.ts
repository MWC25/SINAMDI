import { Request, Response } from 'express';
import { institutionDTO, InstitutionDTOType } from '../DTOs/institution.dto';
import { institutionService } from '../services/institution.service';

export const institutionController = {
    async createInstitution(req: Request, res: Response) {
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
            return res.status(400).json({
                error: true,
                message:
                    'Error creating institution: ' + (error as Error).message,
            });
        }
    },

    async getInstitutionById(req: Request, res: Response) {
        try {
            const institutionId = req.params.id;

            if (!institutionId) {
                return res.status(400).json({
                    error: true,
                    message: 'Institution ID is required.',
                });
            }

            const institution = await institutionService.getInstitutionById(
                institutionId
            );

            return res.status(200).json({
                message: `Institution with ID: ${institutionId} fetched successfully`,
                institution: institution,
            });
        } catch (error) {
            if ((error as Error).message === 'Institution not found.') {
                return res.status(404).json({
                    error: true,
                    message: 'The requested institution does not exist.',
                });
            }

            return res.status(500).json({
                error: true,
                message:
                    'An unexpected error occurred: ' + (error as Error).message,
            });
        }
    },

    async getAllInstitutions(res: Response) {
        try {
            const institutions = await institutionService.getAllInstitutions();

            console.log('Controller: Institutions fetched:', institutions);

            return res.status(200).json({
                message: 'All institutions fetched successfully',
                institutions: institutions,
            });
        } catch (error) {
            return res.status(500).json({
                error: true,
                message:
                    'Error fetching institutions: ' + (error as Error).message,
            });
        }
    },

    async updateInstitution(req: Request, res: Response) {
        try {
            const institutionId = req.params.id;
            const updateData = req.body;

            if (!institutionId) {
                return res.status(400).json({
                    error: true,
                    message: 'Institution ID is required for update.',
                });
            }

            if (!updateData) {
                return res.status(400).json({
                    error: true,
                    message: 'Update data is required.',
                });
            }

            updateData.updatedAt = new Date();

            const institution = await institutionService.updateInstitution(institutionId, updateData);

            return res.status(200).json({
                message: 'Institution updated successfully',
                institution: institution,
            });
            
        } catch (error) {
            return res.status(500).json({
                error: true,
                message:
                    'Error updating institution: ' + (error as Error).message,
            });
        }
    },

    async deleteInstitution(req: Request, res: Response) {
        try {
            const institutionId = req.params.id;
            if (!institutionId) {
                return res.status(400).json({
                    error: true,
                    message: 'Institution ID is required for deletion.',
                });
            }

            await institutionService.getInstitutionById(institutionId);

            if (!institutionId) {
                return res.status(404).json({
                    error: true,
                    message: 'Institution not found.',
                });
            }

            await institutionService.deleteInstitution(institutionId);

            return res.status(200).json({
                message: `Institution with ID: ${institutionId} deleted successfully`,
            });
        } catch (error) {
            return res.status(500).json({
                error: true,
                message:
                    'Error deleting institution: ' + (error as Error).message,
            });
        }
    }
        
    
};
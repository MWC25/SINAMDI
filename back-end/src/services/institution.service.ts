import { InstitutionDTOType } from '../DTOs/institution.dto';
import { institutionRepository } from '../repositories/institution.repository';
import { createHttpError, ErrorTypes } from '../util/error/error';

export const institutionService = {
    async createInstitution(data: InstitutionDTOType) {
        const institutionExists =
            await institutionRepository.getInstitutionByName(data.name);
        if (institutionExists) {
            throw createHttpError(ErrorTypes.CONFLICT, 'Institution with this name already exists.');
        }
        return await institutionRepository.createInstitution(data);
    },

    async getInstitutionById(id: string) {
        const institution = await institutionRepository.getInstitutionById(id);
        if (!institution) {
            throw createHttpError(ErrorTypes.NOT_FOUND, 'Institution not found.');
        }
        return institution;
    },

    async getAllInstitutions() {
        const institutions = await institutionRepository.getAllInstitutions();
        if (institutions.length === 0) {
            throw createHttpError(ErrorTypes.NOT_FOUND, 'No institutions found.');
        }
        return institutions;
    },

    async updateInstitution(id: string, data: InstitutionDTOType) {
        const institution = await institutionRepository.getInstitutionById(id);
        if (!institution) {
            throw createHttpError(ErrorTypes.NOT_FOUND, 'Institution not found.');
        }
        const updatedInstitution = await institutionRepository.updateInstitution(
            id,
            data
        );
        return updatedInstitution;
    },

    async deleteInstitution(id: string) {
        const institution = await institutionRepository.getInstitutionById(id);
        if (!institution) {
            throw createHttpError(ErrorTypes.NOT_FOUND, 'Institution not found.');
        }
        await institutionRepository.deleteInstitution(id);
        return;
    },
};
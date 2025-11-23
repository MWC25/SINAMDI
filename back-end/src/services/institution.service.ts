import { InstitutionDTOType } from '../DTOs/institution.dto';
import { institutionRepository } from '../repositories/institution.repository';

export const institutionService = {
    async createInstitution(data: InstitutionDTOType) {
        const institutionExists =
            await institutionRepository.getInstitutionByName(data.name);

        if (institutionExists) {
            throw new Error('Institution with this name already exists.');
        }

        return await institutionRepository.createInstitution(data);
    },

    async getInstitutionById(id: string) {
        const institution = await institutionRepository.getInstitutionById(id);

        if (!institution) {
            throw new Error('Institution not found.');
        }

        return institution;
    },

    async getAllInstitutions() {
        const institutions = await institutionRepository.getAllInstitutions();
        return institutions;
    },

    async updateInstitution(id: string, data: InstitutionDTOType) {
        const institution = await institutionRepository.getInstitutionById(id);

        if (!institution) {
            throw new Error('Institution not found.');
        }

        const updatedInstitution = await institutionRepository.updateInstitution(
            id,
            data
        );

        return updatedInstitution;
    },

    async deleteInstitution(id: string) {

        await institutionRepository.deleteInstitution(id);

        return;
    },
};
import { prisma } from '../config/prisma';
import { InstitutionDTOType } from '../DTOs/institution.dto';

export const institutionRepository = {
    async getInstitutionByName(name: string) {
        return await prisma.institution.findUnique({
            where: {
                name: name,
            },
        });
    },

    async createInstitution(data: InstitutionDTOType) {
        const payload: any = {
            name: data.name,
            type: data.type,
            ...(data.address ? { address: { create: data.address } } : {}),
        };

        return await prisma.institution.create({ data: payload });
    },

    async getInstitutionById(id: string) {
        return await prisma.institution.findUnique({
            where: {
                id: id,
            },
            include: {
                address: true,
            },
        });
    },

    async getAllInstitutions() {
        const institutions = await prisma.institution.findMany({
            include: {
                address: true,
            },
        });
        console.log('Repository: Fetched institutions:', institutions);
        return institutions;
    },

    async updateInstitution(id: string, data: any) {
        const payload: any = {
            name: data.name,
            type: data.type,
            updatedAt: data.updatedAt,
            ...(data.address ? { address: { update: data.address } } : {}),
        };

        return await prisma.institution.update({
            where: {
                id: id,
            },
            data: payload,
        });
    },

    async deleteInstitution(id: string) {
        await prisma.institution.delete({
            where: {
                id: id,
            },
        });
    }
};

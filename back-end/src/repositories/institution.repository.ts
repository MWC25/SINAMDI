import { prisma } from "../config/prisma";

export const institutionRepository = {
    async getInstitutionByName(name: string) {
        return await prisma.institution.findUnique({
            where: {
                name: name,
            },
        });
    },
};
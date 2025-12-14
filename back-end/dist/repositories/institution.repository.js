"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.institutionRepository = void 0;
const prisma_1 = require("../config/prisma");
exports.institutionRepository = {
    async getInstitutionByName(name) {
        return await prisma_1.prisma.institution.findUnique({
            where: {
                name: name,
            },
        });
    },
    async createInstitution(data) {
        const payload = {
            name: data.name,
            type: data.type,
            ...(data.address ? { address: { create: data.address } } : {}),
        };
        return await prisma_1.prisma.institution.create({ data: payload });
    },
    async getInstitutionById(id) {
        return await prisma_1.prisma.institution.findUnique({
            where: {
                id: id,
            },
            include: {
                address: true,
            },
        });
    },
    async getAllInstitutions() {
        const institutions = await prisma_1.prisma.institution.findMany({
            include: {
                address: true,
            },
        });
        return institutions;
    },
    async updateInstitution(id, data) {
        const payload = {
            name: data.name,
            type: data.type,
            updatedAt: data.updatedAt,
            ...(data.address ? { address: { update: data.address } } : {}),
        };
        return await prisma_1.prisma.institution.update({
            where: {
                id: id,
            },
            data: payload,
        });
    },
    async deleteInstitution(id) {
        await prisma_1.prisma.institution.delete({
            where: {
                id: id,
            },
        });
    }
};
//# sourceMappingURL=institution.repository.js.map
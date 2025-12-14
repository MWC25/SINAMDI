"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientRepository = void 0;
const prisma_1 = require("../config/prisma");
exports.patientRepository = {
    async create(data) {
        return await prisma_1.prisma.patient.create({
            data: {
                name: data.name,
                cpf: data.cpf,
                phone: data.phone,
                email: data.email,
                birthDate: new Date(data.birthDate),
                sleepQuality: data.sleepQuality,
                isInsomnia: data.isInsomnia,
                patientStatus: data.patientStatus,
                gender: data.gender,
                schooling: data.schooling,
                address: {
                    create: {
                        street: data.address.street,
                        number: data.address.number,
                        complement: data.address.complement,
                        neighborhood: data.address.neighborhood,
                        city: data.address.city,
                        state: data.address.state,
                        zipCode: data.address.zipCode,
                    },
                },
            },
            include: {
                address: true,
            },
        });
    },
    async findAll() {
        return await prisma_1.prisma.patient.findMany({
            include: {
                address: true,
            },
        });
    },
    async findById(id) {
        return await prisma_1.prisma.patient.findUnique({
            where: { id },
            include: {
                address: true,
            },
        });
    },
    async update(id, data) {
        const { address, ...patientData } = data;
        const updateData = {
            ...patientData,
        };
        if (patientData.birthDate) {
            updateData.birthDate = new Date(patientData.birthDate);
        }
        if (address) {
            const addressUpdate = {};
            if (address.street !== undefined)
                addressUpdate.street = address.street;
            if (address.number !== undefined)
                addressUpdate.number = address.number;
            if (address.complement !== undefined)
                addressUpdate.complement = address.complement;
            if (address.neighborhood !== undefined)
                addressUpdate.neighborhood = address.neighborhood;
            if (address.city !== undefined)
                addressUpdate.city = address.city;
            if (address.state !== undefined)
                addressUpdate.state = address.state;
            if (address.zipCode !== undefined)
                addressUpdate.zipCode = address.zipCode;
            if (Object.keys(addressUpdate).length > 0) {
                updateData.address = {
                    update: addressUpdate
                };
            }
        }
        return await prisma_1.prisma.patient.update({
            where: { id },
            data: updateData,
            include: {
                address: true,
            },
        });
    },
    async delete(id) {
        const deleteAddress = prisma_1.prisma.addressPatient.deleteMany({
            where: {
                patientId: id
            }
        });
        const deletePatient = prisma_1.prisma.patient.delete({
            where: { id },
        });
        return await prisma_1.prisma.$transaction([deleteAddress, deletePatient]);
    },
    async findByCPF(cpf) {
        return await prisma_1.prisma.patient.findUnique({
            where: { cpf },
            include: {
                address: true,
            },
        });
    }
};
//# sourceMappingURL=patients.repository.js.map
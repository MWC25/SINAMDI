import { prisma } from '../config/prisma';
import { PatientDTOType } from '../DTOs/patient.dto';

export const patientRepository = {
    async create(data: PatientDTOType) {
        return await prisma.patient.create({
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
        return await prisma.patient.findMany({
            include: {
                address: true,
            },
        });
    },

    async findById(id: string) {
        return await prisma.patient.findUnique({
            where: { id },
            include: {
                address: true,
            },
        });
    },

    async update(id: string, data: Partial<PatientDTOType>) {
        const { address, ...patientData } = data;

        const updateData: any = {
            ...patientData,
        };

        if (patientData.birthDate) {
            updateData.birthDate = new Date(patientData.birthDate);
        }

        if (address) {
            const addressUpdate: any = {};
            if (address.street !== undefined) addressUpdate.street = address.street;
            if (address.number !== undefined) addressUpdate.number = address.number;
            if (address.complement !== undefined) addressUpdate.complement = address.complement;
            if (address.neighborhood !== undefined) addressUpdate.neighborhood = address.neighborhood;
            if (address.city !== undefined) addressUpdate.city = address.city;
            if (address.state !== undefined) addressUpdate.state = address.state;
            if (address.zipCode !== undefined) addressUpdate.zipCode = address.zipCode;

            if (Object.keys(addressUpdate).length > 0) {
                updateData.address = {
                    update: addressUpdate
                };
            }
        }

        return await prisma.patient.update({
            where: { id },
            data: updateData,
            include: {
                address: true,
            },
        });
    },

    async delete(id: string) {
        const deleteAddress = prisma.addressPatient.deleteMany({
            where: {
                patientId: id
            }
        });

        const deletePatient = prisma.patient.delete({
            where: { id },
        });

        return await prisma.$transaction([deleteAddress, deletePatient]);
    }
};

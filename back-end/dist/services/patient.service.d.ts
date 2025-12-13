import { PatientDTOType } from '../DTOs/patient.dto';
export declare const patientService: {
    create(data: PatientDTOType): Promise<{
        address: {
            number: string;
            id: string;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("../generated/prisma/enums").State;
            zipCode: string;
            patientId: string | null;
        } | null;
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cpf: string;
        phone: string;
        email: string;
        birthDate: Date;
        sleepQuality: number;
        isInsomnia: boolean;
        patientStatus: import("../generated/prisma/enums").PatientStatus;
        gender: import("../generated/prisma/enums").Gender | null;
        schooling: import("../generated/prisma/enums").Schooling | null;
        lastCollectionAt: Date | null;
    }>;
    getAll(): Promise<({
        address: {
            number: string;
            id: string;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("../generated/prisma/enums").State;
            zipCode: string;
            patientId: string | null;
        } | null;
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cpf: string;
        phone: string;
        email: string;
        birthDate: Date;
        sleepQuality: number;
        isInsomnia: boolean;
        patientStatus: import("../generated/prisma/enums").PatientStatus;
        gender: import("../generated/prisma/enums").Gender | null;
        schooling: import("../generated/prisma/enums").Schooling | null;
        lastCollectionAt: Date | null;
    })[]>;
    getById(id: string): Promise<{
        address: {
            number: string;
            id: string;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("../generated/prisma/enums").State;
            zipCode: string;
            patientId: string | null;
        } | null;
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cpf: string;
        phone: string;
        email: string;
        birthDate: Date;
        sleepQuality: number;
        isInsomnia: boolean;
        patientStatus: import("../generated/prisma/enums").PatientStatus;
        gender: import("../generated/prisma/enums").Gender | null;
        schooling: import("../generated/prisma/enums").Schooling | null;
        lastCollectionAt: Date | null;
    }>;
    update(id: string, data: Partial<PatientDTOType>): Promise<{
        address: {
            number: string;
            id: string;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("../generated/prisma/enums").State;
            zipCode: string;
            patientId: string | null;
        } | null;
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cpf: string;
        phone: string;
        email: string;
        birthDate: Date;
        sleepQuality: number;
        isInsomnia: boolean;
        patientStatus: import("../generated/prisma/enums").PatientStatus;
        gender: import("../generated/prisma/enums").Gender | null;
        schooling: import("../generated/prisma/enums").Schooling | null;
        lastCollectionAt: Date | null;
    }>;
    delete(id: string): Promise<[import("../generated/prisma/internal/prismaNamespace").BatchPayload, {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cpf: string;
        phone: string;
        email: string;
        birthDate: Date;
        sleepQuality: number;
        isInsomnia: boolean;
        patientStatus: import("../generated/prisma/enums").PatientStatus;
        gender: import("../generated/prisma/enums").Gender | null;
        schooling: import("../generated/prisma/enums").Schooling | null;
        lastCollectionAt: Date | null;
    }]>;
};
//# sourceMappingURL=patient.service.d.ts.map
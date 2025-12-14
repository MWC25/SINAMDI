import { PatientDTOType } from '../DTOs/patient.dto';
export declare const patientRepository: {
    create(data: PatientDTOType): Promise<{
        address: {
            number: string;
            id: string;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("@prisma/client").$Enums.State;
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
        patientStatus: import("@prisma/client").$Enums.PatientStatus;
        gender: import("@prisma/client").$Enums.Gender | null;
        schooling: import("@prisma/client").$Enums.Schooling | null;
        lastCollectionAt: Date | null;
    }>;
    findAll(): Promise<({
        address: {
            number: string;
            id: string;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("@prisma/client").$Enums.State;
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
        patientStatus: import("@prisma/client").$Enums.PatientStatus;
        gender: import("@prisma/client").$Enums.Gender | null;
        schooling: import("@prisma/client").$Enums.Schooling | null;
        lastCollectionAt: Date | null;
    })[]>;
    findById(id: string): Promise<({
        address: {
            number: string;
            id: string;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("@prisma/client").$Enums.State;
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
        patientStatus: import("@prisma/client").$Enums.PatientStatus;
        gender: import("@prisma/client").$Enums.Gender | null;
        schooling: import("@prisma/client").$Enums.Schooling | null;
        lastCollectionAt: Date | null;
    }) | null>;
    update(id: string, data: Partial<PatientDTOType>): Promise<{
        address: {
            number: string;
            id: string;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("@prisma/client").$Enums.State;
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
        patientStatus: import("@prisma/client").$Enums.PatientStatus;
        gender: import("@prisma/client").$Enums.Gender | null;
        schooling: import("@prisma/client").$Enums.Schooling | null;
        lastCollectionAt: Date | null;
    }>;
    delete(id: string): Promise<[import("@prisma/client").Prisma.BatchPayload, {
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
        patientStatus: import("@prisma/client").$Enums.PatientStatus;
        gender: import("@prisma/client").$Enums.Gender | null;
        schooling: import("@prisma/client").$Enums.Schooling | null;
        lastCollectionAt: Date | null;
    }]>;
    findByCPF(cpf: string): Promise<({
        address: {
            number: string;
            id: string;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("@prisma/client").$Enums.State;
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
        patientStatus: import("@prisma/client").$Enums.PatientStatus;
        gender: import("@prisma/client").$Enums.Gender | null;
        schooling: import("@prisma/client").$Enums.Schooling | null;
        lastCollectionAt: Date | null;
    }) | null>;
};
//# sourceMappingURL=patients.repository.d.ts.map
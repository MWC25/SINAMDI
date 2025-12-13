import { InstitutionDTOType } from '../DTOs/institution.dto';
export declare const institutionRepository: {
    getInstitutionByName(name: string): Promise<{
        name: string;
        id: string;
        type: import("../generated/prisma/enums").InstitutionType;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    createInstitution(data: InstitutionDTOType): Promise<{
        name: string;
        id: string;
        type: import("../generated/prisma/enums").InstitutionType;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getInstitutionById(id: string): Promise<({
        address: {
            number: string;
            id: string;
            institutionId: string | null;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("../generated/prisma/enums").State;
            zipCode: string;
        } | null;
    } & {
        name: string;
        id: string;
        type: import("../generated/prisma/enums").InstitutionType;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    getAllInstitutions(): Promise<({
        address: {
            number: string;
            id: string;
            institutionId: string | null;
            street: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: import("../generated/prisma/enums").State;
            zipCode: string;
        } | null;
    } & {
        name: string;
        id: string;
        type: import("../generated/prisma/enums").InstitutionType;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    updateInstitution(id: string, data: any): Promise<{
        name: string;
        id: string;
        type: import("../generated/prisma/enums").InstitutionType;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteInstitution(id: string): Promise<void>;
};
//# sourceMappingURL=institution.repository.d.ts.map
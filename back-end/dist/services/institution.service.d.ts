import { InstitutionDTOType } from '../DTOs/institution.dto';
export declare const institutionService: {
    createInstitution(data: InstitutionDTOType): Promise<{
        name: string;
        id: string;
        type: import("../generated/prisma/enums").InstitutionType;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getInstitutionById(id: string): Promise<{
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
    }>;
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
    updateInstitution(id: string, data: InstitutionDTOType): Promise<{
        name: string;
        id: string;
        type: import("../generated/prisma/enums").InstitutionType;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteInstitution(id: string): Promise<void>;
};
//# sourceMappingURL=institution.service.d.ts.map
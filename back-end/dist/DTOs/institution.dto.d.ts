import { InstitutionType } from "@prisma/client";
export interface InstitutionDTOType {
    name: string;
    type: InstitutionType;
    address: {
        street: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
        state: string;
        zipCode: string;
    };
}
export declare const institutionDTO: {
    buildInstitutionDto(data: any): InstitutionDTOType;
};
//# sourceMappingURL=institution.dto.d.ts.map
import { Gender, PatientStatus, Schooling, State } from '@prisma/client';
export type PatientDTOType = {
    name: string;
    cpf: string;
    phone: string;
    email: string;
    birthDate: string;
    sleepQuality: number;
    isInsomnia: boolean;
    patientStatus: PatientStatus;
    gender: Gender;
    schooling: Schooling;
    address: {
        street: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
        state: State;
        zipCode: string;
    };
};
export declare const patientDTO: {
    buildCreatePatientDto(data: any): PatientDTOType;
    buildUpdatePatientDto(data: any): Partial<PatientDTOType>;
};
//# sourceMappingURL=patient.dto.d.ts.map
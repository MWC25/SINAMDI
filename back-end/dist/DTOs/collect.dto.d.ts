import { AgeRange, CollectChannel, CollectRisk, Gender, Schooling, State } from '../generated/prisma/enums';
import type { Prisma } from '../generated/prisma/client';
export interface PatientDTOType {
    name: string;
    cpf: string;
}
export interface CollectCoreDTOType {
    collectedAt?: string | Date;
    channel: CollectChannel;
    institutionId?: string | null;
}
export interface CollectDataDTOType {
    ageRange: AgeRange;
    gender?: Gender | null;
    schooling?: Schooling | null;
    state: State;
    city: string;
    dailyScreenTimeMin: number;
    nightUsageMin: number;
    devicesCount: number;
    dependencyScore: number;
    riskLevel: CollectRisk;
    questionnaireVersion: string;
    rawAnswers?: Prisma.JsonValue | null;
    sleepQualityScore: number;
    anxietyScore: number;
    depressionScore: number;
    isolationScore: number;
    physicalActivityPerWeek: number;
    hasConsent: boolean;
    consentAt: string | Date;
    notes?: string | null;
}
export interface CreateCollectRequestDTO {
    patient: PatientDTOType;
    collect: CollectCoreDTOType;
    collectData: CollectDataDTOType;
}
export interface CollectDTOType {
    collectedAt?: string | Date;
    channel: CollectChannel;
    patientHash: string;
    institutionId?: string | null;
    collectData: CollectDataDTOType;
}
export type CollectDataUpdateDTOType = Partial<CollectDataDTOType>;
export type CollectUpdateDTOType = Partial<Omit<CollectDTOType, 'collectData' | 'patientHash'>> & {
    collectData?: CollectDataUpdateDTOType;
};
//# sourceMappingURL=collect.dto.d.ts.map
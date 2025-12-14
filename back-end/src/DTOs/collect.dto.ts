import {
    AgeRange,
    CollectChannel,
    CollectRisk,
    Gender,
    Schooling,
    State,
} from '@prisma/client';

import type { Prisma } from '@prisma/client';

// ===========================
// 1) DTOs de ENTRADA (request)
// ===========================

// Patient
export interface PatientDTOType {
    name: string;
    cpf: string;
}

// Collect
export interface CollectCoreDTOType {
    collectedAt?: string | Date;
    channel: CollectChannel;
    institutionId?: string | null;
}

//CollectData
export interface CollectDataDTOType {
    // 1) Perfil do respondente
    ageRange: AgeRange;
    gender?: Gender | null;
    schooling?: Schooling | null;
    state: State;
    city: string;

    // 2) Comportamento digital
    dailyScreenTimeMin: number;
    nightUsageMin: number;
    devicesCount: number;

    // 3) Questionário / risco
    dependencyScore: number;
    riskLevel: CollectRisk;
    questionnaireVersion: string;

    rawAnswers?: Prisma.JsonValue | null;

    // 4) Indicadores complementares
    sleepQualityScore: number;
    anxietyScore: number;
    depressionScore: number;
    isolationScore: number;
    physicalActivityPerWeek: number;

    // 5) Consentimento
    hasConsent: boolean;
    consentAt: string | Date;

    notes?: string | null;
}

// DTO de criação da coleta
export interface CreateCollectRequestDTO {
    patient: PatientDTOType;
    collect: CollectCoreDTOType;
    collectData: CollectDataDTOType;
}

// ========================================
// 2) DTO interno pro REPOSITORY (com hash)
// ========================================

// Esse é o shape que o service monta pra mandar pro repository
// Aqui já existe o patientHash calculado
export interface CollectDTOType {
    collectedAt?: string | Date;
    channel: CollectChannel;
    patientHash: string;
    institutionId?: string | null;
    collectData: CollectDataDTOType;
}

export type CollectDataUpdateDTOType = Partial<CollectDataDTOType>;

export type CollectUpdateDTOType = Partial<
    Omit<CollectDTOType, 'collectData' | 'patientHash'>
> & {
    collectData?: CollectDataUpdateDTOType;
};

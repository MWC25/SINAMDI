import { Prisma } from '@prisma/client';
import { CollectDTOType, CollectUpdateDTOType } from '../DTOs/collect.dto';
import { AgeRange, CollectChannel, CollectRisk, State } from '@prisma/client';
export interface CollectQueryParams {
    institutionId?: string | undefined;
    channel?: CollectChannel | undefined;
    state?: State | undefined;
    ageRange?: AgeRange | undefined;
    riskLevel?: CollectRisk | undefined;
    dateFrom?: string | Date | undefined;
    dateTo?: string | Date | undefined;
}
export declare const collectRepository: {
    create(data: CollectDTOType): Promise<{
        institution: {
            name: string;
            id: string;
            type: import("@prisma/client").$Enums.InstitutionType;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        collectData: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            gender: import("@prisma/client").$Enums.Gender | null;
            schooling: import("@prisma/client").$Enums.Schooling | null;
            city: string;
            state: import("@prisma/client").$Enums.State;
            ageRange: import("@prisma/client").$Enums.AgeRange;
            dailyScreenTimeMin: number;
            nightUsageMin: number;
            devicesCount: number;
            dependencyScore: number;
            riskLevel: import("@prisma/client").$Enums.CollectRisk;
            questionnaireVersion: string;
            rawAnswers: Prisma.JsonValue | null;
            sleepQualityScore: number;
            anxietyScore: number;
            depressionScore: number;
            isolationScore: number;
            physicalActivityPerWeek: number;
            hasConsent: boolean;
            consentAt: Date;
            notes: string | null;
            collectId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        institutionId: string | null;
        patientHash: string;
        collectedAt: Date;
        channel: import("@prisma/client").$Enums.CollectChannel;
    }>;
    findAll(filters?: CollectQueryParams): Promise<({
        institution: {
            name: string;
            id: string;
            type: import("@prisma/client").$Enums.InstitutionType;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        collectData: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            gender: import("@prisma/client").$Enums.Gender | null;
            schooling: import("@prisma/client").$Enums.Schooling | null;
            city: string;
            state: import("@prisma/client").$Enums.State;
            ageRange: import("@prisma/client").$Enums.AgeRange;
            dailyScreenTimeMin: number;
            nightUsageMin: number;
            devicesCount: number;
            dependencyScore: number;
            riskLevel: import("@prisma/client").$Enums.CollectRisk;
            questionnaireVersion: string;
            rawAnswers: Prisma.JsonValue | null;
            sleepQualityScore: number;
            anxietyScore: number;
            depressionScore: number;
            isolationScore: number;
            physicalActivityPerWeek: number;
            hasConsent: boolean;
            consentAt: Date;
            notes: string | null;
            collectId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        institutionId: string | null;
        patientHash: string;
        collectedAt: Date;
        channel: import("@prisma/client").$Enums.CollectChannel;
    })[]>;
    findById(id: string): Promise<({
        institution: {
            name: string;
            id: string;
            type: import("@prisma/client").$Enums.InstitutionType;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        collectData: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            gender: import("@prisma/client").$Enums.Gender | null;
            schooling: import("@prisma/client").$Enums.Schooling | null;
            city: string;
            state: import("@prisma/client").$Enums.State;
            ageRange: import("@prisma/client").$Enums.AgeRange;
            dailyScreenTimeMin: number;
            nightUsageMin: number;
            devicesCount: number;
            dependencyScore: number;
            riskLevel: import("@prisma/client").$Enums.CollectRisk;
            questionnaireVersion: string;
            rawAnswers: Prisma.JsonValue | null;
            sleepQualityScore: number;
            anxietyScore: number;
            depressionScore: number;
            isolationScore: number;
            physicalActivityPerWeek: number;
            hasConsent: boolean;
            consentAt: Date;
            notes: string | null;
            collectId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        institutionId: string | null;
        patientHash: string;
        collectedAt: Date;
        channel: import("@prisma/client").$Enums.CollectChannel;
    }) | null>;
    update(id: string, data: CollectUpdateDTOType): Promise<{
        institution: {
            name: string;
            id: string;
            type: import("@prisma/client").$Enums.InstitutionType;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        collectData: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            gender: import("@prisma/client").$Enums.Gender | null;
            schooling: import("@prisma/client").$Enums.Schooling | null;
            city: string;
            state: import("@prisma/client").$Enums.State;
            ageRange: import("@prisma/client").$Enums.AgeRange;
            dailyScreenTimeMin: number;
            nightUsageMin: number;
            devicesCount: number;
            dependencyScore: number;
            riskLevel: import("@prisma/client").$Enums.CollectRisk;
            questionnaireVersion: string;
            rawAnswers: Prisma.JsonValue | null;
            sleepQualityScore: number;
            anxietyScore: number;
            depressionScore: number;
            isolationScore: number;
            physicalActivityPerWeek: number;
            hasConsent: boolean;
            consentAt: Date;
            notes: string | null;
            collectId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        institutionId: string | null;
        patientHash: string;
        collectedAt: Date;
        channel: import("@prisma/client").$Enums.CollectChannel;
    }>;
    delete(id: string): Promise<{
        institution: {
            name: string;
            id: string;
            type: import("@prisma/client").$Enums.InstitutionType;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        collectData: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            gender: import("@prisma/client").$Enums.Gender | null;
            schooling: import("@prisma/client").$Enums.Schooling | null;
            city: string;
            state: import("@prisma/client").$Enums.State;
            ageRange: import("@prisma/client").$Enums.AgeRange;
            dailyScreenTimeMin: number;
            nightUsageMin: number;
            devicesCount: number;
            dependencyScore: number;
            riskLevel: import("@prisma/client").$Enums.CollectRisk;
            questionnaireVersion: string;
            rawAnswers: Prisma.JsonValue | null;
            sleepQualityScore: number;
            anxietyScore: number;
            depressionScore: number;
            isolationScore: number;
            physicalActivityPerWeek: number;
            hasConsent: boolean;
            consentAt: Date;
            notes: string | null;
            collectId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        institutionId: string | null;
        patientHash: string;
        collectedAt: Date;
        channel: import("@prisma/client").$Enums.CollectChannel;
    }>;
};
//# sourceMappingURL=collect.repository.d.ts.map
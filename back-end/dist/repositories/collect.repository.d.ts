import { CollectDTOType, CollectUpdateDTOType } from '../DTOs/collect.dto';
import { AgeRange, CollectChannel, CollectRisk, State } from '../generated/prisma/enums';
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
            type: import("../generated/prisma/enums").InstitutionType;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        collectData: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            gender: import("../generated/prisma/enums").Gender | null;
            schooling: import("../generated/prisma/enums").Schooling | null;
            city: string;
            state: State;
            ageRange: AgeRange;
            dailyScreenTimeMin: number;
            nightUsageMin: number;
            devicesCount: number;
            dependencyScore: number;
            riskLevel: CollectRisk;
            questionnaireVersion: string;
            rawAnswers: import("@prisma/client/runtime/library").JsonValue | null;
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
        channel: CollectChannel;
    }>;
    findAll(filters?: CollectQueryParams): Promise<({
        institution: {
            name: string;
            id: string;
            type: import("../generated/prisma/enums").InstitutionType;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        collectData: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            gender: import("../generated/prisma/enums").Gender | null;
            schooling: import("../generated/prisma/enums").Schooling | null;
            city: string;
            state: State;
            ageRange: AgeRange;
            dailyScreenTimeMin: number;
            nightUsageMin: number;
            devicesCount: number;
            dependencyScore: number;
            riskLevel: CollectRisk;
            questionnaireVersion: string;
            rawAnswers: import("@prisma/client/runtime/library").JsonValue | null;
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
        channel: CollectChannel;
    })[]>;
    findById(id: string): Promise<({
        institution: {
            name: string;
            id: string;
            type: import("../generated/prisma/enums").InstitutionType;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        collectData: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            gender: import("../generated/prisma/enums").Gender | null;
            schooling: import("../generated/prisma/enums").Schooling | null;
            city: string;
            state: State;
            ageRange: AgeRange;
            dailyScreenTimeMin: number;
            nightUsageMin: number;
            devicesCount: number;
            dependencyScore: number;
            riskLevel: CollectRisk;
            questionnaireVersion: string;
            rawAnswers: import("@prisma/client/runtime/library").JsonValue | null;
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
        channel: CollectChannel;
    }) | null>;
    update(id: string, data: CollectUpdateDTOType): Promise<{
        institution: {
            name: string;
            id: string;
            type: import("../generated/prisma/enums").InstitutionType;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        collectData: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            gender: import("../generated/prisma/enums").Gender | null;
            schooling: import("../generated/prisma/enums").Schooling | null;
            city: string;
            state: State;
            ageRange: AgeRange;
            dailyScreenTimeMin: number;
            nightUsageMin: number;
            devicesCount: number;
            dependencyScore: number;
            riskLevel: CollectRisk;
            questionnaireVersion: string;
            rawAnswers: import("@prisma/client/runtime/library").JsonValue | null;
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
        channel: CollectChannel;
    }>;
    delete(id: string): Promise<{
        institution: {
            name: string;
            id: string;
            type: import("../generated/prisma/enums").InstitutionType;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        collectData: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            gender: import("../generated/prisma/enums").Gender | null;
            schooling: import("../generated/prisma/enums").Schooling | null;
            city: string;
            state: State;
            ageRange: AgeRange;
            dailyScreenTimeMin: number;
            nightUsageMin: number;
            devicesCount: number;
            dependencyScore: number;
            riskLevel: CollectRisk;
            questionnaireVersion: string;
            rawAnswers: import("@prisma/client/runtime/library").JsonValue | null;
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
        channel: CollectChannel;
    }>;
};
//# sourceMappingURL=collect.repository.d.ts.map
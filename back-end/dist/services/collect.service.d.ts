import { Request } from "express";
import { CollectUpdateDTOType, CreateCollectRequestDTO } from "../DTOs/collect.dto";
export declare const collectService: {
    createCollect(data: CreateCollectRequestDTO): Promise<{
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
        channel: import("@prisma/client").$Enums.CollectChannel;
    }>;
    getAllCollects(params: Request["query"]): Promise<({
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
        channel: import("@prisma/client").$Enums.CollectChannel;
    })[]>;
    updateCollect(id: string, data: CollectUpdateDTOType): Promise<{
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
        channel: import("@prisma/client").$Enums.CollectChannel;
    }>;
    deleteCollect(id: string): Promise<{
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
        channel: import("@prisma/client").$Enums.CollectChannel;
    }>;
};
//# sourceMappingURL=collect.service.d.ts.map
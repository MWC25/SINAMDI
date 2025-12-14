import { prisma } from '../config/prisma';
import { Prisma } from '@prisma/client';
import { CollectDTOType, CollectUpdateDTOType } from '../DTOs/collect.dto';
import {
    AgeRange,
    CollectChannel,
    CollectRisk,
    State,
} from '@prisma/client';

// Filtros que vão vir via query string (GET /collects?state=PE&riskLevel=ALTO...)
export interface CollectQueryParams {
    institutionId?: string | undefined;
    channel?: CollectChannel | undefined;
    state?: State | undefined;
    ageRange?: AgeRange | undefined;
    riskLevel?: CollectRisk | undefined;
    dateFrom?: string | Date | undefined;
    dateTo?: string | Date | undefined;
}

export const collectRepository = {
    async create(data: CollectDTOType) {
        const dataToCreate: Prisma.CollectCreateInput = {
            collectedAt: data.collectedAt!,
            channel: data.channel,
            patientHash: data.patientHash,
            collectData: {
                create: {
                    ageRange: data.collectData.ageRange,
                    gender: data.collectData.gender ?? null,
                    schooling: data.collectData.schooling ?? null,
                    state: data.collectData.state,
                    city: data.collectData.city,

                    dailyScreenTimeMin: data.collectData.dailyScreenTimeMin,
                    nightUsageMin: data.collectData.nightUsageMin,
                    devicesCount: data.collectData.devicesCount,

                    dependencyScore: data.collectData.dependencyScore,
                    riskLevel: data.collectData.riskLevel,
                    questionnaireVersion: data.collectData.questionnaireVersion,

                    rawAnswers: data.collectData.rawAnswers ?? Prisma.JsonNull,

                    sleepQualityScore: data.collectData.sleepQualityScore,
                    anxietyScore: data.collectData.anxietyScore,
                    depressionScore: data.collectData.depressionScore,
                    isolationScore: data.collectData.isolationScore,
                    physicalActivityPerWeek:
                        data.collectData.physicalActivityPerWeek,

                    hasConsent: data.collectData.hasConsent,
                    consentAt: new Date(data.collectData.consentAt),
                    notes: data.collectData.notes ?? null,
                },
            },
        };

        if (data.institutionId) {
            dataToCreate.institution = {
                connect: { id: data.institutionId },
            };
        }

        return prisma.collect.create({
            data: dataToCreate,
            include: {
                institution: true,
                collectData: true,
            },
        });
    },


    async findAll(filters: CollectQueryParams = {}) {
        const where: Prisma.CollectWhereInput = {};

        if (filters.institutionId) {
            where.institutionId = filters.institutionId;
        }

        if (filters.channel) {
            where.channel = filters.channel;
        }

        if (filters.dateFrom || filters.dateTo) {
            where.collectedAt = {};
            if (filters.dateFrom) {
                where.collectedAt.gte = new Date(filters.dateFrom);
            }
            if (filters.dateTo) {
                where.collectedAt.lte = new Date(filters.dateTo);
            }
        }

        const collectDataWhere: Prisma.CollectDataWhereInput = {};

        if (filters.state) {
            collectDataWhere.state = filters.state;
        }

        if (filters.ageRange) {
            collectDataWhere.ageRange = filters.ageRange;
        }

        if (filters.riskLevel) {
            collectDataWhere.riskLevel = filters.riskLevel;
        }

        if (Object.keys(collectDataWhere).length > 0) {
            where.collectData = collectDataWhere;
        }

        return prisma.collect.findMany({
            where,
            orderBy: { collectedAt: 'desc' },
            include: {
                institution: true,
                collectData: true,
            },
        });
    },

    async findById(id: string) {
        return prisma.collect.findUnique({
            where: { id },
            include: {
                institution: true,
                collectData: true,
            },
        });
    },

    async update(id: string, data: CollectUpdateDTOType) {
        const updateData: Prisma.CollectUpdateInput = {};

        if (data.collectedAt) {
            updateData.collectedAt = new Date(data.collectedAt);
        }

        if (data.channel) {
            updateData.channel = data.channel;
        }

        if (data.institutionId !== undefined) {
            updateData.institution = data.institutionId
                ? { connect: { id: data.institutionId } }
                : { disconnect: true };
        }

        if (data.collectData) {
            const cd = data.collectData;

            const collectDataUpdate: Prisma.CollectDataUpdateInput = {};

            if (cd.ageRange) collectDataUpdate.ageRange = cd.ageRange;
            if (cd.gender !== undefined) collectDataUpdate.gender = cd.gender;
            if (cd.schooling !== undefined)
                collectDataUpdate.schooling = cd.schooling;
            if (cd.state) collectDataUpdate.state = cd.state;
            if (cd.city) collectDataUpdate.city = cd.city;

            if (typeof cd.dailyScreenTimeMin === 'number') {
                collectDataUpdate.dailyScreenTimeMin = cd.dailyScreenTimeMin;
            }
            if (typeof cd.nightUsageMin === 'number') {
                collectDataUpdate.nightUsageMin = cd.nightUsageMin;
            }
            if (typeof cd.devicesCount === 'number') {
                collectDataUpdate.devicesCount = cd.devicesCount;
            }

            if (typeof cd.dependencyScore === 'number') {
                collectDataUpdate.dependencyScore = cd.dependencyScore;
            }
            if (cd.riskLevel) {
                collectDataUpdate.riskLevel = cd.riskLevel;
            }
            if (cd.questionnaireVersion) {
                collectDataUpdate.questionnaireVersion =
                    cd.questionnaireVersion;
            }

            if (cd.rawAnswers !== undefined) {
                collectDataUpdate.rawAnswers = cd.rawAnswers ?? Prisma.JsonNull;
            }

            if (typeof cd.sleepQualityScore === 'number') {
                collectDataUpdate.sleepQualityScore = cd.sleepQualityScore;
            }
            if (typeof cd.anxietyScore === 'number') {
                collectDataUpdate.anxietyScore = cd.anxietyScore;
            }
            if (typeof cd.depressionScore === 'number') {
                collectDataUpdate.depressionScore = cd.depressionScore;
            }
            if (typeof cd.isolationScore === 'number') {
                collectDataUpdate.isolationScore = cd.isolationScore;
            }
            if (typeof cd.physicalActivityPerWeek === 'number') {
                collectDataUpdate.physicalActivityPerWeek =
                    cd.physicalActivityPerWeek;
            }

            if (typeof cd.hasConsent === 'boolean') {
                collectDataUpdate.hasConsent = cd.hasConsent;
            }

            if (cd.consentAt) {
                collectDataUpdate.consentAt = new Date(cd.consentAt);
            }

            if (cd.notes !== undefined) {
                collectDataUpdate.notes = cd.notes ?? null;
            }

            if (Object.keys(collectDataUpdate).length > 0) {
                updateData.collectData = {
                    update: collectDataUpdate,
                };
            }
        }

        return prisma.collect.update({
            where: { id },
            data: updateData,
            include: {
                institution: true,
                collectData: true,
            },
        });
    },

    async delete(id: string) {

        return prisma.$transaction(async tx => {
            await tx.collectData.deleteMany({
                where: { collectId: id },
            });

            const deleted = await tx.collect.delete({
                where: { id },
                include: {
                    institution: true,
                    collectData: true,
                },
            });

            return deleted;
        });
    },
};

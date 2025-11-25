
import { Request } from "express";
import { CollectDTOType, CollectUpdateDTOType, CreateCollectRequestDTO } from "../DTOs/collect.dto";
import { collectRepository } from "../repositories/collect.repository";
import { patientRepository } from "../repositories/patients.repository";
import { createHttpError, ErrorTypes } from "../util/error/error";
import { patientHash } from "../util/patientHash";
import { AgeRange, CollectChannel, CollectRisk, State } from "../generated/prisma/enums";


export const collectService = {
    async createCollect(data: CreateCollectRequestDTO) {
        if (!data.patient || !data.collect || !data.collectData) {
            throw createHttpError(
                ErrorTypes.BAD_REQUEST,
                'Invalid collect data. Patient, collect, and collectData are required.'
            );
        }

        const patientExists = await patientRepository.findByCPF(
            data.patient.cpf
        );

        if (!patientExists) {
            throw createHttpError(
                ErrorTypes.BAD_REQUEST,
                'Patient not found with the provided CPF.'
            );
        }

        const patientHashString = await patientHash.generateHash(
            data.patient.name,
            data.patient.cpf
        );

        if (!patientHashString) {
            throw createHttpError(
                ErrorTypes.INTERNAL,
                'Failed to generate patient hash.'
            );
        }

        const dataCreate: CollectDTOType = {
            collectedAt: data.collect.collectedAt
                ? new Date(data.collect.collectedAt)
                : new Date(),
            channel: data.collect.channel,
            patientHash: patientHashString,
            institutionId: data.collect.institutionId ?? null,
            collectData: data.collectData,
        };

        return collectRepository.create(dataCreate);
    },

    async getAllCollects(params: Request['query']) {

        if (!params) {
            throw createHttpError(ErrorTypes.BAD_REQUEST, 'Query parameters are required.');
        }
        
        const {
            institutionId,
            channel,
            state,
            ageRange,
            riskLevel,
            dateFrom,
            dateTo,
        } = params as {
            institutionId?: string;
            channel?: string;
            state?: string;
            ageRange?: string;
            riskLevel?: string;
            dateFrom?: string;
            dateTo?: string;
        };

        const isValidEnum = (e: any, v?: string) => v === undefined || Object.values(e).includes(v as any);

        if (!isValidEnum(CollectChannel, channel)) {
            throw createHttpError(ErrorTypes.BAD_REQUEST, `Invalid channel: ${channel}`);
        }
        if (!isValidEnum(State, state)) {
            throw createHttpError(ErrorTypes.BAD_REQUEST, `Invalid state: ${state}`);
        }
        if (!isValidEnum(AgeRange, ageRange)) {
            throw createHttpError(ErrorTypes.BAD_REQUEST, `Invalid ageRange: ${ageRange}`);
        }
        if (!isValidEnum(CollectRisk, riskLevel)) {
            throw createHttpError(ErrorTypes.BAD_REQUEST, `Invalid riskLevel: ${riskLevel}`);
        }

        if (dateFrom && isNaN(Date.parse(dateFrom))) {
            throw createHttpError(ErrorTypes.BAD_REQUEST, `Invalid dateFrom: ${dateFrom}`);
        }
        if (dateTo && isNaN(Date.parse(dateTo))) {
            throw createHttpError(ErrorTypes.BAD_REQUEST, `Invalid dateTo: ${dateTo}`);
        }
        if (dateFrom && dateTo && new Date(dateFrom) > new Date(dateTo)) {
            throw createHttpError(ErrorTypes.BAD_REQUEST, 'dateFrom must be before or equal to dateTo');
        }

        const filters = {
            institutionId,
            channel: channel as CollectChannel | undefined,
            state: state as State | undefined,
            ageRange: ageRange as AgeRange | undefined,
            riskLevel: riskLevel as CollectRisk | undefined,
            dateFrom,
            dateTo,
        };

        return collectRepository.findAll(filters);
    },

    async updateCollect(id: string, data: CollectUpdateDTOType) {

        if (!data) {
            throw createHttpError(
                ErrorTypes.BAD_REQUEST,
                'Collect data is required.'
            );
        }

        const existingCollect = await collectRepository.findById(id);

        if (!existingCollect) {
            throw createHttpError(
                ErrorTypes.NOT_FOUND,
                'Collect not found with the provided id.'
            );
        }

        return collectRepository.update(id, data);
    },
    
    async deleteCollect(id: string) {
        const existingCollect = await collectRepository.findById(id);

        if (!existingCollect) {
            throw createHttpError(
                ErrorTypes.NOT_FOUND,
                'Collect not found with the provided id.'
            );
        }
        return collectRepository.delete(id);
    },
};
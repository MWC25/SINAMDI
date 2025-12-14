"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectService = void 0;
const collect_repository_1 = require("../repositories/collect.repository");
const patients_repository_1 = require("../repositories/patients.repository");
const error_1 = require("../util/error/error");
const patientHash_1 = require("../util/patientHash");
const client_1 = require("@prisma/client");
exports.collectService = {
    async createCollect(data) {
        if (!data.patient || !data.collect || !data.collectData) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Invalid collect data. Patient, collect, and collectData are required.');
        }
        const patientExists = await patients_repository_1.patientRepository.findByCPF(data.patient.cpf);
        if (!patientExists) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Patient not found with the provided CPF.');
        }
        const patientHashString = await patientHash_1.patientHash.generateHash(data.patient.name, data.patient.cpf);
        if (!patientHashString) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.INTERNAL, 'Failed to generate patient hash.');
        }
        const dataCreate = {
            collectedAt: data.collect.collectedAt
                ? new Date(data.collect.collectedAt)
                : new Date(),
            channel: data.collect.channel,
            patientHash: patientHashString,
            institutionId: data.collect.institutionId ?? null,
            collectData: data.collectData,
        };
        return collect_repository_1.collectRepository.create(dataCreate);
    },
    async getAllCollects(params) {
        if (!params) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Query parameters are required.');
        }
        const { institutionId, channel, state, ageRange, riskLevel, dateFrom, dateTo, } = params;
        const isValidEnum = (e, v) => v === undefined || Object.values(e).includes(v);
        if (!isValidEnum(client_1.CollectChannel, channel)) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, `Invalid channel: ${channel}`);
        }
        if (!isValidEnum(client_1.State, state)) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, `Invalid state: ${state}`);
        }
        if (!isValidEnum(client_1.AgeRange, ageRange)) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, `Invalid ageRange: ${ageRange}`);
        }
        if (!isValidEnum(client_1.CollectRisk, riskLevel)) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, `Invalid riskLevel: ${riskLevel}`);
        }
        if (dateFrom && isNaN(Date.parse(dateFrom))) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, `Invalid dateFrom: ${dateFrom}`);
        }
        if (dateTo && isNaN(Date.parse(dateTo))) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, `Invalid dateTo: ${dateTo}`);
        }
        if (dateFrom && dateTo && new Date(dateFrom) > new Date(dateTo)) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'dateFrom must be before or equal to dateTo');
        }
        const filters = {
            institutionId,
            channel: channel,
            state: state,
            ageRange: ageRange,
            riskLevel: riskLevel,
            dateFrom,
            dateTo,
        };
        return collect_repository_1.collectRepository.findAll(filters);
    },
    async updateCollect(id, data) {
        if (!data) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Collect data is required.');
        }
        const existingCollect = await collect_repository_1.collectRepository.findById(id);
        if (!existingCollect) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'Collect not found with the provided id.');
        }
        return collect_repository_1.collectRepository.update(id, data);
    },
    async deleteCollect(id) {
        const existingCollect = await collect_repository_1.collectRepository.findById(id);
        if (!existingCollect) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.NOT_FOUND, 'Collect not found with the provided id.');
        }
        return collect_repository_1.collectRepository.delete(id);
    },
};
//# sourceMappingURL=collect.service.js.map
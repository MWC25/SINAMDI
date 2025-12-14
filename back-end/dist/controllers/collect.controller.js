"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectController = void 0;
const collect_service_1 = require("../services/collect.service");
const error_1 = require("../util/error/error");
exports.collectController = {
    async createCollect(req, res, next) {
        try {
            const data = req.body;
            const result = await collect_service_1.collectService.createCollect(data);
            return res.status(201).json({
                message: 'Collect created successfully',
                data: result,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async getAllCollect(req, res, next) {
        try {
            const result = await collect_service_1.collectService.getAllCollects(req.query);
            return res.status(200).json({
                message: 'Collects retrieved successfully',
                data: result,
            });
        }
        catch (error) {
            return next(error);
        }
    },
    async updateCollect(req, res, next) {
        try {
            const { id } = req.params;
            const data = req.body;
            if (!id) {
                throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Collect id is required.');
            }
            const updatedCollect = await collect_service_1.collectService.updateCollect(id, data);
            return res.status(200).json(updatedCollect);
        }
        catch (error) {
            return next(error);
        }
    },
    async deleteCollect(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Collect id is required.');
            }
            await collect_service_1.collectService.deleteCollect(id);
            return res.status(200).json({
                message: 'Collect deleted successfully',
            });
        }
        catch (error) {
            return next(error);
        }
    },
};
//# sourceMappingURL=collect.controller.js.map
import { NextFunction, Request, Response } from 'express';
import {
    CollectUpdateDTOType,
    CreateCollectRequestDTO,
} from '../DTOs/collect.dto';
import { collectService } from '../services/collect.service';
import { createHttpError, ErrorTypes } from '../util/error/error';

export const collectController = {
    async createCollect(req: Request, res: Response, next: NextFunction) {
        try {
            const data: CreateCollectRequestDTO = req.body;

            const result = await collectService.createCollect(data);

            return res.status(201).json({
                message: 'Collect created successfully',
                data: result,
            });
        } catch (error) {
            return next(error);
        }
    },
    async getAllCollect(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await collectService.getAllCollects(req.query);

            return res.status(200).json({
                message: 'Collects retrieved successfully',
                data: result,
            });
        } catch (error) {
            return next(error);
        }
    },

    async updateCollect(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;

            const data = req.body as CollectUpdateDTOType;

            if (!id) {
                throw createHttpError(
                    ErrorTypes.BAD_REQUEST,
                    'Collect id is required.'
                );
            }

            const updatedCollect = await collectService.updateCollect(id, data);

            return res.status(200).json(updatedCollect);
        } catch (error) {
            return next(error);
        }
    },

    async deleteCollect(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;

            if (!id) {
                throw createHttpError(
                    ErrorTypes.BAD_REQUEST,
                    'Collect id is required.'
                );
            }

            await collectService.deleteCollect(id);

            return res.status(200).json({
                message: 'Collect deleted successfully',
            });
        } catch (error) {
            return next(error);
        }
    },
};

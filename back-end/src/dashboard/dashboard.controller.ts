// src/modules/dashboard/dashboard.controller.ts
import { Request, Response, NextFunction } from 'express';
import { dashboardService } from './dashboard.service';

const getOverview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { startDate, endDate } = req.query;

        // aceita YYYY-MM-DD ou ISO completo, o front que decide
        const start =
            typeof startDate === 'string' && startDate
                ? new Date(startDate)
                : null;

        const end =
            typeof endDate === 'string' && endDate ? new Date(endDate) : null;

        const result = await dashboardService.getOverview({
            startDate: start,
            endDate: end,
        });

        return res.status(200).json(result);
    } catch (error) {
        return next(error);
    }
};

export const dashboardController = {
    getOverview,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardController = void 0;
const dashboard_service_1 = require("./dashboard.service");
const getOverview = async (req, res, next) => {
    try {
        const { startDate, endDate } = req.query;
        // aceita YYYY-MM-DD ou ISO completo, o front que decide
        const start = typeof startDate === 'string' && startDate
            ? new Date(startDate)
            : null;
        const end = typeof endDate === 'string' && endDate ? new Date(endDate) : null;
        const result = await dashboard_service_1.dashboardService.getOverview({
            startDate: start,
            endDate: end,
        });
        return res.status(200).json(result);
    }
    catch (error) {
        return next(error);
    }
};
exports.dashboardController = {
    getOverview,
};
//# sourceMappingURL=dashboard.controller.js.map
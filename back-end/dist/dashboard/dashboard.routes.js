"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboard_controller_1 = require("./dashboard.controller");
const router = (0, express_1.Router)();
router.get('/dashboard/overview', (req, res, next) => dashboard_controller_1.dashboardController.getOverview(req, res, next));
exports.default = router;
//# sourceMappingURL=dashboard.routes.js.map
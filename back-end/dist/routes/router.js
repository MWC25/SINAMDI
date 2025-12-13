"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoutes_1 = __importDefault(require("./authRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("../config/swagger"));
const institutionRoutes_1 = __importDefault(require("./institutionRoutes"));
const patientRoutes_1 = __importDefault(require("./patientRoutes"));
const collectRoutes_1 = __importDefault(require("./collectRoutes"));
const dashboard_routes_1 = __importDefault(require("../dashboard/dashboard.routes"));
const router = (0, express_1.Router)();
router.use(authRoutes_1.default);
router.use(userRoutes_1.default);
router.use(patientRoutes_1.default);
router.use(institutionRoutes_1.default);
router.use(collectRoutes_1.default);
router.use(dashboard_routes_1.default);
router.use('/api/doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
exports.default = router;
//# sourceMappingURL=router.js.map
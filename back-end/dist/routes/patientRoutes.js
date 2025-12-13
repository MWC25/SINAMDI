"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patient_controller_1 = require("../controllers/patient.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const authorizeRoles_midleware_1 = require("../middlewares/authorizeRoles.midleware");
const enums_1 = require("../generated/prisma/enums");
const router = (0, express_1.Router)();
router.post('/patient/create', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN, enums_1.Role.HEALTH_PROFESSIONAL), (req, res, next) => patient_controller_1.patientController.create(req, res, next));
router.get('/patient/all', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN, enums_1.Role.HEALTH_PROFESSIONAL), (req, res, next) => patient_controller_1.patientController.getAll(req, res, next));
router.get('/patient/get/:id', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN, enums_1.Role.HEALTH_PROFESSIONAL), (req, res, next) => patient_controller_1.patientController.getById(req, res, next));
router.put('/patient/update/:id', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN, enums_1.Role.HEALTH_PROFESSIONAL), (req, res, next) => patient_controller_1.patientController.update(req, res, next));
router.delete('/patient/delete/:id', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN, enums_1.Role.HEALTH_PROFESSIONAL), (req, res, next) => patient_controller_1.patientController.delete(req, res, next));
exports.default = router;
//# sourceMappingURL=patientRoutes.js.map
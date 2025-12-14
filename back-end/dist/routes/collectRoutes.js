"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const authorizeRoles_midleware_1 = require("../middlewares/authorizeRoles.midleware");
const client_1 = require("@prisma/client");
const collect_controller_1 = require("../controllers/collect.controller");
const router = (0, express_1.Router)();
router.post('/collect/create', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(client_1.Role.ADMIN, client_1.Role.HEALTH_PROFESSIONAL), (req, res, next) => {
    return collect_controller_1.collectController.createCollect(req, res, next);
});
router.get('/collect/all', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(client_1.Role.ADMIN, client_1.Role.HEALTH_PROFESSIONAL), (req, res, next) => {
    return collect_controller_1.collectController.getAllCollect(req, res, next);
});
router.patch('/collect/update/:id', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(client_1.Role.ADMIN, client_1.Role.HEALTH_PROFESSIONAL), (req, res, next) => {
    return collect_controller_1.collectController.updateCollect(req, res, next);
});
router.delete('/collect/delete/:id', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(client_1.Role.ADMIN), (req, res, next) => {
    return collect_controller_1.collectController.deleteCollect(req, res, next);
});
exports.default = router;
//# sourceMappingURL=collectRoutes.js.map
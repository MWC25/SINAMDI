"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const authorizeRoles_midleware_1 = require("../middlewares/authorizeRoles.midleware");
const enums_1 = require("../generated/prisma/enums");
const institution_controller_1 = require("../controllers/institution.controller");
const router = (0, express_1.Router)();
router.post('/institution/create', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN), (req, res, next) => {
    return institution_controller_1.institutionController.createInstitution(req, res, next);
});
router.get('/institution/all', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN), (req, res, next) => {
    return institution_controller_1.institutionController.getAllInstitutions(res, next);
});
router.get('/institution/get/:id', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN), (req, res, next) => {
    return institution_controller_1.institutionController.getInstitutionById(req, res, next);
});
router.put('/institution/update/:id', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN), (req, res, next) => {
    return institution_controller_1.institutionController.updateInstitution(req, res, next);
});
router.delete('/institution/delete/:id', auth_middleware_1.authorization, (0, authorizeRoles_midleware_1.authorizeRoles)(enums_1.Role.ADMIN), (req, res, next) => {
    return institution_controller_1.institutionController.deleteInstitution(req, res, next);
});
exports.default = router;
//# sourceMappingURL=institutionRoutes.js.map
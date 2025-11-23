import { Router } from 'express';
import { patientController } from '../controllers/patient.controller';
import { authorization } from '../middlewares/auth.middleware';
import { authorizeRoles } from '../middlewares/authorizeRoles.midleware';
import { Role } from '../generated/prisma/enums';


const router: Router = Router();

router.post('patient/create',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req, res) => patientController.create(req, res));

router.get('patient/getall',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req, res) => patientController.getAll(req, res));

router.get('patient/getbyId/:id',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req, res) => patientController.getById(req, res));

router.put('/update/:id',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req, res) => patientController.update(req, res));

router.delete('/delete/:id',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req, res) => patientController.delete(req, res));

export default router;


import { NextFunction, Request, Response, Router } from 'express';
import { patientController } from '../controllers/patient.controller';
import { authorization } from '../middlewares/auth.middleware';
import { authorizeRoles } from '../middlewares/authorizeRoles.midleware';
import { Role } from '../generated/prisma/enums';

const router: Router = Router();

router.post(
    '/patient/create',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response, next: NextFunction) =>
        patientController.create(req, res, next)
);

router.get(
    '/patient/all',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response, next: NextFunction) =>
        patientController.getAll(req, res, next)
);

router.get(
    '/patient/get/:id',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response, next: NextFunction) =>
        patientController.getById(req, res, next)
);

router.put(
    '/patient/update/:id',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response, next: NextFunction) =>
        patientController.update(req, res, next)
);

router.delete(
    '/patient/delete/:id',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response, next: NextFunction) =>
        patientController.delete(req, res, next)
);

export default router;

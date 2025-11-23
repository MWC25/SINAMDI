import { Request, Response, Router } from 'express';
import { patientController } from '../controllers/patient.controller';
import { authorization } from '../middlewares/auth.middleware';
import { authorizeRoles } from '../middlewares/authorizeRoles.midleware';
import { Role } from '../generated/prisma/enums';


const router: Router = Router();

router.post('/patient/create',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response) => patientController.create(req, res));

router.get('/patient/all',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response) => patientController.getAll(req, res));

router.get('/patient/get/:id',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response) => patientController.getById(req, res));

router.put(
    '/patient/update/:id',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response) => patientController.update(req, res)
);

router.delete(
    '/patient/delete/:id',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response) => patientController.delete(req, res)
);

export default router;


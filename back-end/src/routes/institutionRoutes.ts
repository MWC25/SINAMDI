import { NextFunction, Request, Response, Router } from "express";
import { authorization } from "../middlewares/auth.middleware";
import { authorizeRoles } from "../middlewares/authorizeRoles.midleware";
import { Role } from "../generated/prisma/enums";
import { institutionController } from "../controllers/institution.controller";


const router: Router = Router();

router.post('/institution/create', authorization, authorizeRoles(Role.ADMIN), (req: Request, res: Response, next: NextFunction) => {
    return institutionController.createInstitution(req, res, next);
});

router.get(
    '/institution/all',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response, next: NextFunction) => {
        return institutionController.getAllInstitutions(res, next);
    }
);

router.get(
    '/institution/get/:id',
    authorization,
    authorizeRoles(Role.ADMIN), (req: Request, res: Response, next: NextFunction) => {
    return institutionController.getInstitutionById(req, res, next);
});

router.put(
    '/institution/update/:id',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response, next: NextFunction) => {
        return institutionController.updateInstitution(req, res, next);
    }
);

router.delete(
    '/institution/delete/:id',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response, next: NextFunction) => {
        return institutionController.deleteInstitution(req, res, next);
    }
);


export default router;
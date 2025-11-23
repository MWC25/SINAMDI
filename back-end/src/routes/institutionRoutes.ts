import { Request, Response, Router } from "express";
import { authorization } from "../middlewares/auth.middleware";
import { authorizeRoles } from "../middlewares/authorizeRoles.midleware";
import { Role } from "../generated/prisma/enums";
import { institutionController } from "../controllers/institution.controller";


const router: Router = Router();

router.post('/institution/create', authorization, authorizeRoles(Role.ADMIN), (req: Request, res: Response) => {
    return institutionController.createInstitution(req, res);
});

router.get(
    '/institution/all',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response) => {
        return institutionController.getAllInstitutions(res);
    }
);

router.get(
    '/institution/get/:id',
    authorization,
    authorizeRoles(Role.ADMIN), (req: Request, res: Response) => {
    return institutionController.getInstitutionById(req, res);
});

router.put(
    '/institution/update/:id',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response) => {
        return institutionController.updateInstitution(req, res);
    }
);

router.delete(
    '/institution/delete/:id',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request, res: Response) => {
        return institutionController.deleteInstitution(req, res);
    }
);


export default router;
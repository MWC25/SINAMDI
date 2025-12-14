import { NextFunction, Request, Response, Router } from "express";
import { authorization } from "../middlewares/auth.middleware";
import { authorizeRoles } from "../middlewares/authorizeRoles.midleware";
import { Role } from "@prisma/client";
import { collectController } from "../controllers/collect.controller";

const router: Router = Router();

router.post('/collect/create',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request, res: Response, next: NextFunction) => {
        return collectController.createCollect(req, res, next);
    }
);

router.get(
    '/collect/all',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request,res: Response, next: NextFunction) => {
        return collectController.getAllCollect(req, res, next);
    }
);

router.patch(
    '/collect/update/:id',
    authorization,
    authorizeRoles(Role.ADMIN, Role.HEALTH_PROFESSIONAL),
    (req: Request,res: Response, next: NextFunction) => {
        return collectController.updateCollect(req, res, next);
    }
);

router.delete(
    '/collect/delete/:id',
    authorization,
    authorizeRoles(Role.ADMIN),
    (req: Request,res: Response, next: NextFunction) => {
        return collectController.deleteCollect(req, res, next);
    }
);

export default router;
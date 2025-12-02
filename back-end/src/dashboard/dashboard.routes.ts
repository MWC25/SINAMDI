import { Router } from 'express';
import { dashboardController } from './dashboard.controller';

const router: Router = Router();

router.get('/dashboard/overview', (req, res, next) =>
    dashboardController.getOverview(req, res, next)
);

export default router;

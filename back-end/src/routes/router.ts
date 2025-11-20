import { Router } from "express";
import authRoutes from './authRoutes'
import userRoutes from './userRoutes'


const router: Router = Router();

router.use(authRoutes)
router.use(userRoutes)

export default router;
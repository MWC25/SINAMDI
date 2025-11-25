import { Router } from "express";
import authRoutes from './authRoutes'
import userRoutes from './userRoutes'
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "../config/swagger";
import institutionRoutes from './institutionRoutes'
import patientRoutes from "./patientRoutes";
import collectRoutes from "./collectRoutes";

const router: Router = Router();

router.use(authRoutes)
router.use(userRoutes)
router.use(patientRoutes)
router.use(institutionRoutes)
router.use(collectRoutes)
router.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default router;
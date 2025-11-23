import { Router } from "express";
import authRoutes from './authRoutes'
import userRoutes from './userRoutes'
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "../config/swagger";
import patientRoutes from "./patientRoutes";

const router: Router = Router();

router.use(authRoutes)
router.use(userRoutes)
router.use('/patient', patientRoutes)
router.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec))



export default router;
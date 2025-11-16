import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { authorization } from "../middlewares/auth.middleware";

const router: Router = Router();

router.post('/auth/login', (req, res, next)=>{
    return authController.login(req, res, next);
})

router.get('/auth/validate', authorization, (req, res)=>{
    return res.status(200).json({
        message: "Token is valid"
    });
})

export default router;
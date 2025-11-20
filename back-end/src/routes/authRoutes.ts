import { Request, Response, Router } from "express";
import { authController } from "../controllers/auth.controller";
import { authorization } from "../middlewares/auth.middleware";

const router: Router = Router();

router.post('/auth/login', (req: Request, res: Response, next)=>{
    return authController.login(req, res, next);
})

router.get('/auth/validate', authorization, (req: Request, res: Response)=>{
    
    console.log(res.locals.user);

    return res.status(200).json({
        message: "Token is valid"
    });
})


export default router;
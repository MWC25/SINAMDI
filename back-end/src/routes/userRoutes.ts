import { Request, Response, Router } from "express";
import { authorization } from "../middlewares/auth.middleware";
import { userController } from "../controllers/user.controller";

const router: Router = Router();

router.post("/user/create", authorization, (req: Request, res: Response) => {
    return userController.create(req, res);
})

router.get("/user/:userId", authorization, (req: Request, res: Response) => {
    return userController.getUserById(req, res);
})

router.put("/user/:userId", authorization, (req: Request, res: Response) => {
    return userController.updateUser(req, res);
})

router.get("/users/all", authorization, (req: Request, res: Response) => {
    return userController.getAllUsers(req, res);
})



export default router;
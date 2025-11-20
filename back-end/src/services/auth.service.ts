import { Request, Response } from "express";
import { userRepository } from "../repositories/user.repository"
import { verifyPassword } from "../util/cryptPassword";
import 'dotenv/config'
import { JWTProvider } from "../config/JWTProvider";

export const authService = {
    async authenticate(req: Request, res: Response){

        const {username, password}= req.body;        

        const user = await userRepository.getUserByUserName(username)

        if (!user){
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }

        if (await verifyPassword(password, user.passwordHash) === false){
            return res.status(401).json({
                message: 'Invalid Credentials',
            });
        }

        const token = JWTProvider.generateToken(user.id);

        return res.status(200).json({
                message: 'Login successful',
                accessToken: token,
                user: user,
            });
    }
}
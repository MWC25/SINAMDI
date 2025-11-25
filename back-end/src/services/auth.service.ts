import { Request, Response } from 'express';
import { userRepository } from '../repositories/user.repository';
import { verifyPassword } from '../util/cryptPassword';
import 'dotenv/config';
import { JWTProvider } from '../config/JWTProvider';
import { createHttpError, ErrorTypes } from '../util/error/error';

export const authService = {
    async authenticate(req: Request, res: Response) {
        const { username, password } = req.body;

        const user = await userRepository.getUserByUserName(username);

        if (!user) {
            throw createHttpError(
                ErrorTypes.UNAUTHORIZED,
                'Invalid Credentials'
            );
        }

        if ((await verifyPassword(password, user.passwordHash)) === false) {
            throw createHttpError(
                ErrorTypes.UNAUTHORIZED,
                'Invalid Credentials'
            );
        }

        const token = JWTProvider.generateToken(user.id);

        res.cookie('authToken', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 1,
            signed: true,
        });

        return { token, user };
    },
};

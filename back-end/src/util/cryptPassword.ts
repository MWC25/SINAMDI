import bcrypt from 'bcryptjs';
import { createHttpError, ErrorTypes } from './error/error';

export async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10;

    if (!password) {
        throw createHttpError(ErrorTypes.BAD_REQUEST, 'Password cannot be empty');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

export async function verifyPassword(
    password: string,
    hashedPassword: string
): Promise<boolean> {
    if (!password) {
        throw createHttpError(ErrorTypes.BAD_REQUEST, 'Password cannot be empty');
    }
    if (!hashedPassword) {
        throw createHttpError(ErrorTypes.BAD_REQUEST, 'Hashed password cannot be empty');
    }

    try {
        const matchPassoword = await bcrypt.compare(password, hashedPassword);
        return matchPassoword;
    } catch (error) {
        throw error;
    }
}

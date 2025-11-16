import bcrypt from 'bcryptjs'

export async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10

    if (!password) {
        throw new Error('Password cannot be empty');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword
    } catch (error) {
        throw error
    }
    
}

export async function verifyPassword(
    password: string,
    hashedPassword: string
): Promise<boolean> {

    if (!password) {
        throw new Error('Password cannot be empty');
    }
    if (!hashedPassword) {
        throw new Error('Hashed password cannot be empty');
    }

    try {
        const matchPassoword = await bcrypt.compare(password, hashedPassword);
        return matchPassoword;
    } catch (error) {
        throw error;
    }
}
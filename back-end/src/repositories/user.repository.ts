import { prisma } from "../config/prisma"

export const userRepository = {
    async getUser(username: string){
        return await prisma.user.findUnique({
            where: {
                username: username,
            },
        });
    }
}
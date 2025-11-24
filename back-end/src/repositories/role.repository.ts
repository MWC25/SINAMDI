import { prisma } from "../config/prisma"

export const roleRepository = {
    async getRoleByUserId(userId: string){
        return await prisma.user.findFirst({
            select:{
                role: true,
            },
            where: {
                id: userId,
            }
        });
    },    
}
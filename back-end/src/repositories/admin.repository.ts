import { prisma } from "../config/prisma";
import { User } from "../generated/prisma/client";

export const AdminRepository = {
    async createAdmin(data:any): Promise<User> {
        return await prisma.user.create({ data })
    },

    async getAdmins(): Promise<User[]>{
        return await prisma.user.findMany({
            where: {
                role: "ADMIN"
            }}
        )
    }
}
import { Role } from "../generated/prisma/enums";

export type userDTOType = {
    username: string;
    password: string;
    role?: Role;
}

export const userDTO = {
    buildCreateUserDto(data: any): userDTOType {

        if (!data.username || !data.password) {
            throw new Error("Invalid data: username and password are required.");
        }

        return {
            username: String(data.username).trim(),
            password: String(data.password).toLowerCase().trim(),
            role: data.role as Role,
        };
    },
};
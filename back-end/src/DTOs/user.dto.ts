import { Role } from '../generated/prisma/enums';
import { createHttpError, ErrorTypes } from '../util/error/error';

export type UserDTOType = {
    username: string;
    password: string;
    role?: Role;
    institutionName?: string | undefined;
};

export const userDTO = {
    buildCreateUserDto(data: any): UserDTOType {
        if (!data.username || !data.password) {
            throw createHttpError(ErrorTypes.BAD_REQUEST,
                'Invalid data: username and password are required.'
            );
        }

        return {
            username: String(data.username),
            password: String(data.password),
            role: data.role as Role,
            institutionName: data.institutionName
                ? String(data.institutionName)
                : undefined,
        };
    },
};

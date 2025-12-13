import { Role } from '../generated/prisma/enums';
export type UserDTOType = {
    username: string;
    password: string;
    role?: Role;
    institutionName?: string | undefined;
};
export declare const userDTO: {
    buildCreateUserDto(data: any): UserDTOType;
};
//# sourceMappingURL=user.dto.d.ts.map
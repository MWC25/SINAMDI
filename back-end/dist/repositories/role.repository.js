"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRepository = void 0;
const prisma_1 = require("../config/prisma");
exports.roleRepository = {
    async getRoleByUserId(userId) {
        return await prisma_1.prisma.user.findFirst({
            select: {
                role: true,
            },
            where: {
                id: userId,
            }
        });
    },
};
//# sourceMappingURL=role.repository.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const prisma_1 = require("../config/prisma");
exports.AdminRepository = {
    async createAdmin(data) {
        return await prisma_1.prisma.user.create({ data });
    },
    async getAdmins() {
        return await prisma_1.prisma.user.findMany({
            where: {
                role: "ADMIN"
            }
        });
    }
};
//# sourceMappingURL=admin.repository.js.map
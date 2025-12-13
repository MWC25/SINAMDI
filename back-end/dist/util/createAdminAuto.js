"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminAuto = createAdminAuto;
const env_1 = require("../config/env");
const logger_1 = require("../config/logger");
const admin_repository_1 = require("../repositories/admin.repository");
const admin_service_1 = require("../services/admin.service");
async function createAdminAuto() {
    logger_1.logger.info('Searching for admins...');
    const admins = await admin_repository_1.AdminRepository.getAdmins();
    if (admins.length == 0) {
        logger_1.logger.warn('No admin was found... creating admin...');
        const data = { username: 'admin', password: env_1.USERADMINDEFAULTPASSWORD };
        try {
            const newAdmin = await admin_service_1.AdminService.createAdminUser(data);
            logger_1.logger.info(`The admin ${newAdmin.username} account was created successfully.`);
        }
        catch (error) {
            logger_1.logger.error('Error creating admin account: ', error);
        }
        return;
    }
    const admReturn = admins.map((adm) => ({
        id: adm.id,
        username: adm.username
    }));
    logger_1.logger.info('admins that were found\n', admReturn);
    return;
}
//# sourceMappingURL=createAdminAuto.js.map
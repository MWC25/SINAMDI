import { logger } from "../config/logger";
import { AdminRepository } from "../repositories/admin.repository";
import { AdminService } from "../services/admin.service";

export async function createAdminAuto(){
    logger.info('Searching for admins...');
    const admins = await AdminRepository.getAdmins()
    if (admins.length == 0) {
        logger.warn('No admin was found... creating admin...');
        const data = { username: 'admin', password: '1234' };
        try {
            const newAdmin = await AdminService.createAdminUser(data);
            logger.info(
                `The admin ${newAdmin.username} account was created successfully.`
            );
        } catch (error) {
            logger.error('Error creating admin account: ', error);
        }
        return;
    }

    const admReturn = admins.map((adm)=>(
        {
            id: adm.id,
            username: adm.username
        }
    ))
    logger.info('admins that were found\n', admReturn);
    return
}
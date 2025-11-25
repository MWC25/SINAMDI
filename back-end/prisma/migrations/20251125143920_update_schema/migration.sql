/*
  Warnings:

  - The values [PRESENCIAL] on the enum `Collect_channel` will be removed. If these variants are still used in the database, this will fail.
  - The values [MASCULINO,FEMININO,OUTRO,NAO_INFORMADO] on the enum `CollectData_gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [MEDIO,TECNICO,SUPERIOR,POS,NAO_INFORMADO] on the enum `CollectData_schooling` will be removed. If these variants are still used in the database, this will fail.
  - The values [BAIXO,MEDIO,ALTO] on the enum `CollectData_riskLevel` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `patientStatus` on the `patient` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(9))` to `Enum(EnumId(5))`.
  - The values [MASCULINO,FEMININO,OUTRO,NAO_INFORMADO] on the enum `CollectData_gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [MEDIO,TECNICO,SUPERIOR,POS,NAO_INFORMADO] on the enum `CollectData_schooling` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `collect` MODIFY `channel` ENUM('PRESENTIAL', 'ONLINE') NOT NULL;

-- AlterTable
ALTER TABLE `collectdata` MODIFY `gender` ENUM('MALE', 'FEMALE', 'OTHER') NULL,
    MODIFY `schooling` ENUM('NO_FORMAL', 'PRE', 'FUNDAMENTAL', 'MEDIUM', 'BACHELOR', 'MASTER', 'DOCTORATE') NULL,
    MODIFY `riskLevel` ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL;

-- AlterTable
ALTER TABLE `patient` MODIFY `patientStatus` ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED') NOT NULL DEFAULT 'ACTIVE',
    MODIFY `gender` ENUM('MALE', 'FEMALE', 'OTHER') NULL,
    MODIFY `schooling` ENUM('NO_FORMAL', 'PRE', 'FUNDAMENTAL', 'MEDIUM', 'BACHELOR', 'MASTER', 'DOCTORATE') NULL;

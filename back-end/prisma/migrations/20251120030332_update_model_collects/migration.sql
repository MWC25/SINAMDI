/*
  Warnings:

  - You are about to drop the column `ageYears` on the `collectdata` table. All the data in the column will be lost.
  - You are about to drop the column `appsUsage` on the `collectdata` table. All the data in the column will be lost.
  - You are about to drop the column `bingeEpisodesPerWeek` on the `collectdata` table. All the data in the column will be lost.
  - You are about to drop the column `gamesMin` on the `collectdata` table. All the data in the column will be lost.
  - You are about to drop the column `hasInsomnia` on the `collectdata` table. All the data in the column will be lost.
  - You are about to drop the column `notificationsPerDay` on the `collectdata` table. All the data in the column will be lost.
  - You are about to drop the column `shortVideoMin` on the `collectdata` table. All the data in the column will be lost.
  - You are about to drop the column `socialMediaMin` on the `collectdata` table. All the data in the column will be lost.
  - You are about to drop the column `videoStreamingMin` on the `collectdata` table. All the data in the column will be lost.
  - Made the column `sleepQualityScore` on table `collectdata` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anxietyScore` on table `collectdata` required. This step will fail if there are existing NULL values in that column.
  - Made the column `depressionScore` on table `collectdata` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isolationScore` on table `collectdata` required. This step will fail if there are existing NULL values in that column.
  - Made the column `physicalActivityPerWeek` on table `collectdata` required. This step will fail if there are existing NULL values in that column.
  - Made the column `consentAt` on table `collectdata` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `birthDate` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sleepQuality` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `collectdata` DROP COLUMN `ageYears`,
    DROP COLUMN `appsUsage`,
    DROP COLUMN `bingeEpisodesPerWeek`,
    DROP COLUMN `gamesMin`,
    DROP COLUMN `hasInsomnia`,
    DROP COLUMN `notificationsPerDay`,
    DROP COLUMN `shortVideoMin`,
    DROP COLUMN `socialMediaMin`,
    DROP COLUMN `videoStreamingMin`,
    MODIFY `sleepQualityScore` INTEGER NOT NULL,
    MODIFY `anxietyScore` INTEGER NOT NULL,
    MODIFY `depressionScore` INTEGER NOT NULL,
    MODIFY `isolationScore` INTEGER NOT NULL,
    MODIFY `physicalActivityPerWeek` INTEGER NOT NULL,
    MODIFY `consentAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `patient` ADD COLUMN `birthDate` DATETIME(3) NOT NULL,
    ADD COLUMN `gender` ENUM('MASCULINO', 'FEMININO', 'OUTRO', 'NAO_INFORMADO') NULL,
    ADD COLUMN `isInsomnia` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `schooling` ENUM('FUNDAMENTAL', 'MEDIO', 'TECNICO', 'SUPERIOR', 'POS', 'NAO_INFORMADO') NULL,
    ADD COLUMN `sleepQuality` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('ADMIN', 'COMMON', 'PATIENT', 'HEALTH_PROFESSIONAL') NOT NULL DEFAULT 'COMMON';

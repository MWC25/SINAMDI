/*
  Warnings:

  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `institutionId` VARCHAR(191) NULL,
    MODIFY `role` ENUM('ADMIN', 'COMMON', 'PATIENT') NOT NULL DEFAULT 'COMMON';

-- CreateTable
CREATE TABLE `Patient` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `phone` VARCHAR(11) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `lastCollectionAt` DATETIME(3) NULL,
    `patientStatus` ENUM('ATIVO', 'INATIVO', 'SUSPENSO') NOT NULL DEFAULT 'ATIVO',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Patient_cpf_key`(`cpf`),
    UNIQUE INDEX `Patient_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Collect` (
    `id` VARCHAR(191) NOT NULL,
    `collectedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `channel` ENUM('PRESENCIAL', 'ONLINE') NOT NULL,
    `patientHash` VARCHAR(191) NOT NULL,
    `institutionId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Collect_collectedAt_idx`(`collectedAt`),
    INDEX `Collect_channel_idx`(`channel`),
    INDEX `Collect_patientHash_idx`(`patientHash`),
    INDEX `Collect_institutionId_idx`(`institutionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Institution` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('HOSPITAL', 'CLINIC', 'SCHOOL', 'COMPANY', 'ONG', 'DEVs') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddressInstitution` (
    `id` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO') NOT NULL,
    `zipCode` VARCHAR(8) NOT NULL,
    `institutionId` VARCHAR(191) NULL,

    UNIQUE INDEX `AddressInstitution_institutionId_key`(`institutionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddressPatient` (
    `id` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO') NOT NULL,
    `zipCode` VARCHAR(8) NOT NULL,
    `patientId` VARCHAR(191) NULL,

    UNIQUE INDEX `AddressPatient_patientId_key`(`patientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CollectData` (
    `id` VARCHAR(191) NOT NULL,
    `collectId` VARCHAR(191) NOT NULL,
    `ageRange` ENUM('AGE_6a11', 'AGE_12a14', 'AGE_15a17', 'AGE_18a25', 'AGE_26a40', 'AGE_41a59', 'AGE_60a74', 'AGE_75a89', 'AGE_90Plus') NOT NULL,
    `ageYears` INTEGER NULL,
    `gender` ENUM('MASCULINO', 'FEMININO', 'OUTRO', 'NAO_INFORMADO') NULL,
    `schooling` ENUM('FUNDAMENTAL', 'MEDIO', 'TECNICO', 'SUPERIOR', 'POS', 'NAO_INFORMADO') NULL,
    `state` ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO') NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `dailyScreenTimeMin` INTEGER NOT NULL,
    `socialMediaMin` INTEGER NOT NULL,
    `gamesMin` INTEGER NOT NULL,
    `videoStreamingMin` INTEGER NOT NULL,
    `shortVideoMin` INTEGER NOT NULL,
    `nightUsageMin` INTEGER NOT NULL,
    `bingeEpisodesPerWeek` INTEGER NOT NULL,
    `devicesCount` INTEGER NOT NULL,
    `notificationsPerDay` INTEGER NULL,
    `appsUsage` JSON NULL,
    `dependencyScore` INTEGER NOT NULL,
    `riskLevel` ENUM('BAIXO', 'MEDIO', 'ALTO') NOT NULL,
    `questionnaireVersion` VARCHAR(191) NOT NULL,
    `rawAnswers` JSON NULL,
    `sleepQualityScore` INTEGER NULL,
    `hasInsomnia` BOOLEAN NULL,
    `anxietyScore` INTEGER NULL,
    `depressionScore` INTEGER NULL,
    `isolationScore` INTEGER NULL,
    `physicalActivityPerWeek` INTEGER NULL,
    `hasConsent` BOOLEAN NOT NULL,
    `consentAt` DATETIME(3) NULL,
    `notes` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CollectData_collectId_key`(`collectId`),
    INDEX `CollectData_ageRange_idx`(`ageRange`),
    INDEX `CollectData_riskLevel_idx`(`riskLevel`),
    INDEX `CollectData_state_idx`(`state`),
    INDEX `CollectData_dependencyScore_idx`(`dependencyScore`),
    INDEX `CollectData_questionnaireVersion_idx`(`questionnaireVersion`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_institutionId_fkey` FOREIGN KEY (`institutionId`) REFERENCES `Institution`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Collect` ADD CONSTRAINT `Collect_institutionId_fkey` FOREIGN KEY (`institutionId`) REFERENCES `Institution`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AddressInstitution` ADD CONSTRAINT `AddressInstitution_institutionId_fkey` FOREIGN KEY (`institutionId`) REFERENCES `Institution`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AddressPatient` ADD CONSTRAINT `AddressPatient_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CollectData` ADD CONSTRAINT `CollectData_collectId_fkey` FOREIGN KEY (`collectId`) REFERENCES `Collect`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

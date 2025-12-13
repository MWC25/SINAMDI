export declare const State: {
    readonly AC: "AC";
    readonly AL: "AL";
    readonly AP: "AP";
    readonly AM: "AM";
    readonly BA: "BA";
    readonly CE: "CE";
    readonly DF: "DF";
    readonly ES: "ES";
    readonly GO: "GO";
    readonly MA: "MA";
    readonly MT: "MT";
    readonly MS: "MS";
    readonly MG: "MG";
    readonly PA: "PA";
    readonly PB: "PB";
    readonly PR: "PR";
    readonly PE: "PE";
    readonly PI: "PI";
    readonly RJ: "RJ";
    readonly RN: "RN";
    readonly RS: "RS";
    readonly RO: "RO";
    readonly RR: "RR";
    readonly SC: "SC";
    readonly SP: "SP";
    readonly SE: "SE";
    readonly TO: "TO";
};
export type State = (typeof State)[keyof typeof State];
export declare const AgeRange: {
    readonly AGE_6a11: "AGE_6a11";
    readonly AGE_12a14: "AGE_12a14";
    readonly AGE_15a17: "AGE_15a17";
    readonly AGE_18a25: "AGE_18a25";
    readonly AGE_26a40: "AGE_26a40";
    readonly AGE_41a59: "AGE_41a59";
    readonly AGE_60a74: "AGE_60a74";
    readonly AGE_75a89: "AGE_75a89";
    readonly AGE_90Plus: "AGE_90Plus";
};
export type AgeRange = (typeof AgeRange)[keyof typeof AgeRange];
export declare const CollectChannel: {
    readonly PRESENTIAL: "PRESENTIAL";
    readonly ONLINE: "ONLINE";
};
export type CollectChannel = (typeof CollectChannel)[keyof typeof CollectChannel];
export declare const CollectRisk: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
};
export type CollectRisk = (typeof CollectRisk)[keyof typeof CollectRisk];
export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly COMMON: "COMMON";
    readonly PATIENT: "PATIENT";
    readonly HEALTH_PROFESSIONAL: "HEALTH_PROFESSIONAL";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const InstitutionType: {
    readonly HOSPITAL: "HOSPITAL";
    readonly CLINIC: "CLINIC";
    readonly SCHOOL: "SCHOOL";
    readonly COMPANY: "COMPANY";
    readonly ONG: "ONG";
    readonly DEVs: "DEVs";
};
export type InstitutionType = (typeof InstitutionType)[keyof typeof InstitutionType];
export declare const PatientStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type PatientStatus = (typeof PatientStatus)[keyof typeof PatientStatus];
export declare const Gender: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
    readonly OTHER: "OTHER";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const Schooling: {
    readonly NO_FORMAL: "NO_FORMAL";
    readonly PRE: "PRE";
    readonly FUNDAMENTAL: "FUNDAMENTAL";
    readonly MEDIUM: "MEDIUM";
    readonly BACHELOR: "BACHELOR";
    readonly MASTER: "MASTER";
    readonly DOCTORATE: "DOCTORATE";
};
export type Schooling = (typeof Schooling)[keyof typeof Schooling];
//# sourceMappingURL=enums.d.ts.map
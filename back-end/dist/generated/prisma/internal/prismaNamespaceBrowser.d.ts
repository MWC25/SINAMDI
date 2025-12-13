import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly Collect: "Collect";
    readonly Institution: "Institution";
    readonly AddressInstitution: "AddressInstitution";
    readonly AddressPatient: "AddressPatient";
    readonly Patient: "Patient";
    readonly CollectData: "CollectData";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly registration: "registration";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly isActive: "isActive";
    readonly lastLogin: "lastLogin";
    readonly institutionId: "institutionId";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CollectScalarFieldEnum: {
    readonly id: "id";
    readonly collectedAt: "collectedAt";
    readonly channel: "channel";
    readonly patientHash: "patientHash";
    readonly institutionId: "institutionId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CollectScalarFieldEnum = (typeof CollectScalarFieldEnum)[keyof typeof CollectScalarFieldEnum];
export declare const InstitutionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum];
export declare const AddressInstitutionScalarFieldEnum: {
    readonly id: "id";
    readonly street: "street";
    readonly number: "number";
    readonly complement: "complement";
    readonly neighborhood: "neighborhood";
    readonly city: "city";
    readonly state: "state";
    readonly zipCode: "zipCode";
    readonly institutionId: "institutionId";
};
export type AddressInstitutionScalarFieldEnum = (typeof AddressInstitutionScalarFieldEnum)[keyof typeof AddressInstitutionScalarFieldEnum];
export declare const AddressPatientScalarFieldEnum: {
    readonly id: "id";
    readonly street: "street";
    readonly number: "number";
    readonly complement: "complement";
    readonly neighborhood: "neighborhood";
    readonly city: "city";
    readonly state: "state";
    readonly zipCode: "zipCode";
    readonly patientId: "patientId";
};
export type AddressPatientScalarFieldEnum = (typeof AddressPatientScalarFieldEnum)[keyof typeof AddressPatientScalarFieldEnum];
export declare const PatientScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly cpf: "cpf";
    readonly phone: "phone";
    readonly email: "email";
    readonly lastCollectionAt: "lastCollectionAt";
    readonly patientStatus: "patientStatus";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly birthDate: "birthDate";
    readonly sleepQuality: "sleepQuality";
    readonly isInsomnia: "isInsomnia";
    readonly gender: "gender";
    readonly schooling: "schooling";
};
export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];
export declare const CollectDataScalarFieldEnum: {
    readonly id: "id";
    readonly collectId: "collectId";
    readonly ageRange: "ageRange";
    readonly gender: "gender";
    readonly schooling: "schooling";
    readonly state: "state";
    readonly city: "city";
    readonly dailyScreenTimeMin: "dailyScreenTimeMin";
    readonly nightUsageMin: "nightUsageMin";
    readonly devicesCount: "devicesCount";
    readonly dependencyScore: "dependencyScore";
    readonly riskLevel: "riskLevel";
    readonly questionnaireVersion: "questionnaireVersion";
    readonly rawAnswers: "rawAnswers";
    readonly sleepQualityScore: "sleepQualityScore";
    readonly anxietyScore: "anxietyScore";
    readonly depressionScore: "depressionScore";
    readonly isolationScore: "isolationScore";
    readonly physicalActivityPerWeek: "physicalActivityPerWeek";
    readonly hasConsent: "hasConsent";
    readonly consentAt: "consentAt";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CollectDataScalarFieldEnum = (typeof CollectDataScalarFieldEnum)[keyof typeof CollectDataScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly registration: "registration";
    readonly passwordHash: "passwordHash";
    readonly institutionId: "institutionId";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const CollectOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly patientHash: "patientHash";
    readonly institutionId: "institutionId";
};
export type CollectOrderByRelevanceFieldEnum = (typeof CollectOrderByRelevanceFieldEnum)[keyof typeof CollectOrderByRelevanceFieldEnum];
export declare const InstitutionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type InstitutionOrderByRelevanceFieldEnum = (typeof InstitutionOrderByRelevanceFieldEnum)[keyof typeof InstitutionOrderByRelevanceFieldEnum];
export declare const AddressInstitutionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly street: "street";
    readonly number: "number";
    readonly complement: "complement";
    readonly neighborhood: "neighborhood";
    readonly city: "city";
    readonly zipCode: "zipCode";
    readonly institutionId: "institutionId";
};
export type AddressInstitutionOrderByRelevanceFieldEnum = (typeof AddressInstitutionOrderByRelevanceFieldEnum)[keyof typeof AddressInstitutionOrderByRelevanceFieldEnum];
export declare const AddressPatientOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly street: "street";
    readonly number: "number";
    readonly complement: "complement";
    readonly neighborhood: "neighborhood";
    readonly city: "city";
    readonly zipCode: "zipCode";
    readonly patientId: "patientId";
};
export type AddressPatientOrderByRelevanceFieldEnum = (typeof AddressPatientOrderByRelevanceFieldEnum)[keyof typeof AddressPatientOrderByRelevanceFieldEnum];
export declare const PatientOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly cpf: "cpf";
    readonly phone: "phone";
    readonly email: "email";
};
export type PatientOrderByRelevanceFieldEnum = (typeof PatientOrderByRelevanceFieldEnum)[keyof typeof PatientOrderByRelevanceFieldEnum];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const CollectDataOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly collectId: "collectId";
    readonly city: "city";
    readonly questionnaireVersion: "questionnaireVersion";
    readonly notes: "notes";
};
export type CollectDataOrderByRelevanceFieldEnum = (typeof CollectDataOrderByRelevanceFieldEnum)[keyof typeof CollectDataOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map
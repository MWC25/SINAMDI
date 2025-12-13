import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
 * Metrics
 */
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 6.19.0
 * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "collect" | "institution" | "addressInstitution" | "addressPatient" | "patient" | "collectData";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Collect: {
            payload: Prisma.$CollectPayload<ExtArgs>;
            fields: Prisma.CollectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CollectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CollectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectPayload>;
                };
                findFirst: {
                    args: Prisma.CollectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CollectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectPayload>;
                };
                findMany: {
                    args: Prisma.CollectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectPayload>[];
                };
                create: {
                    args: Prisma.CollectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectPayload>;
                };
                createMany: {
                    args: Prisma.CollectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CollectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectPayload>;
                };
                update: {
                    args: Prisma.CollectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectPayload>;
                };
                deleteMany: {
                    args: Prisma.CollectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CollectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CollectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectPayload>;
                };
                aggregate: {
                    args: Prisma.CollectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCollect>;
                };
                groupBy: {
                    args: Prisma.CollectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CollectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CollectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CollectCountAggregateOutputType> | number;
                };
            };
        };
        Institution: {
            payload: Prisma.$InstitutionPayload<ExtArgs>;
            fields: Prisma.InstitutionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InstitutionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstitutionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InstitutionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstitutionPayload>;
                };
                findFirst: {
                    args: Prisma.InstitutionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstitutionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InstitutionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstitutionPayload>;
                };
                findMany: {
                    args: Prisma.InstitutionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstitutionPayload>[];
                };
                create: {
                    args: Prisma.InstitutionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstitutionPayload>;
                };
                createMany: {
                    args: Prisma.InstitutionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.InstitutionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstitutionPayload>;
                };
                update: {
                    args: Prisma.InstitutionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstitutionPayload>;
                };
                deleteMany: {
                    args: Prisma.InstitutionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InstitutionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.InstitutionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstitutionPayload>;
                };
                aggregate: {
                    args: Prisma.InstitutionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInstitution>;
                };
                groupBy: {
                    args: Prisma.InstitutionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstitutionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InstitutionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstitutionCountAggregateOutputType> | number;
                };
            };
        };
        AddressInstitution: {
            payload: Prisma.$AddressInstitutionPayload<ExtArgs>;
            fields: Prisma.AddressInstitutionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AddressInstitutionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressInstitutionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AddressInstitutionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressInstitutionPayload>;
                };
                findFirst: {
                    args: Prisma.AddressInstitutionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressInstitutionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AddressInstitutionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressInstitutionPayload>;
                };
                findMany: {
                    args: Prisma.AddressInstitutionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressInstitutionPayload>[];
                };
                create: {
                    args: Prisma.AddressInstitutionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressInstitutionPayload>;
                };
                createMany: {
                    args: Prisma.AddressInstitutionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AddressInstitutionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressInstitutionPayload>;
                };
                update: {
                    args: Prisma.AddressInstitutionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressInstitutionPayload>;
                };
                deleteMany: {
                    args: Prisma.AddressInstitutionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AddressInstitutionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AddressInstitutionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressInstitutionPayload>;
                };
                aggregate: {
                    args: Prisma.AddressInstitutionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAddressInstitution>;
                };
                groupBy: {
                    args: Prisma.AddressInstitutionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddressInstitutionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AddressInstitutionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddressInstitutionCountAggregateOutputType> | number;
                };
            };
        };
        AddressPatient: {
            payload: Prisma.$AddressPatientPayload<ExtArgs>;
            fields: Prisma.AddressPatientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AddressPatientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressPatientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AddressPatientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressPatientPayload>;
                };
                findFirst: {
                    args: Prisma.AddressPatientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressPatientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AddressPatientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressPatientPayload>;
                };
                findMany: {
                    args: Prisma.AddressPatientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressPatientPayload>[];
                };
                create: {
                    args: Prisma.AddressPatientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressPatientPayload>;
                };
                createMany: {
                    args: Prisma.AddressPatientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AddressPatientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressPatientPayload>;
                };
                update: {
                    args: Prisma.AddressPatientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressPatientPayload>;
                };
                deleteMany: {
                    args: Prisma.AddressPatientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AddressPatientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AddressPatientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddressPatientPayload>;
                };
                aggregate: {
                    args: Prisma.AddressPatientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAddressPatient>;
                };
                groupBy: {
                    args: Prisma.AddressPatientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddressPatientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AddressPatientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddressPatientCountAggregateOutputType> | number;
                };
            };
        };
        Patient: {
            payload: Prisma.$PatientPayload<ExtArgs>;
            fields: Prisma.PatientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                findFirst: {
                    args: Prisma.PatientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                findMany: {
                    args: Prisma.PatientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>[];
                };
                create: {
                    args: Prisma.PatientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                createMany: {
                    args: Prisma.PatientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PatientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                update: {
                    args: Prisma.PatientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PatientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                aggregate: {
                    args: Prisma.PatientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatient>;
                };
                groupBy: {
                    args: Prisma.PatientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientCountAggregateOutputType> | number;
                };
            };
        };
        CollectData: {
            payload: Prisma.$CollectDataPayload<ExtArgs>;
            fields: Prisma.CollectDataFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CollectDataFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectDataPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CollectDataFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectDataPayload>;
                };
                findFirst: {
                    args: Prisma.CollectDataFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectDataPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CollectDataFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectDataPayload>;
                };
                findMany: {
                    args: Prisma.CollectDataFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectDataPayload>[];
                };
                create: {
                    args: Prisma.CollectDataCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectDataPayload>;
                };
                createMany: {
                    args: Prisma.CollectDataCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CollectDataDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectDataPayload>;
                };
                update: {
                    args: Prisma.CollectDataUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectDataPayload>;
                };
                deleteMany: {
                    args: Prisma.CollectDataDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CollectDataUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CollectDataUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectDataPayload>;
                };
                aggregate: {
                    args: Prisma.CollectDataAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCollectData>;
                };
                groupBy: {
                    args: Prisma.CollectDataGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CollectDataGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CollectDataCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CollectDataCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'CollectChannel'
 */
export type EnumCollectChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollectChannel'>;
/**
 * Reference to a field of type 'InstitutionType'
 */
export type EnumInstitutionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstitutionType'>;
/**
 * Reference to a field of type 'State'
 */
export type EnumStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'State'>;
/**
 * Reference to a field of type 'PatientStatus'
 */
export type EnumPatientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PatientStatus'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Gender'
 */
export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>;
/**
 * Reference to a field of type 'Schooling'
 */
export type EnumSchoolingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Schooling'>;
/**
 * Reference to a field of type 'AgeRange'
 */
export type EnumAgeRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeRange'>;
/**
 * Reference to a field of type 'CollectRisk'
 */
export type EnumCollectRiskFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollectRisk'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    collect?: Prisma.CollectOmit;
    institution?: Prisma.InstitutionOmit;
    addressInstitution?: Prisma.AddressInstitutionOmit;
    addressPatient?: Prisma.AddressPatientOmit;
    patient?: Prisma.PatientOmit;
    collectData?: Prisma.CollectDataOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map
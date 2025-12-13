import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CollectData
 *
 */
export type CollectDataModel = runtime.Types.Result.DefaultSelection<Prisma.$CollectDataPayload>;
export type AggregateCollectData = {
    _count: CollectDataCountAggregateOutputType | null;
    _avg: CollectDataAvgAggregateOutputType | null;
    _sum: CollectDataSumAggregateOutputType | null;
    _min: CollectDataMinAggregateOutputType | null;
    _max: CollectDataMaxAggregateOutputType | null;
};
export type CollectDataAvgAggregateOutputType = {
    dailyScreenTimeMin: number | null;
    nightUsageMin: number | null;
    devicesCount: number | null;
    dependencyScore: number | null;
    sleepQualityScore: number | null;
    anxietyScore: number | null;
    depressionScore: number | null;
    isolationScore: number | null;
    physicalActivityPerWeek: number | null;
};
export type CollectDataSumAggregateOutputType = {
    dailyScreenTimeMin: number | null;
    nightUsageMin: number | null;
    devicesCount: number | null;
    dependencyScore: number | null;
    sleepQualityScore: number | null;
    anxietyScore: number | null;
    depressionScore: number | null;
    isolationScore: number | null;
    physicalActivityPerWeek: number | null;
};
export type CollectDataMinAggregateOutputType = {
    id: string | null;
    collectId: string | null;
    ageRange: $Enums.AgeRange | null;
    gender: $Enums.Gender | null;
    schooling: $Enums.Schooling | null;
    state: $Enums.State | null;
    city: string | null;
    dailyScreenTimeMin: number | null;
    nightUsageMin: number | null;
    devicesCount: number | null;
    dependencyScore: number | null;
    riskLevel: $Enums.CollectRisk | null;
    questionnaireVersion: string | null;
    sleepQualityScore: number | null;
    anxietyScore: number | null;
    depressionScore: number | null;
    isolationScore: number | null;
    physicalActivityPerWeek: number | null;
    hasConsent: boolean | null;
    consentAt: Date | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CollectDataMaxAggregateOutputType = {
    id: string | null;
    collectId: string | null;
    ageRange: $Enums.AgeRange | null;
    gender: $Enums.Gender | null;
    schooling: $Enums.Schooling | null;
    state: $Enums.State | null;
    city: string | null;
    dailyScreenTimeMin: number | null;
    nightUsageMin: number | null;
    devicesCount: number | null;
    dependencyScore: number | null;
    riskLevel: $Enums.CollectRisk | null;
    questionnaireVersion: string | null;
    sleepQualityScore: number | null;
    anxietyScore: number | null;
    depressionScore: number | null;
    isolationScore: number | null;
    physicalActivityPerWeek: number | null;
    hasConsent: boolean | null;
    consentAt: Date | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CollectDataCountAggregateOutputType = {
    id: number;
    collectId: number;
    ageRange: number;
    gender: number;
    schooling: number;
    state: number;
    city: number;
    dailyScreenTimeMin: number;
    nightUsageMin: number;
    devicesCount: number;
    dependencyScore: number;
    riskLevel: number;
    questionnaireVersion: number;
    rawAnswers: number;
    sleepQualityScore: number;
    anxietyScore: number;
    depressionScore: number;
    isolationScore: number;
    physicalActivityPerWeek: number;
    hasConsent: number;
    consentAt: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CollectDataAvgAggregateInputType = {
    dailyScreenTimeMin?: true;
    nightUsageMin?: true;
    devicesCount?: true;
    dependencyScore?: true;
    sleepQualityScore?: true;
    anxietyScore?: true;
    depressionScore?: true;
    isolationScore?: true;
    physicalActivityPerWeek?: true;
};
export type CollectDataSumAggregateInputType = {
    dailyScreenTimeMin?: true;
    nightUsageMin?: true;
    devicesCount?: true;
    dependencyScore?: true;
    sleepQualityScore?: true;
    anxietyScore?: true;
    depressionScore?: true;
    isolationScore?: true;
    physicalActivityPerWeek?: true;
};
export type CollectDataMinAggregateInputType = {
    id?: true;
    collectId?: true;
    ageRange?: true;
    gender?: true;
    schooling?: true;
    state?: true;
    city?: true;
    dailyScreenTimeMin?: true;
    nightUsageMin?: true;
    devicesCount?: true;
    dependencyScore?: true;
    riskLevel?: true;
    questionnaireVersion?: true;
    sleepQualityScore?: true;
    anxietyScore?: true;
    depressionScore?: true;
    isolationScore?: true;
    physicalActivityPerWeek?: true;
    hasConsent?: true;
    consentAt?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CollectDataMaxAggregateInputType = {
    id?: true;
    collectId?: true;
    ageRange?: true;
    gender?: true;
    schooling?: true;
    state?: true;
    city?: true;
    dailyScreenTimeMin?: true;
    nightUsageMin?: true;
    devicesCount?: true;
    dependencyScore?: true;
    riskLevel?: true;
    questionnaireVersion?: true;
    sleepQualityScore?: true;
    anxietyScore?: true;
    depressionScore?: true;
    isolationScore?: true;
    physicalActivityPerWeek?: true;
    hasConsent?: true;
    consentAt?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CollectDataCountAggregateInputType = {
    id?: true;
    collectId?: true;
    ageRange?: true;
    gender?: true;
    schooling?: true;
    state?: true;
    city?: true;
    dailyScreenTimeMin?: true;
    nightUsageMin?: true;
    devicesCount?: true;
    dependencyScore?: true;
    riskLevel?: true;
    questionnaireVersion?: true;
    rawAnswers?: true;
    sleepQualityScore?: true;
    anxietyScore?: true;
    depressionScore?: true;
    isolationScore?: true;
    physicalActivityPerWeek?: true;
    hasConsent?: true;
    consentAt?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CollectDataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CollectData to aggregate.
     */
    where?: Prisma.CollectDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CollectData to fetch.
     */
    orderBy?: Prisma.CollectDataOrderByWithRelationInput | Prisma.CollectDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CollectDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CollectData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CollectData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CollectData
    **/
    _count?: true | CollectDataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CollectDataAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CollectDataSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CollectDataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CollectDataMaxAggregateInputType;
};
export type GetCollectDataAggregateType<T extends CollectDataAggregateArgs> = {
    [P in keyof T & keyof AggregateCollectData]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCollectData[P]> : Prisma.GetScalarType<T[P], AggregateCollectData[P]>;
};
export type CollectDataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CollectDataWhereInput;
    orderBy?: Prisma.CollectDataOrderByWithAggregationInput | Prisma.CollectDataOrderByWithAggregationInput[];
    by: Prisma.CollectDataScalarFieldEnum[] | Prisma.CollectDataScalarFieldEnum;
    having?: Prisma.CollectDataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CollectDataCountAggregateInputType | true;
    _avg?: CollectDataAvgAggregateInputType;
    _sum?: CollectDataSumAggregateInputType;
    _min?: CollectDataMinAggregateInputType;
    _max?: CollectDataMaxAggregateInputType;
};
export type CollectDataGroupByOutputType = {
    id: string;
    collectId: string;
    ageRange: $Enums.AgeRange;
    gender: $Enums.Gender | null;
    schooling: $Enums.Schooling | null;
    state: $Enums.State;
    city: string;
    dailyScreenTimeMin: number;
    nightUsageMin: number;
    devicesCount: number;
    dependencyScore: number;
    riskLevel: $Enums.CollectRisk;
    questionnaireVersion: string;
    rawAnswers: runtime.JsonValue | null;
    sleepQualityScore: number;
    anxietyScore: number;
    depressionScore: number;
    isolationScore: number;
    physicalActivityPerWeek: number;
    hasConsent: boolean;
    consentAt: Date;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CollectDataCountAggregateOutputType | null;
    _avg: CollectDataAvgAggregateOutputType | null;
    _sum: CollectDataSumAggregateOutputType | null;
    _min: CollectDataMinAggregateOutputType | null;
    _max: CollectDataMaxAggregateOutputType | null;
};
type GetCollectDataGroupByPayload<T extends CollectDataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CollectDataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CollectDataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CollectDataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CollectDataGroupByOutputType[P]>;
}>>;
export type CollectDataWhereInput = {
    AND?: Prisma.CollectDataWhereInput | Prisma.CollectDataWhereInput[];
    OR?: Prisma.CollectDataWhereInput[];
    NOT?: Prisma.CollectDataWhereInput | Prisma.CollectDataWhereInput[];
    id?: Prisma.StringFilter<"CollectData"> | string;
    collectId?: Prisma.StringFilter<"CollectData"> | string;
    ageRange?: Prisma.EnumAgeRangeFilter<"CollectData"> | $Enums.AgeRange;
    gender?: Prisma.EnumGenderNullableFilter<"CollectData"> | $Enums.Gender | null;
    schooling?: Prisma.EnumSchoolingNullableFilter<"CollectData"> | $Enums.Schooling | null;
    state?: Prisma.EnumStateFilter<"CollectData"> | $Enums.State;
    city?: Prisma.StringFilter<"CollectData"> | string;
    dailyScreenTimeMin?: Prisma.IntFilter<"CollectData"> | number;
    nightUsageMin?: Prisma.IntFilter<"CollectData"> | number;
    devicesCount?: Prisma.IntFilter<"CollectData"> | number;
    dependencyScore?: Prisma.IntFilter<"CollectData"> | number;
    riskLevel?: Prisma.EnumCollectRiskFilter<"CollectData"> | $Enums.CollectRisk;
    questionnaireVersion?: Prisma.StringFilter<"CollectData"> | string;
    rawAnswers?: Prisma.JsonNullableFilter<"CollectData">;
    sleepQualityScore?: Prisma.IntFilter<"CollectData"> | number;
    anxietyScore?: Prisma.IntFilter<"CollectData"> | number;
    depressionScore?: Prisma.IntFilter<"CollectData"> | number;
    isolationScore?: Prisma.IntFilter<"CollectData"> | number;
    physicalActivityPerWeek?: Prisma.IntFilter<"CollectData"> | number;
    hasConsent?: Prisma.BoolFilter<"CollectData"> | boolean;
    consentAt?: Prisma.DateTimeFilter<"CollectData"> | Date | string;
    notes?: Prisma.StringNullableFilter<"CollectData"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CollectData"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CollectData"> | Date | string;
    collect?: Prisma.XOR<Prisma.CollectScalarRelationFilter, Prisma.CollectWhereInput>;
};
export type CollectDataOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    collectId?: Prisma.SortOrder;
    ageRange?: Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    schooling?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    dailyScreenTimeMin?: Prisma.SortOrder;
    nightUsageMin?: Prisma.SortOrder;
    devicesCount?: Prisma.SortOrder;
    dependencyScore?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    questionnaireVersion?: Prisma.SortOrder;
    rawAnswers?: Prisma.SortOrderInput | Prisma.SortOrder;
    sleepQualityScore?: Prisma.SortOrder;
    anxietyScore?: Prisma.SortOrder;
    depressionScore?: Prisma.SortOrder;
    isolationScore?: Prisma.SortOrder;
    physicalActivityPerWeek?: Prisma.SortOrder;
    hasConsent?: Prisma.SortOrder;
    consentAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    collect?: Prisma.CollectOrderByWithRelationInput;
    _relevance?: Prisma.CollectDataOrderByRelevanceInput;
};
export type CollectDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    collectId?: string;
    AND?: Prisma.CollectDataWhereInput | Prisma.CollectDataWhereInput[];
    OR?: Prisma.CollectDataWhereInput[];
    NOT?: Prisma.CollectDataWhereInput | Prisma.CollectDataWhereInput[];
    ageRange?: Prisma.EnumAgeRangeFilter<"CollectData"> | $Enums.AgeRange;
    gender?: Prisma.EnumGenderNullableFilter<"CollectData"> | $Enums.Gender | null;
    schooling?: Prisma.EnumSchoolingNullableFilter<"CollectData"> | $Enums.Schooling | null;
    state?: Prisma.EnumStateFilter<"CollectData"> | $Enums.State;
    city?: Prisma.StringFilter<"CollectData"> | string;
    dailyScreenTimeMin?: Prisma.IntFilter<"CollectData"> | number;
    nightUsageMin?: Prisma.IntFilter<"CollectData"> | number;
    devicesCount?: Prisma.IntFilter<"CollectData"> | number;
    dependencyScore?: Prisma.IntFilter<"CollectData"> | number;
    riskLevel?: Prisma.EnumCollectRiskFilter<"CollectData"> | $Enums.CollectRisk;
    questionnaireVersion?: Prisma.StringFilter<"CollectData"> | string;
    rawAnswers?: Prisma.JsonNullableFilter<"CollectData">;
    sleepQualityScore?: Prisma.IntFilter<"CollectData"> | number;
    anxietyScore?: Prisma.IntFilter<"CollectData"> | number;
    depressionScore?: Prisma.IntFilter<"CollectData"> | number;
    isolationScore?: Prisma.IntFilter<"CollectData"> | number;
    physicalActivityPerWeek?: Prisma.IntFilter<"CollectData"> | number;
    hasConsent?: Prisma.BoolFilter<"CollectData"> | boolean;
    consentAt?: Prisma.DateTimeFilter<"CollectData"> | Date | string;
    notes?: Prisma.StringNullableFilter<"CollectData"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CollectData"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CollectData"> | Date | string;
    collect?: Prisma.XOR<Prisma.CollectScalarRelationFilter, Prisma.CollectWhereInput>;
}, "id" | "collectId">;
export type CollectDataOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    collectId?: Prisma.SortOrder;
    ageRange?: Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    schooling?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    dailyScreenTimeMin?: Prisma.SortOrder;
    nightUsageMin?: Prisma.SortOrder;
    devicesCount?: Prisma.SortOrder;
    dependencyScore?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    questionnaireVersion?: Prisma.SortOrder;
    rawAnswers?: Prisma.SortOrderInput | Prisma.SortOrder;
    sleepQualityScore?: Prisma.SortOrder;
    anxietyScore?: Prisma.SortOrder;
    depressionScore?: Prisma.SortOrder;
    isolationScore?: Prisma.SortOrder;
    physicalActivityPerWeek?: Prisma.SortOrder;
    hasConsent?: Prisma.SortOrder;
    consentAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CollectDataCountOrderByAggregateInput;
    _avg?: Prisma.CollectDataAvgOrderByAggregateInput;
    _max?: Prisma.CollectDataMaxOrderByAggregateInput;
    _min?: Prisma.CollectDataMinOrderByAggregateInput;
    _sum?: Prisma.CollectDataSumOrderByAggregateInput;
};
export type CollectDataScalarWhereWithAggregatesInput = {
    AND?: Prisma.CollectDataScalarWhereWithAggregatesInput | Prisma.CollectDataScalarWhereWithAggregatesInput[];
    OR?: Prisma.CollectDataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CollectDataScalarWhereWithAggregatesInput | Prisma.CollectDataScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CollectData"> | string;
    collectId?: Prisma.StringWithAggregatesFilter<"CollectData"> | string;
    ageRange?: Prisma.EnumAgeRangeWithAggregatesFilter<"CollectData"> | $Enums.AgeRange;
    gender?: Prisma.EnumGenderNullableWithAggregatesFilter<"CollectData"> | $Enums.Gender | null;
    schooling?: Prisma.EnumSchoolingNullableWithAggregatesFilter<"CollectData"> | $Enums.Schooling | null;
    state?: Prisma.EnumStateWithAggregatesFilter<"CollectData"> | $Enums.State;
    city?: Prisma.StringWithAggregatesFilter<"CollectData"> | string;
    dailyScreenTimeMin?: Prisma.IntWithAggregatesFilter<"CollectData"> | number;
    nightUsageMin?: Prisma.IntWithAggregatesFilter<"CollectData"> | number;
    devicesCount?: Prisma.IntWithAggregatesFilter<"CollectData"> | number;
    dependencyScore?: Prisma.IntWithAggregatesFilter<"CollectData"> | number;
    riskLevel?: Prisma.EnumCollectRiskWithAggregatesFilter<"CollectData"> | $Enums.CollectRisk;
    questionnaireVersion?: Prisma.StringWithAggregatesFilter<"CollectData"> | string;
    rawAnswers?: Prisma.JsonNullableWithAggregatesFilter<"CollectData">;
    sleepQualityScore?: Prisma.IntWithAggregatesFilter<"CollectData"> | number;
    anxietyScore?: Prisma.IntWithAggregatesFilter<"CollectData"> | number;
    depressionScore?: Prisma.IntWithAggregatesFilter<"CollectData"> | number;
    isolationScore?: Prisma.IntWithAggregatesFilter<"CollectData"> | number;
    physicalActivityPerWeek?: Prisma.IntWithAggregatesFilter<"CollectData"> | number;
    hasConsent?: Prisma.BoolWithAggregatesFilter<"CollectData"> | boolean;
    consentAt?: Prisma.DateTimeWithAggregatesFilter<"CollectData"> | Date | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"CollectData"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CollectData"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CollectData"> | Date | string;
};
export type CollectDataCreateInput = {
    id?: string;
    ageRange: $Enums.AgeRange;
    gender?: $Enums.Gender | null;
    schooling?: $Enums.Schooling | null;
    state: $Enums.State;
    city: string;
    dailyScreenTimeMin: number;
    nightUsageMin: number;
    devicesCount: number;
    dependencyScore: number;
    riskLevel: $Enums.CollectRisk;
    questionnaireVersion: string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore: number;
    anxietyScore: number;
    depressionScore: number;
    isolationScore: number;
    physicalActivityPerWeek: number;
    hasConsent: boolean;
    consentAt: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    collect: Prisma.CollectCreateNestedOneWithoutCollectDataInput;
};
export type CollectDataUncheckedCreateInput = {
    id?: string;
    collectId: string;
    ageRange: $Enums.AgeRange;
    gender?: $Enums.Gender | null;
    schooling?: $Enums.Schooling | null;
    state: $Enums.State;
    city: string;
    dailyScreenTimeMin: number;
    nightUsageMin: number;
    devicesCount: number;
    dependencyScore: number;
    riskLevel: $Enums.CollectRisk;
    questionnaireVersion: string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore: number;
    anxietyScore: number;
    depressionScore: number;
    isolationScore: number;
    physicalActivityPerWeek: number;
    hasConsent: boolean;
    consentAt: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CollectDataUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ageRange?: Prisma.EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    schooling?: Prisma.NullableEnumSchoolingFieldUpdateOperationsInput | $Enums.Schooling | null;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    dailyScreenTimeMin?: Prisma.IntFieldUpdateOperationsInput | number;
    nightUsageMin?: Prisma.IntFieldUpdateOperationsInput | number;
    devicesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    dependencyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumCollectRiskFieldUpdateOperationsInput | $Enums.CollectRisk;
    questionnaireVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore?: Prisma.IntFieldUpdateOperationsInput | number;
    anxietyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    depressionScore?: Prisma.IntFieldUpdateOperationsInput | number;
    isolationScore?: Prisma.IntFieldUpdateOperationsInput | number;
    physicalActivityPerWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    hasConsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    collect?: Prisma.CollectUpdateOneRequiredWithoutCollectDataNestedInput;
};
export type CollectDataUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectId?: Prisma.StringFieldUpdateOperationsInput | string;
    ageRange?: Prisma.EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    schooling?: Prisma.NullableEnumSchoolingFieldUpdateOperationsInput | $Enums.Schooling | null;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    dailyScreenTimeMin?: Prisma.IntFieldUpdateOperationsInput | number;
    nightUsageMin?: Prisma.IntFieldUpdateOperationsInput | number;
    devicesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    dependencyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumCollectRiskFieldUpdateOperationsInput | $Enums.CollectRisk;
    questionnaireVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore?: Prisma.IntFieldUpdateOperationsInput | number;
    anxietyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    depressionScore?: Prisma.IntFieldUpdateOperationsInput | number;
    isolationScore?: Prisma.IntFieldUpdateOperationsInput | number;
    physicalActivityPerWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    hasConsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CollectDataCreateManyInput = {
    id?: string;
    collectId: string;
    ageRange: $Enums.AgeRange;
    gender?: $Enums.Gender | null;
    schooling?: $Enums.Schooling | null;
    state: $Enums.State;
    city: string;
    dailyScreenTimeMin: number;
    nightUsageMin: number;
    devicesCount: number;
    dependencyScore: number;
    riskLevel: $Enums.CollectRisk;
    questionnaireVersion: string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore: number;
    anxietyScore: number;
    depressionScore: number;
    isolationScore: number;
    physicalActivityPerWeek: number;
    hasConsent: boolean;
    consentAt: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CollectDataUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ageRange?: Prisma.EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    schooling?: Prisma.NullableEnumSchoolingFieldUpdateOperationsInput | $Enums.Schooling | null;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    dailyScreenTimeMin?: Prisma.IntFieldUpdateOperationsInput | number;
    nightUsageMin?: Prisma.IntFieldUpdateOperationsInput | number;
    devicesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    dependencyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumCollectRiskFieldUpdateOperationsInput | $Enums.CollectRisk;
    questionnaireVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore?: Prisma.IntFieldUpdateOperationsInput | number;
    anxietyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    depressionScore?: Prisma.IntFieldUpdateOperationsInput | number;
    isolationScore?: Prisma.IntFieldUpdateOperationsInput | number;
    physicalActivityPerWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    hasConsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CollectDataUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectId?: Prisma.StringFieldUpdateOperationsInput | string;
    ageRange?: Prisma.EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    schooling?: Prisma.NullableEnumSchoolingFieldUpdateOperationsInput | $Enums.Schooling | null;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    dailyScreenTimeMin?: Prisma.IntFieldUpdateOperationsInput | number;
    nightUsageMin?: Prisma.IntFieldUpdateOperationsInput | number;
    devicesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    dependencyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumCollectRiskFieldUpdateOperationsInput | $Enums.CollectRisk;
    questionnaireVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore?: Prisma.IntFieldUpdateOperationsInput | number;
    anxietyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    depressionScore?: Prisma.IntFieldUpdateOperationsInput | number;
    isolationScore?: Prisma.IntFieldUpdateOperationsInput | number;
    physicalActivityPerWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    hasConsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CollectDataNullableScalarRelationFilter = {
    is?: Prisma.CollectDataWhereInput | null;
    isNot?: Prisma.CollectDataWhereInput | null;
};
export type CollectDataOrderByRelevanceInput = {
    fields: Prisma.CollectDataOrderByRelevanceFieldEnum | Prisma.CollectDataOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CollectDataCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    collectId?: Prisma.SortOrder;
    ageRange?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    schooling?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    dailyScreenTimeMin?: Prisma.SortOrder;
    nightUsageMin?: Prisma.SortOrder;
    devicesCount?: Prisma.SortOrder;
    dependencyScore?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    questionnaireVersion?: Prisma.SortOrder;
    rawAnswers?: Prisma.SortOrder;
    sleepQualityScore?: Prisma.SortOrder;
    anxietyScore?: Prisma.SortOrder;
    depressionScore?: Prisma.SortOrder;
    isolationScore?: Prisma.SortOrder;
    physicalActivityPerWeek?: Prisma.SortOrder;
    hasConsent?: Prisma.SortOrder;
    consentAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CollectDataAvgOrderByAggregateInput = {
    dailyScreenTimeMin?: Prisma.SortOrder;
    nightUsageMin?: Prisma.SortOrder;
    devicesCount?: Prisma.SortOrder;
    dependencyScore?: Prisma.SortOrder;
    sleepQualityScore?: Prisma.SortOrder;
    anxietyScore?: Prisma.SortOrder;
    depressionScore?: Prisma.SortOrder;
    isolationScore?: Prisma.SortOrder;
    physicalActivityPerWeek?: Prisma.SortOrder;
};
export type CollectDataMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    collectId?: Prisma.SortOrder;
    ageRange?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    schooling?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    dailyScreenTimeMin?: Prisma.SortOrder;
    nightUsageMin?: Prisma.SortOrder;
    devicesCount?: Prisma.SortOrder;
    dependencyScore?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    questionnaireVersion?: Prisma.SortOrder;
    sleepQualityScore?: Prisma.SortOrder;
    anxietyScore?: Prisma.SortOrder;
    depressionScore?: Prisma.SortOrder;
    isolationScore?: Prisma.SortOrder;
    physicalActivityPerWeek?: Prisma.SortOrder;
    hasConsent?: Prisma.SortOrder;
    consentAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CollectDataMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    collectId?: Prisma.SortOrder;
    ageRange?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    schooling?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    dailyScreenTimeMin?: Prisma.SortOrder;
    nightUsageMin?: Prisma.SortOrder;
    devicesCount?: Prisma.SortOrder;
    dependencyScore?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    questionnaireVersion?: Prisma.SortOrder;
    sleepQualityScore?: Prisma.SortOrder;
    anxietyScore?: Prisma.SortOrder;
    depressionScore?: Prisma.SortOrder;
    isolationScore?: Prisma.SortOrder;
    physicalActivityPerWeek?: Prisma.SortOrder;
    hasConsent?: Prisma.SortOrder;
    consentAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CollectDataSumOrderByAggregateInput = {
    dailyScreenTimeMin?: Prisma.SortOrder;
    nightUsageMin?: Prisma.SortOrder;
    devicesCount?: Prisma.SortOrder;
    dependencyScore?: Prisma.SortOrder;
    sleepQualityScore?: Prisma.SortOrder;
    anxietyScore?: Prisma.SortOrder;
    depressionScore?: Prisma.SortOrder;
    isolationScore?: Prisma.SortOrder;
    physicalActivityPerWeek?: Prisma.SortOrder;
};
export type CollectDataCreateNestedOneWithoutCollectInput = {
    create?: Prisma.XOR<Prisma.CollectDataCreateWithoutCollectInput, Prisma.CollectDataUncheckedCreateWithoutCollectInput>;
    connectOrCreate?: Prisma.CollectDataCreateOrConnectWithoutCollectInput;
    connect?: Prisma.CollectDataWhereUniqueInput;
};
export type CollectDataUncheckedCreateNestedOneWithoutCollectInput = {
    create?: Prisma.XOR<Prisma.CollectDataCreateWithoutCollectInput, Prisma.CollectDataUncheckedCreateWithoutCollectInput>;
    connectOrCreate?: Prisma.CollectDataCreateOrConnectWithoutCollectInput;
    connect?: Prisma.CollectDataWhereUniqueInput;
};
export type CollectDataUpdateOneWithoutCollectNestedInput = {
    create?: Prisma.XOR<Prisma.CollectDataCreateWithoutCollectInput, Prisma.CollectDataUncheckedCreateWithoutCollectInput>;
    connectOrCreate?: Prisma.CollectDataCreateOrConnectWithoutCollectInput;
    upsert?: Prisma.CollectDataUpsertWithoutCollectInput;
    disconnect?: Prisma.CollectDataWhereInput | boolean;
    delete?: Prisma.CollectDataWhereInput | boolean;
    connect?: Prisma.CollectDataWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CollectDataUpdateToOneWithWhereWithoutCollectInput, Prisma.CollectDataUpdateWithoutCollectInput>, Prisma.CollectDataUncheckedUpdateWithoutCollectInput>;
};
export type CollectDataUncheckedUpdateOneWithoutCollectNestedInput = {
    create?: Prisma.XOR<Prisma.CollectDataCreateWithoutCollectInput, Prisma.CollectDataUncheckedCreateWithoutCollectInput>;
    connectOrCreate?: Prisma.CollectDataCreateOrConnectWithoutCollectInput;
    upsert?: Prisma.CollectDataUpsertWithoutCollectInput;
    disconnect?: Prisma.CollectDataWhereInput | boolean;
    delete?: Prisma.CollectDataWhereInput | boolean;
    connect?: Prisma.CollectDataWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CollectDataUpdateToOneWithWhereWithoutCollectInput, Prisma.CollectDataUpdateWithoutCollectInput>, Prisma.CollectDataUncheckedUpdateWithoutCollectInput>;
};
export type EnumAgeRangeFieldUpdateOperationsInput = {
    set?: $Enums.AgeRange;
};
export type EnumCollectRiskFieldUpdateOperationsInput = {
    set?: $Enums.CollectRisk;
};
export type CollectDataCreateWithoutCollectInput = {
    id?: string;
    ageRange: $Enums.AgeRange;
    gender?: $Enums.Gender | null;
    schooling?: $Enums.Schooling | null;
    state: $Enums.State;
    city: string;
    dailyScreenTimeMin: number;
    nightUsageMin: number;
    devicesCount: number;
    dependencyScore: number;
    riskLevel: $Enums.CollectRisk;
    questionnaireVersion: string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore: number;
    anxietyScore: number;
    depressionScore: number;
    isolationScore: number;
    physicalActivityPerWeek: number;
    hasConsent: boolean;
    consentAt: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CollectDataUncheckedCreateWithoutCollectInput = {
    id?: string;
    ageRange: $Enums.AgeRange;
    gender?: $Enums.Gender | null;
    schooling?: $Enums.Schooling | null;
    state: $Enums.State;
    city: string;
    dailyScreenTimeMin: number;
    nightUsageMin: number;
    devicesCount: number;
    dependencyScore: number;
    riskLevel: $Enums.CollectRisk;
    questionnaireVersion: string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore: number;
    anxietyScore: number;
    depressionScore: number;
    isolationScore: number;
    physicalActivityPerWeek: number;
    hasConsent: boolean;
    consentAt: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CollectDataCreateOrConnectWithoutCollectInput = {
    where: Prisma.CollectDataWhereUniqueInput;
    create: Prisma.XOR<Prisma.CollectDataCreateWithoutCollectInput, Prisma.CollectDataUncheckedCreateWithoutCollectInput>;
};
export type CollectDataUpsertWithoutCollectInput = {
    update: Prisma.XOR<Prisma.CollectDataUpdateWithoutCollectInput, Prisma.CollectDataUncheckedUpdateWithoutCollectInput>;
    create: Prisma.XOR<Prisma.CollectDataCreateWithoutCollectInput, Prisma.CollectDataUncheckedCreateWithoutCollectInput>;
    where?: Prisma.CollectDataWhereInput;
};
export type CollectDataUpdateToOneWithWhereWithoutCollectInput = {
    where?: Prisma.CollectDataWhereInput;
    data: Prisma.XOR<Prisma.CollectDataUpdateWithoutCollectInput, Prisma.CollectDataUncheckedUpdateWithoutCollectInput>;
};
export type CollectDataUpdateWithoutCollectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ageRange?: Prisma.EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    schooling?: Prisma.NullableEnumSchoolingFieldUpdateOperationsInput | $Enums.Schooling | null;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    dailyScreenTimeMin?: Prisma.IntFieldUpdateOperationsInput | number;
    nightUsageMin?: Prisma.IntFieldUpdateOperationsInput | number;
    devicesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    dependencyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumCollectRiskFieldUpdateOperationsInput | $Enums.CollectRisk;
    questionnaireVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore?: Prisma.IntFieldUpdateOperationsInput | number;
    anxietyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    depressionScore?: Prisma.IntFieldUpdateOperationsInput | number;
    isolationScore?: Prisma.IntFieldUpdateOperationsInput | number;
    physicalActivityPerWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    hasConsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CollectDataUncheckedUpdateWithoutCollectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ageRange?: Prisma.EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange;
    gender?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    schooling?: Prisma.NullableEnumSchoolingFieldUpdateOperationsInput | $Enums.Schooling | null;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    dailyScreenTimeMin?: Prisma.IntFieldUpdateOperationsInput | number;
    nightUsageMin?: Prisma.IntFieldUpdateOperationsInput | number;
    devicesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    dependencyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumCollectRiskFieldUpdateOperationsInput | $Enums.CollectRisk;
    questionnaireVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawAnswers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sleepQualityScore?: Prisma.IntFieldUpdateOperationsInput | number;
    anxietyScore?: Prisma.IntFieldUpdateOperationsInput | number;
    depressionScore?: Prisma.IntFieldUpdateOperationsInput | number;
    isolationScore?: Prisma.IntFieldUpdateOperationsInput | number;
    physicalActivityPerWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    hasConsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CollectDataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    collectId?: boolean;
    ageRange?: boolean;
    gender?: boolean;
    schooling?: boolean;
    state?: boolean;
    city?: boolean;
    dailyScreenTimeMin?: boolean;
    nightUsageMin?: boolean;
    devicesCount?: boolean;
    dependencyScore?: boolean;
    riskLevel?: boolean;
    questionnaireVersion?: boolean;
    rawAnswers?: boolean;
    sleepQualityScore?: boolean;
    anxietyScore?: boolean;
    depressionScore?: boolean;
    isolationScore?: boolean;
    physicalActivityPerWeek?: boolean;
    hasConsent?: boolean;
    consentAt?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    collect?: boolean | Prisma.CollectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["collectData"]>;
export type CollectDataSelectScalar = {
    id?: boolean;
    collectId?: boolean;
    ageRange?: boolean;
    gender?: boolean;
    schooling?: boolean;
    state?: boolean;
    city?: boolean;
    dailyScreenTimeMin?: boolean;
    nightUsageMin?: boolean;
    devicesCount?: boolean;
    dependencyScore?: boolean;
    riskLevel?: boolean;
    questionnaireVersion?: boolean;
    rawAnswers?: boolean;
    sleepQualityScore?: boolean;
    anxietyScore?: boolean;
    depressionScore?: boolean;
    isolationScore?: boolean;
    physicalActivityPerWeek?: boolean;
    hasConsent?: boolean;
    consentAt?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CollectDataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "collectId" | "ageRange" | "gender" | "schooling" | "state" | "city" | "dailyScreenTimeMin" | "nightUsageMin" | "devicesCount" | "dependencyScore" | "riskLevel" | "questionnaireVersion" | "rawAnswers" | "sleepQualityScore" | "anxietyScore" | "depressionScore" | "isolationScore" | "physicalActivityPerWeek" | "hasConsent" | "consentAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["collectData"]>;
export type CollectDataInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    collect?: boolean | Prisma.CollectDefaultArgs<ExtArgs>;
};
export type $CollectDataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CollectData";
    objects: {
        collect: Prisma.$CollectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        collectId: string;
        ageRange: $Enums.AgeRange;
        gender: $Enums.Gender | null;
        schooling: $Enums.Schooling | null;
        state: $Enums.State;
        city: string;
        dailyScreenTimeMin: number;
        nightUsageMin: number;
        devicesCount: number;
        dependencyScore: number;
        riskLevel: $Enums.CollectRisk;
        questionnaireVersion: string;
        rawAnswers: runtime.JsonValue | null;
        sleepQualityScore: number;
        anxietyScore: number;
        depressionScore: number;
        isolationScore: number;
        physicalActivityPerWeek: number;
        hasConsent: boolean;
        consentAt: Date;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["collectData"]>;
    composites: {};
};
export type CollectDataGetPayload<S extends boolean | null | undefined | CollectDataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CollectDataPayload, S>;
export type CollectDataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CollectDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CollectDataCountAggregateInputType | true;
};
export interface CollectDataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CollectData'];
        meta: {
            name: 'CollectData';
        };
    };
    /**
     * Find zero or one CollectData that matches the filter.
     * @param {CollectDataFindUniqueArgs} args - Arguments to find a CollectData
     * @example
     * // Get one CollectData
     * const collectData = await prisma.collectData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectDataFindUniqueArgs>(args: Prisma.SelectSubset<T, CollectDataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CollectDataClient<runtime.Types.Result.GetResult<Prisma.$CollectDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CollectData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectDataFindUniqueOrThrowArgs} args - Arguments to find a CollectData
     * @example
     * // Get one CollectData
     * const collectData = await prisma.collectData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectDataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CollectDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CollectDataClient<runtime.Types.Result.GetResult<Prisma.$CollectDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CollectData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectDataFindFirstArgs} args - Arguments to find a CollectData
     * @example
     * // Get one CollectData
     * const collectData = await prisma.collectData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectDataFindFirstArgs>(args?: Prisma.SelectSubset<T, CollectDataFindFirstArgs<ExtArgs>>): Prisma.Prisma__CollectDataClient<runtime.Types.Result.GetResult<Prisma.$CollectDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CollectData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectDataFindFirstOrThrowArgs} args - Arguments to find a CollectData
     * @example
     * // Get one CollectData
     * const collectData = await prisma.collectData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectDataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CollectDataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CollectDataClient<runtime.Types.Result.GetResult<Prisma.$CollectDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CollectData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectData
     * const collectData = await prisma.collectData.findMany()
     *
     * // Get first 10 CollectData
     * const collectData = await prisma.collectData.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const collectDataWithIdOnly = await prisma.collectData.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CollectDataFindManyArgs>(args?: Prisma.SelectSubset<T, CollectDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CollectDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CollectData.
     * @param {CollectDataCreateArgs} args - Arguments to create a CollectData.
     * @example
     * // Create one CollectData
     * const CollectData = await prisma.collectData.create({
     *   data: {
     *     // ... data to create a CollectData
     *   }
     * })
     *
     */
    create<T extends CollectDataCreateArgs>(args: Prisma.SelectSubset<T, CollectDataCreateArgs<ExtArgs>>): Prisma.Prisma__CollectDataClient<runtime.Types.Result.GetResult<Prisma.$CollectDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CollectData.
     * @param {CollectDataCreateManyArgs} args - Arguments to create many CollectData.
     * @example
     * // Create many CollectData
     * const collectData = await prisma.collectData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CollectDataCreateManyArgs>(args?: Prisma.SelectSubset<T, CollectDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a CollectData.
     * @param {CollectDataDeleteArgs} args - Arguments to delete one CollectData.
     * @example
     * // Delete one CollectData
     * const CollectData = await prisma.collectData.delete({
     *   where: {
     *     // ... filter to delete one CollectData
     *   }
     * })
     *
     */
    delete<T extends CollectDataDeleteArgs>(args: Prisma.SelectSubset<T, CollectDataDeleteArgs<ExtArgs>>): Prisma.Prisma__CollectDataClient<runtime.Types.Result.GetResult<Prisma.$CollectDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CollectData.
     * @param {CollectDataUpdateArgs} args - Arguments to update one CollectData.
     * @example
     * // Update one CollectData
     * const collectData = await prisma.collectData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CollectDataUpdateArgs>(args: Prisma.SelectSubset<T, CollectDataUpdateArgs<ExtArgs>>): Prisma.Prisma__CollectDataClient<runtime.Types.Result.GetResult<Prisma.$CollectDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CollectData.
     * @param {CollectDataDeleteManyArgs} args - Arguments to filter CollectData to delete.
     * @example
     * // Delete a few CollectData
     * const { count } = await prisma.collectData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CollectDataDeleteManyArgs>(args?: Prisma.SelectSubset<T, CollectDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CollectData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectData
     * const collectData = await prisma.collectData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CollectDataUpdateManyArgs>(args: Prisma.SelectSubset<T, CollectDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one CollectData.
     * @param {CollectDataUpsertArgs} args - Arguments to update or create a CollectData.
     * @example
     * // Update or create a CollectData
     * const collectData = await prisma.collectData.upsert({
     *   create: {
     *     // ... data to create a CollectData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectData we want to update
     *   }
     * })
     */
    upsert<T extends CollectDataUpsertArgs>(args: Prisma.SelectSubset<T, CollectDataUpsertArgs<ExtArgs>>): Prisma.Prisma__CollectDataClient<runtime.Types.Result.GetResult<Prisma.$CollectDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CollectData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectDataCountArgs} args - Arguments to filter CollectData to count.
     * @example
     * // Count the number of CollectData
     * const count = await prisma.collectData.count({
     *   where: {
     *     // ... the filter for the CollectData we want to count
     *   }
     * })
    **/
    count<T extends CollectDataCountArgs>(args?: Prisma.Subset<T, CollectDataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CollectDataCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CollectData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectDataAggregateArgs>(args: Prisma.Subset<T, CollectDataAggregateArgs>): Prisma.PrismaPromise<GetCollectDataAggregateType<T>>;
    /**
     * Group by CollectData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CollectDataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CollectDataGroupByArgs['orderBy'];
    } : {
        orderBy?: CollectDataGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CollectDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CollectData model
     */
    readonly fields: CollectDataFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CollectData.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CollectDataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    collect<T extends Prisma.CollectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CollectDefaultArgs<ExtArgs>>): Prisma.Prisma__CollectClient<runtime.Types.Result.GetResult<Prisma.$CollectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the CollectData model
 */
export interface CollectDataFieldRefs {
    readonly id: Prisma.FieldRef<"CollectData", 'String'>;
    readonly collectId: Prisma.FieldRef<"CollectData", 'String'>;
    readonly ageRange: Prisma.FieldRef<"CollectData", 'AgeRange'>;
    readonly gender: Prisma.FieldRef<"CollectData", 'Gender'>;
    readonly schooling: Prisma.FieldRef<"CollectData", 'Schooling'>;
    readonly state: Prisma.FieldRef<"CollectData", 'State'>;
    readonly city: Prisma.FieldRef<"CollectData", 'String'>;
    readonly dailyScreenTimeMin: Prisma.FieldRef<"CollectData", 'Int'>;
    readonly nightUsageMin: Prisma.FieldRef<"CollectData", 'Int'>;
    readonly devicesCount: Prisma.FieldRef<"CollectData", 'Int'>;
    readonly dependencyScore: Prisma.FieldRef<"CollectData", 'Int'>;
    readonly riskLevel: Prisma.FieldRef<"CollectData", 'CollectRisk'>;
    readonly questionnaireVersion: Prisma.FieldRef<"CollectData", 'String'>;
    readonly rawAnswers: Prisma.FieldRef<"CollectData", 'Json'>;
    readonly sleepQualityScore: Prisma.FieldRef<"CollectData", 'Int'>;
    readonly anxietyScore: Prisma.FieldRef<"CollectData", 'Int'>;
    readonly depressionScore: Prisma.FieldRef<"CollectData", 'Int'>;
    readonly isolationScore: Prisma.FieldRef<"CollectData", 'Int'>;
    readonly physicalActivityPerWeek: Prisma.FieldRef<"CollectData", 'Int'>;
    readonly hasConsent: Prisma.FieldRef<"CollectData", 'Boolean'>;
    readonly consentAt: Prisma.FieldRef<"CollectData", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"CollectData", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CollectData", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CollectData", 'DateTime'>;
}
/**
 * CollectData findUnique
 */
export type CollectDataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectData
     */
    select?: Prisma.CollectDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectData
     */
    omit?: Prisma.CollectDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectDataInclude<ExtArgs> | null;
    /**
     * Filter, which CollectData to fetch.
     */
    where: Prisma.CollectDataWhereUniqueInput;
};
/**
 * CollectData findUniqueOrThrow
 */
export type CollectDataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectData
     */
    select?: Prisma.CollectDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectData
     */
    omit?: Prisma.CollectDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectDataInclude<ExtArgs> | null;
    /**
     * Filter, which CollectData to fetch.
     */
    where: Prisma.CollectDataWhereUniqueInput;
};
/**
 * CollectData findFirst
 */
export type CollectDataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectData
     */
    select?: Prisma.CollectDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectData
     */
    omit?: Prisma.CollectDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectDataInclude<ExtArgs> | null;
    /**
     * Filter, which CollectData to fetch.
     */
    where?: Prisma.CollectDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CollectData to fetch.
     */
    orderBy?: Prisma.CollectDataOrderByWithRelationInput | Prisma.CollectDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CollectData.
     */
    cursor?: Prisma.CollectDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CollectData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CollectData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CollectData.
     */
    distinct?: Prisma.CollectDataScalarFieldEnum | Prisma.CollectDataScalarFieldEnum[];
};
/**
 * CollectData findFirstOrThrow
 */
export type CollectDataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectData
     */
    select?: Prisma.CollectDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectData
     */
    omit?: Prisma.CollectDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectDataInclude<ExtArgs> | null;
    /**
     * Filter, which CollectData to fetch.
     */
    where?: Prisma.CollectDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CollectData to fetch.
     */
    orderBy?: Prisma.CollectDataOrderByWithRelationInput | Prisma.CollectDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CollectData.
     */
    cursor?: Prisma.CollectDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CollectData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CollectData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CollectData.
     */
    distinct?: Prisma.CollectDataScalarFieldEnum | Prisma.CollectDataScalarFieldEnum[];
};
/**
 * CollectData findMany
 */
export type CollectDataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectData
     */
    select?: Prisma.CollectDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectData
     */
    omit?: Prisma.CollectDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectDataInclude<ExtArgs> | null;
    /**
     * Filter, which CollectData to fetch.
     */
    where?: Prisma.CollectDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CollectData to fetch.
     */
    orderBy?: Prisma.CollectDataOrderByWithRelationInput | Prisma.CollectDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CollectData.
     */
    cursor?: Prisma.CollectDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CollectData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CollectData.
     */
    skip?: number;
    distinct?: Prisma.CollectDataScalarFieldEnum | Prisma.CollectDataScalarFieldEnum[];
};
/**
 * CollectData create
 */
export type CollectDataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectData
     */
    select?: Prisma.CollectDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectData
     */
    omit?: Prisma.CollectDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectDataInclude<ExtArgs> | null;
    /**
     * The data needed to create a CollectData.
     */
    data: Prisma.XOR<Prisma.CollectDataCreateInput, Prisma.CollectDataUncheckedCreateInput>;
};
/**
 * CollectData createMany
 */
export type CollectDataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectData.
     */
    data: Prisma.CollectDataCreateManyInput | Prisma.CollectDataCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CollectData update
 */
export type CollectDataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectData
     */
    select?: Prisma.CollectDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectData
     */
    omit?: Prisma.CollectDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectDataInclude<ExtArgs> | null;
    /**
     * The data needed to update a CollectData.
     */
    data: Prisma.XOR<Prisma.CollectDataUpdateInput, Prisma.CollectDataUncheckedUpdateInput>;
    /**
     * Choose, which CollectData to update.
     */
    where: Prisma.CollectDataWhereUniqueInput;
};
/**
 * CollectData updateMany
 */
export type CollectDataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectData.
     */
    data: Prisma.XOR<Prisma.CollectDataUpdateManyMutationInput, Prisma.CollectDataUncheckedUpdateManyInput>;
    /**
     * Filter which CollectData to update
     */
    where?: Prisma.CollectDataWhereInput;
    /**
     * Limit how many CollectData to update.
     */
    limit?: number;
};
/**
 * CollectData upsert
 */
export type CollectDataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectData
     */
    select?: Prisma.CollectDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectData
     */
    omit?: Prisma.CollectDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectDataInclude<ExtArgs> | null;
    /**
     * The filter to search for the CollectData to update in case it exists.
     */
    where: Prisma.CollectDataWhereUniqueInput;
    /**
     * In case the CollectData found by the `where` argument doesn't exist, create a new CollectData with this data.
     */
    create: Prisma.XOR<Prisma.CollectDataCreateInput, Prisma.CollectDataUncheckedCreateInput>;
    /**
     * In case the CollectData was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CollectDataUpdateInput, Prisma.CollectDataUncheckedUpdateInput>;
};
/**
 * CollectData delete
 */
export type CollectDataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectData
     */
    select?: Prisma.CollectDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectData
     */
    omit?: Prisma.CollectDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectDataInclude<ExtArgs> | null;
    /**
     * Filter which CollectData to delete.
     */
    where: Prisma.CollectDataWhereUniqueInput;
};
/**
 * CollectData deleteMany
 */
export type CollectDataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CollectData to delete
     */
    where?: Prisma.CollectDataWhereInput;
    /**
     * Limit how many CollectData to delete.
     */
    limit?: number;
};
/**
 * CollectData without action
 */
export type CollectDataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectData
     */
    select?: Prisma.CollectDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectData
     */
    omit?: Prisma.CollectDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectDataInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CollectData.d.ts.map
import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Collect
 *
 */
export type CollectModel = runtime.Types.Result.DefaultSelection<Prisma.$CollectPayload>;
export type AggregateCollect = {
    _count: CollectCountAggregateOutputType | null;
    _min: CollectMinAggregateOutputType | null;
    _max: CollectMaxAggregateOutputType | null;
};
export type CollectMinAggregateOutputType = {
    id: string | null;
    collectedAt: Date | null;
    channel: $Enums.CollectChannel | null;
    patientHash: string | null;
    institutionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CollectMaxAggregateOutputType = {
    id: string | null;
    collectedAt: Date | null;
    channel: $Enums.CollectChannel | null;
    patientHash: string | null;
    institutionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CollectCountAggregateOutputType = {
    id: number;
    collectedAt: number;
    channel: number;
    patientHash: number;
    institutionId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CollectMinAggregateInputType = {
    id?: true;
    collectedAt?: true;
    channel?: true;
    patientHash?: true;
    institutionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CollectMaxAggregateInputType = {
    id?: true;
    collectedAt?: true;
    channel?: true;
    patientHash?: true;
    institutionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CollectCountAggregateInputType = {
    id?: true;
    collectedAt?: true;
    channel?: true;
    patientHash?: true;
    institutionId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CollectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Collect to aggregate.
     */
    where?: Prisma.CollectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collects to fetch.
     */
    orderBy?: Prisma.CollectOrderByWithRelationInput | Prisma.CollectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CollectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Collects
    **/
    _count?: true | CollectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CollectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CollectMaxAggregateInputType;
};
export type GetCollectAggregateType<T extends CollectAggregateArgs> = {
    [P in keyof T & keyof AggregateCollect]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCollect[P]> : Prisma.GetScalarType<T[P], AggregateCollect[P]>;
};
export type CollectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CollectWhereInput;
    orderBy?: Prisma.CollectOrderByWithAggregationInput | Prisma.CollectOrderByWithAggregationInput[];
    by: Prisma.CollectScalarFieldEnum[] | Prisma.CollectScalarFieldEnum;
    having?: Prisma.CollectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CollectCountAggregateInputType | true;
    _min?: CollectMinAggregateInputType;
    _max?: CollectMaxAggregateInputType;
};
export type CollectGroupByOutputType = {
    id: string;
    collectedAt: Date;
    channel: $Enums.CollectChannel;
    patientHash: string;
    institutionId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CollectCountAggregateOutputType | null;
    _min: CollectMinAggregateOutputType | null;
    _max: CollectMaxAggregateOutputType | null;
};
type GetCollectGroupByPayload<T extends CollectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CollectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CollectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CollectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CollectGroupByOutputType[P]>;
}>>;
export type CollectWhereInput = {
    AND?: Prisma.CollectWhereInput | Prisma.CollectWhereInput[];
    OR?: Prisma.CollectWhereInput[];
    NOT?: Prisma.CollectWhereInput | Prisma.CollectWhereInput[];
    id?: Prisma.StringFilter<"Collect"> | string;
    collectedAt?: Prisma.DateTimeFilter<"Collect"> | Date | string;
    channel?: Prisma.EnumCollectChannelFilter<"Collect"> | $Enums.CollectChannel;
    patientHash?: Prisma.StringFilter<"Collect"> | string;
    institutionId?: Prisma.StringNullableFilter<"Collect"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Collect"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Collect"> | Date | string;
    institution?: Prisma.XOR<Prisma.InstitutionNullableScalarRelationFilter, Prisma.InstitutionWhereInput> | null;
    collectData?: Prisma.XOR<Prisma.CollectDataNullableScalarRelationFilter, Prisma.CollectDataWhereInput> | null;
};
export type CollectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    collectedAt?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    patientHash?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    institution?: Prisma.InstitutionOrderByWithRelationInput;
    collectData?: Prisma.CollectDataOrderByWithRelationInput;
    _relevance?: Prisma.CollectOrderByRelevanceInput;
};
export type CollectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CollectWhereInput | Prisma.CollectWhereInput[];
    OR?: Prisma.CollectWhereInput[];
    NOT?: Prisma.CollectWhereInput | Prisma.CollectWhereInput[];
    collectedAt?: Prisma.DateTimeFilter<"Collect"> | Date | string;
    channel?: Prisma.EnumCollectChannelFilter<"Collect"> | $Enums.CollectChannel;
    patientHash?: Prisma.StringFilter<"Collect"> | string;
    institutionId?: Prisma.StringNullableFilter<"Collect"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Collect"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Collect"> | Date | string;
    institution?: Prisma.XOR<Prisma.InstitutionNullableScalarRelationFilter, Prisma.InstitutionWhereInput> | null;
    collectData?: Prisma.XOR<Prisma.CollectDataNullableScalarRelationFilter, Prisma.CollectDataWhereInput> | null;
}, "id">;
export type CollectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    collectedAt?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    patientHash?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CollectCountOrderByAggregateInput;
    _max?: Prisma.CollectMaxOrderByAggregateInput;
    _min?: Prisma.CollectMinOrderByAggregateInput;
};
export type CollectScalarWhereWithAggregatesInput = {
    AND?: Prisma.CollectScalarWhereWithAggregatesInput | Prisma.CollectScalarWhereWithAggregatesInput[];
    OR?: Prisma.CollectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CollectScalarWhereWithAggregatesInput | Prisma.CollectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Collect"> | string;
    collectedAt?: Prisma.DateTimeWithAggregatesFilter<"Collect"> | Date | string;
    channel?: Prisma.EnumCollectChannelWithAggregatesFilter<"Collect"> | $Enums.CollectChannel;
    patientHash?: Prisma.StringWithAggregatesFilter<"Collect"> | string;
    institutionId?: Prisma.StringNullableWithAggregatesFilter<"Collect"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Collect"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Collect"> | Date | string;
};
export type CollectCreateInput = {
    id?: string;
    collectedAt?: Date | string;
    channel: $Enums.CollectChannel;
    patientHash: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    institution?: Prisma.InstitutionCreateNestedOneWithoutCollectsInput;
    collectData?: Prisma.CollectDataCreateNestedOneWithoutCollectInput;
};
export type CollectUncheckedCreateInput = {
    id?: string;
    collectedAt?: Date | string;
    channel: $Enums.CollectChannel;
    patientHash: string;
    institutionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    collectData?: Prisma.CollectDataUncheckedCreateNestedOneWithoutCollectInput;
};
export type CollectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: Prisma.EnumCollectChannelFieldUpdateOperationsInput | $Enums.CollectChannel;
    patientHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    institution?: Prisma.InstitutionUpdateOneWithoutCollectsNestedInput;
    collectData?: Prisma.CollectDataUpdateOneWithoutCollectNestedInput;
};
export type CollectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: Prisma.EnumCollectChannelFieldUpdateOperationsInput | $Enums.CollectChannel;
    patientHash?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    collectData?: Prisma.CollectDataUncheckedUpdateOneWithoutCollectNestedInput;
};
export type CollectCreateManyInput = {
    id?: string;
    collectedAt?: Date | string;
    channel: $Enums.CollectChannel;
    patientHash: string;
    institutionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CollectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: Prisma.EnumCollectChannelFieldUpdateOperationsInput | $Enums.CollectChannel;
    patientHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CollectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: Prisma.EnumCollectChannelFieldUpdateOperationsInput | $Enums.CollectChannel;
    patientHash?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CollectOrderByRelevanceInput = {
    fields: Prisma.CollectOrderByRelevanceFieldEnum | Prisma.CollectOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CollectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    collectedAt?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    patientHash?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CollectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    collectedAt?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    patientHash?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CollectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    collectedAt?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    patientHash?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CollectListRelationFilter = {
    every?: Prisma.CollectWhereInput;
    some?: Prisma.CollectWhereInput;
    none?: Prisma.CollectWhereInput;
};
export type CollectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CollectScalarRelationFilter = {
    is?: Prisma.CollectWhereInput;
    isNot?: Prisma.CollectWhereInput;
};
export type EnumCollectChannelFieldUpdateOperationsInput = {
    set?: $Enums.CollectChannel;
};
export type CollectCreateNestedManyWithoutInstitutionInput = {
    create?: Prisma.XOR<Prisma.CollectCreateWithoutInstitutionInput, Prisma.CollectUncheckedCreateWithoutInstitutionInput> | Prisma.CollectCreateWithoutInstitutionInput[] | Prisma.CollectUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: Prisma.CollectCreateOrConnectWithoutInstitutionInput | Prisma.CollectCreateOrConnectWithoutInstitutionInput[];
    createMany?: Prisma.CollectCreateManyInstitutionInputEnvelope;
    connect?: Prisma.CollectWhereUniqueInput | Prisma.CollectWhereUniqueInput[];
};
export type CollectUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: Prisma.XOR<Prisma.CollectCreateWithoutInstitutionInput, Prisma.CollectUncheckedCreateWithoutInstitutionInput> | Prisma.CollectCreateWithoutInstitutionInput[] | Prisma.CollectUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: Prisma.CollectCreateOrConnectWithoutInstitutionInput | Prisma.CollectCreateOrConnectWithoutInstitutionInput[];
    createMany?: Prisma.CollectCreateManyInstitutionInputEnvelope;
    connect?: Prisma.CollectWhereUniqueInput | Prisma.CollectWhereUniqueInput[];
};
export type CollectUpdateManyWithoutInstitutionNestedInput = {
    create?: Prisma.XOR<Prisma.CollectCreateWithoutInstitutionInput, Prisma.CollectUncheckedCreateWithoutInstitutionInput> | Prisma.CollectCreateWithoutInstitutionInput[] | Prisma.CollectUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: Prisma.CollectCreateOrConnectWithoutInstitutionInput | Prisma.CollectCreateOrConnectWithoutInstitutionInput[];
    upsert?: Prisma.CollectUpsertWithWhereUniqueWithoutInstitutionInput | Prisma.CollectUpsertWithWhereUniqueWithoutInstitutionInput[];
    createMany?: Prisma.CollectCreateManyInstitutionInputEnvelope;
    set?: Prisma.CollectWhereUniqueInput | Prisma.CollectWhereUniqueInput[];
    disconnect?: Prisma.CollectWhereUniqueInput | Prisma.CollectWhereUniqueInput[];
    delete?: Prisma.CollectWhereUniqueInput | Prisma.CollectWhereUniqueInput[];
    connect?: Prisma.CollectWhereUniqueInput | Prisma.CollectWhereUniqueInput[];
    update?: Prisma.CollectUpdateWithWhereUniqueWithoutInstitutionInput | Prisma.CollectUpdateWithWhereUniqueWithoutInstitutionInput[];
    updateMany?: Prisma.CollectUpdateManyWithWhereWithoutInstitutionInput | Prisma.CollectUpdateManyWithWhereWithoutInstitutionInput[];
    deleteMany?: Prisma.CollectScalarWhereInput | Prisma.CollectScalarWhereInput[];
};
export type CollectUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: Prisma.XOR<Prisma.CollectCreateWithoutInstitutionInput, Prisma.CollectUncheckedCreateWithoutInstitutionInput> | Prisma.CollectCreateWithoutInstitutionInput[] | Prisma.CollectUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: Prisma.CollectCreateOrConnectWithoutInstitutionInput | Prisma.CollectCreateOrConnectWithoutInstitutionInput[];
    upsert?: Prisma.CollectUpsertWithWhereUniqueWithoutInstitutionInput | Prisma.CollectUpsertWithWhereUniqueWithoutInstitutionInput[];
    createMany?: Prisma.CollectCreateManyInstitutionInputEnvelope;
    set?: Prisma.CollectWhereUniqueInput | Prisma.CollectWhereUniqueInput[];
    disconnect?: Prisma.CollectWhereUniqueInput | Prisma.CollectWhereUniqueInput[];
    delete?: Prisma.CollectWhereUniqueInput | Prisma.CollectWhereUniqueInput[];
    connect?: Prisma.CollectWhereUniqueInput | Prisma.CollectWhereUniqueInput[];
    update?: Prisma.CollectUpdateWithWhereUniqueWithoutInstitutionInput | Prisma.CollectUpdateWithWhereUniqueWithoutInstitutionInput[];
    updateMany?: Prisma.CollectUpdateManyWithWhereWithoutInstitutionInput | Prisma.CollectUpdateManyWithWhereWithoutInstitutionInput[];
    deleteMany?: Prisma.CollectScalarWhereInput | Prisma.CollectScalarWhereInput[];
};
export type CollectCreateNestedOneWithoutCollectDataInput = {
    create?: Prisma.XOR<Prisma.CollectCreateWithoutCollectDataInput, Prisma.CollectUncheckedCreateWithoutCollectDataInput>;
    connectOrCreate?: Prisma.CollectCreateOrConnectWithoutCollectDataInput;
    connect?: Prisma.CollectWhereUniqueInput;
};
export type CollectUpdateOneRequiredWithoutCollectDataNestedInput = {
    create?: Prisma.XOR<Prisma.CollectCreateWithoutCollectDataInput, Prisma.CollectUncheckedCreateWithoutCollectDataInput>;
    connectOrCreate?: Prisma.CollectCreateOrConnectWithoutCollectDataInput;
    upsert?: Prisma.CollectUpsertWithoutCollectDataInput;
    connect?: Prisma.CollectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CollectUpdateToOneWithWhereWithoutCollectDataInput, Prisma.CollectUpdateWithoutCollectDataInput>, Prisma.CollectUncheckedUpdateWithoutCollectDataInput>;
};
export type CollectCreateWithoutInstitutionInput = {
    id?: string;
    collectedAt?: Date | string;
    channel: $Enums.CollectChannel;
    patientHash: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    collectData?: Prisma.CollectDataCreateNestedOneWithoutCollectInput;
};
export type CollectUncheckedCreateWithoutInstitutionInput = {
    id?: string;
    collectedAt?: Date | string;
    channel: $Enums.CollectChannel;
    patientHash: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    collectData?: Prisma.CollectDataUncheckedCreateNestedOneWithoutCollectInput;
};
export type CollectCreateOrConnectWithoutInstitutionInput = {
    where: Prisma.CollectWhereUniqueInput;
    create: Prisma.XOR<Prisma.CollectCreateWithoutInstitutionInput, Prisma.CollectUncheckedCreateWithoutInstitutionInput>;
};
export type CollectCreateManyInstitutionInputEnvelope = {
    data: Prisma.CollectCreateManyInstitutionInput | Prisma.CollectCreateManyInstitutionInput[];
    skipDuplicates?: boolean;
};
export type CollectUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: Prisma.CollectWhereUniqueInput;
    update: Prisma.XOR<Prisma.CollectUpdateWithoutInstitutionInput, Prisma.CollectUncheckedUpdateWithoutInstitutionInput>;
    create: Prisma.XOR<Prisma.CollectCreateWithoutInstitutionInput, Prisma.CollectUncheckedCreateWithoutInstitutionInput>;
};
export type CollectUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: Prisma.CollectWhereUniqueInput;
    data: Prisma.XOR<Prisma.CollectUpdateWithoutInstitutionInput, Prisma.CollectUncheckedUpdateWithoutInstitutionInput>;
};
export type CollectUpdateManyWithWhereWithoutInstitutionInput = {
    where: Prisma.CollectScalarWhereInput;
    data: Prisma.XOR<Prisma.CollectUpdateManyMutationInput, Prisma.CollectUncheckedUpdateManyWithoutInstitutionInput>;
};
export type CollectScalarWhereInput = {
    AND?: Prisma.CollectScalarWhereInput | Prisma.CollectScalarWhereInput[];
    OR?: Prisma.CollectScalarWhereInput[];
    NOT?: Prisma.CollectScalarWhereInput | Prisma.CollectScalarWhereInput[];
    id?: Prisma.StringFilter<"Collect"> | string;
    collectedAt?: Prisma.DateTimeFilter<"Collect"> | Date | string;
    channel?: Prisma.EnumCollectChannelFilter<"Collect"> | $Enums.CollectChannel;
    patientHash?: Prisma.StringFilter<"Collect"> | string;
    institutionId?: Prisma.StringNullableFilter<"Collect"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Collect"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Collect"> | Date | string;
};
export type CollectCreateWithoutCollectDataInput = {
    id?: string;
    collectedAt?: Date | string;
    channel: $Enums.CollectChannel;
    patientHash: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    institution?: Prisma.InstitutionCreateNestedOneWithoutCollectsInput;
};
export type CollectUncheckedCreateWithoutCollectDataInput = {
    id?: string;
    collectedAt?: Date | string;
    channel: $Enums.CollectChannel;
    patientHash: string;
    institutionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CollectCreateOrConnectWithoutCollectDataInput = {
    where: Prisma.CollectWhereUniqueInput;
    create: Prisma.XOR<Prisma.CollectCreateWithoutCollectDataInput, Prisma.CollectUncheckedCreateWithoutCollectDataInput>;
};
export type CollectUpsertWithoutCollectDataInput = {
    update: Prisma.XOR<Prisma.CollectUpdateWithoutCollectDataInput, Prisma.CollectUncheckedUpdateWithoutCollectDataInput>;
    create: Prisma.XOR<Prisma.CollectCreateWithoutCollectDataInput, Prisma.CollectUncheckedCreateWithoutCollectDataInput>;
    where?: Prisma.CollectWhereInput;
};
export type CollectUpdateToOneWithWhereWithoutCollectDataInput = {
    where?: Prisma.CollectWhereInput;
    data: Prisma.XOR<Prisma.CollectUpdateWithoutCollectDataInput, Prisma.CollectUncheckedUpdateWithoutCollectDataInput>;
};
export type CollectUpdateWithoutCollectDataInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: Prisma.EnumCollectChannelFieldUpdateOperationsInput | $Enums.CollectChannel;
    patientHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    institution?: Prisma.InstitutionUpdateOneWithoutCollectsNestedInput;
};
export type CollectUncheckedUpdateWithoutCollectDataInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: Prisma.EnumCollectChannelFieldUpdateOperationsInput | $Enums.CollectChannel;
    patientHash?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CollectCreateManyInstitutionInput = {
    id?: string;
    collectedAt?: Date | string;
    channel: $Enums.CollectChannel;
    patientHash: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CollectUpdateWithoutInstitutionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: Prisma.EnumCollectChannelFieldUpdateOperationsInput | $Enums.CollectChannel;
    patientHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    collectData?: Prisma.CollectDataUpdateOneWithoutCollectNestedInput;
};
export type CollectUncheckedUpdateWithoutInstitutionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: Prisma.EnumCollectChannelFieldUpdateOperationsInput | $Enums.CollectChannel;
    patientHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    collectData?: Prisma.CollectDataUncheckedUpdateOneWithoutCollectNestedInput;
};
export type CollectUncheckedUpdateManyWithoutInstitutionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: Prisma.EnumCollectChannelFieldUpdateOperationsInput | $Enums.CollectChannel;
    patientHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CollectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    collectedAt?: boolean;
    channel?: boolean;
    patientHash?: boolean;
    institutionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    institution?: boolean | Prisma.Collect$institutionArgs<ExtArgs>;
    collectData?: boolean | Prisma.Collect$collectDataArgs<ExtArgs>;
}, ExtArgs["result"]["collect"]>;
export type CollectSelectScalar = {
    id?: boolean;
    collectedAt?: boolean;
    channel?: boolean;
    patientHash?: boolean;
    institutionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CollectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "collectedAt" | "channel" | "patientHash" | "institutionId" | "createdAt" | "updatedAt", ExtArgs["result"]["collect"]>;
export type CollectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    institution?: boolean | Prisma.Collect$institutionArgs<ExtArgs>;
    collectData?: boolean | Prisma.Collect$collectDataArgs<ExtArgs>;
};
export type $CollectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Collect";
    objects: {
        institution: Prisma.$InstitutionPayload<ExtArgs> | null;
        collectData: Prisma.$CollectDataPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        collectedAt: Date;
        channel: $Enums.CollectChannel;
        patientHash: string;
        institutionId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["collect"]>;
    composites: {};
};
export type CollectGetPayload<S extends boolean | null | undefined | CollectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CollectPayload, S>;
export type CollectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CollectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CollectCountAggregateInputType | true;
};
export interface CollectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Collect'];
        meta: {
            name: 'Collect';
        };
    };
    /**
     * Find zero or one Collect that matches the filter.
     * @param {CollectFindUniqueArgs} args - Arguments to find a Collect
     * @example
     * // Get one Collect
     * const collect = await prisma.collect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectFindUniqueArgs>(args: Prisma.SelectSubset<T, CollectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CollectClient<runtime.Types.Result.GetResult<Prisma.$CollectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Collect that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectFindUniqueOrThrowArgs} args - Arguments to find a Collect
     * @example
     * // Get one Collect
     * const collect = await prisma.collect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CollectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CollectClient<runtime.Types.Result.GetResult<Prisma.$CollectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Collect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectFindFirstArgs} args - Arguments to find a Collect
     * @example
     * // Get one Collect
     * const collect = await prisma.collect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectFindFirstArgs>(args?: Prisma.SelectSubset<T, CollectFindFirstArgs<ExtArgs>>): Prisma.Prisma__CollectClient<runtime.Types.Result.GetResult<Prisma.$CollectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Collect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectFindFirstOrThrowArgs} args - Arguments to find a Collect
     * @example
     * // Get one Collect
     * const collect = await prisma.collect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CollectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CollectClient<runtime.Types.Result.GetResult<Prisma.$CollectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Collects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collects
     * const collects = await prisma.collect.findMany()
     *
     * // Get first 10 Collects
     * const collects = await prisma.collect.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const collectWithIdOnly = await prisma.collect.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CollectFindManyArgs>(args?: Prisma.SelectSubset<T, CollectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CollectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Collect.
     * @param {CollectCreateArgs} args - Arguments to create a Collect.
     * @example
     * // Create one Collect
     * const Collect = await prisma.collect.create({
     *   data: {
     *     // ... data to create a Collect
     *   }
     * })
     *
     */
    create<T extends CollectCreateArgs>(args: Prisma.SelectSubset<T, CollectCreateArgs<ExtArgs>>): Prisma.Prisma__CollectClient<runtime.Types.Result.GetResult<Prisma.$CollectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Collects.
     * @param {CollectCreateManyArgs} args - Arguments to create many Collects.
     * @example
     * // Create many Collects
     * const collect = await prisma.collect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CollectCreateManyArgs>(args?: Prisma.SelectSubset<T, CollectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Collect.
     * @param {CollectDeleteArgs} args - Arguments to delete one Collect.
     * @example
     * // Delete one Collect
     * const Collect = await prisma.collect.delete({
     *   where: {
     *     // ... filter to delete one Collect
     *   }
     * })
     *
     */
    delete<T extends CollectDeleteArgs>(args: Prisma.SelectSubset<T, CollectDeleteArgs<ExtArgs>>): Prisma.Prisma__CollectClient<runtime.Types.Result.GetResult<Prisma.$CollectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Collect.
     * @param {CollectUpdateArgs} args - Arguments to update one Collect.
     * @example
     * // Update one Collect
     * const collect = await prisma.collect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CollectUpdateArgs>(args: Prisma.SelectSubset<T, CollectUpdateArgs<ExtArgs>>): Prisma.Prisma__CollectClient<runtime.Types.Result.GetResult<Prisma.$CollectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Collects.
     * @param {CollectDeleteManyArgs} args - Arguments to filter Collects to delete.
     * @example
     * // Delete a few Collects
     * const { count } = await prisma.collect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CollectDeleteManyArgs>(args?: Prisma.SelectSubset<T, CollectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Collects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collects
     * const collect = await prisma.collect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CollectUpdateManyArgs>(args: Prisma.SelectSubset<T, CollectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Collect.
     * @param {CollectUpsertArgs} args - Arguments to update or create a Collect.
     * @example
     * // Update or create a Collect
     * const collect = await prisma.collect.upsert({
     *   create: {
     *     // ... data to create a Collect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collect we want to update
     *   }
     * })
     */
    upsert<T extends CollectUpsertArgs>(args: Prisma.SelectSubset<T, CollectUpsertArgs<ExtArgs>>): Prisma.Prisma__CollectClient<runtime.Types.Result.GetResult<Prisma.$CollectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Collects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectCountArgs} args - Arguments to filter Collects to count.
     * @example
     * // Count the number of Collects
     * const count = await prisma.collect.count({
     *   where: {
     *     // ... the filter for the Collects we want to count
     *   }
     * })
    **/
    count<T extends CollectCountArgs>(args?: Prisma.Subset<T, CollectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CollectCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Collect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectAggregateArgs>(args: Prisma.Subset<T, CollectAggregateArgs>): Prisma.PrismaPromise<GetCollectAggregateType<T>>;
    /**
     * Group by Collect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CollectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CollectGroupByArgs['orderBy'];
    } : {
        orderBy?: CollectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CollectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Collect model
     */
    readonly fields: CollectFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Collect.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CollectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    institution<T extends Prisma.Collect$institutionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Collect$institutionArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    collectData<T extends Prisma.Collect$collectDataArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Collect$collectDataArgs<ExtArgs>>): Prisma.Prisma__CollectDataClient<runtime.Types.Result.GetResult<Prisma.$CollectDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Collect model
 */
export interface CollectFieldRefs {
    readonly id: Prisma.FieldRef<"Collect", 'String'>;
    readonly collectedAt: Prisma.FieldRef<"Collect", 'DateTime'>;
    readonly channel: Prisma.FieldRef<"Collect", 'CollectChannel'>;
    readonly patientHash: Prisma.FieldRef<"Collect", 'String'>;
    readonly institutionId: Prisma.FieldRef<"Collect", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Collect", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Collect", 'DateTime'>;
}
/**
 * Collect findUnique
 */
export type CollectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collect
     */
    select?: Prisma.CollectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collect
     */
    omit?: Prisma.CollectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectInclude<ExtArgs> | null;
    /**
     * Filter, which Collect to fetch.
     */
    where: Prisma.CollectWhereUniqueInput;
};
/**
 * Collect findUniqueOrThrow
 */
export type CollectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collect
     */
    select?: Prisma.CollectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collect
     */
    omit?: Prisma.CollectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectInclude<ExtArgs> | null;
    /**
     * Filter, which Collect to fetch.
     */
    where: Prisma.CollectWhereUniqueInput;
};
/**
 * Collect findFirst
 */
export type CollectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collect
     */
    select?: Prisma.CollectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collect
     */
    omit?: Prisma.CollectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectInclude<ExtArgs> | null;
    /**
     * Filter, which Collect to fetch.
     */
    where?: Prisma.CollectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collects to fetch.
     */
    orderBy?: Prisma.CollectOrderByWithRelationInput | Prisma.CollectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Collects.
     */
    cursor?: Prisma.CollectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Collects.
     */
    distinct?: Prisma.CollectScalarFieldEnum | Prisma.CollectScalarFieldEnum[];
};
/**
 * Collect findFirstOrThrow
 */
export type CollectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collect
     */
    select?: Prisma.CollectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collect
     */
    omit?: Prisma.CollectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectInclude<ExtArgs> | null;
    /**
     * Filter, which Collect to fetch.
     */
    where?: Prisma.CollectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collects to fetch.
     */
    orderBy?: Prisma.CollectOrderByWithRelationInput | Prisma.CollectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Collects.
     */
    cursor?: Prisma.CollectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Collects.
     */
    distinct?: Prisma.CollectScalarFieldEnum | Prisma.CollectScalarFieldEnum[];
};
/**
 * Collect findMany
 */
export type CollectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collect
     */
    select?: Prisma.CollectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collect
     */
    omit?: Prisma.CollectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectInclude<ExtArgs> | null;
    /**
     * Filter, which Collects to fetch.
     */
    where?: Prisma.CollectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collects to fetch.
     */
    orderBy?: Prisma.CollectOrderByWithRelationInput | Prisma.CollectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Collects.
     */
    cursor?: Prisma.CollectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collects.
     */
    skip?: number;
    distinct?: Prisma.CollectScalarFieldEnum | Prisma.CollectScalarFieldEnum[];
};
/**
 * Collect create
 */
export type CollectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collect
     */
    select?: Prisma.CollectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collect
     */
    omit?: Prisma.CollectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectInclude<ExtArgs> | null;
    /**
     * The data needed to create a Collect.
     */
    data: Prisma.XOR<Prisma.CollectCreateInput, Prisma.CollectUncheckedCreateInput>;
};
/**
 * Collect createMany
 */
export type CollectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collects.
     */
    data: Prisma.CollectCreateManyInput | Prisma.CollectCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Collect update
 */
export type CollectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collect
     */
    select?: Prisma.CollectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collect
     */
    omit?: Prisma.CollectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectInclude<ExtArgs> | null;
    /**
     * The data needed to update a Collect.
     */
    data: Prisma.XOR<Prisma.CollectUpdateInput, Prisma.CollectUncheckedUpdateInput>;
    /**
     * Choose, which Collect to update.
     */
    where: Prisma.CollectWhereUniqueInput;
};
/**
 * Collect updateMany
 */
export type CollectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Collects.
     */
    data: Prisma.XOR<Prisma.CollectUpdateManyMutationInput, Prisma.CollectUncheckedUpdateManyInput>;
    /**
     * Filter which Collects to update
     */
    where?: Prisma.CollectWhereInput;
    /**
     * Limit how many Collects to update.
     */
    limit?: number;
};
/**
 * Collect upsert
 */
export type CollectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collect
     */
    select?: Prisma.CollectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collect
     */
    omit?: Prisma.CollectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectInclude<ExtArgs> | null;
    /**
     * The filter to search for the Collect to update in case it exists.
     */
    where: Prisma.CollectWhereUniqueInput;
    /**
     * In case the Collect found by the `where` argument doesn't exist, create a new Collect with this data.
     */
    create: Prisma.XOR<Prisma.CollectCreateInput, Prisma.CollectUncheckedCreateInput>;
    /**
     * In case the Collect was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CollectUpdateInput, Prisma.CollectUncheckedUpdateInput>;
};
/**
 * Collect delete
 */
export type CollectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collect
     */
    select?: Prisma.CollectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collect
     */
    omit?: Prisma.CollectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectInclude<ExtArgs> | null;
    /**
     * Filter which Collect to delete.
     */
    where: Prisma.CollectWhereUniqueInput;
};
/**
 * Collect deleteMany
 */
export type CollectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Collects to delete
     */
    where?: Prisma.CollectWhereInput;
    /**
     * Limit how many Collects to delete.
     */
    limit?: number;
};
/**
 * Collect.institution
 */
export type Collect$institutionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Institution
     */
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
    where?: Prisma.InstitutionWhereInput;
};
/**
 * Collect.collectData
 */
export type Collect$collectDataArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.CollectDataWhereInput;
};
/**
 * Collect without action
 */
export type CollectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collect
     */
    select?: Prisma.CollectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collect
     */
    omit?: Prisma.CollectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Collect.d.ts.map
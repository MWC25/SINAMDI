import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AddressInstitution
 *
 */
export type AddressInstitutionModel = runtime.Types.Result.DefaultSelection<Prisma.$AddressInstitutionPayload>;
export type AggregateAddressInstitution = {
    _count: AddressInstitutionCountAggregateOutputType | null;
    _min: AddressInstitutionMinAggregateOutputType | null;
    _max: AddressInstitutionMaxAggregateOutputType | null;
};
export type AddressInstitutionMinAggregateOutputType = {
    id: string | null;
    street: string | null;
    number: string | null;
    complement: string | null;
    neighborhood: string | null;
    city: string | null;
    state: $Enums.State | null;
    zipCode: string | null;
    institutionId: string | null;
};
export type AddressInstitutionMaxAggregateOutputType = {
    id: string | null;
    street: string | null;
    number: string | null;
    complement: string | null;
    neighborhood: string | null;
    city: string | null;
    state: $Enums.State | null;
    zipCode: string | null;
    institutionId: string | null;
};
export type AddressInstitutionCountAggregateOutputType = {
    id: number;
    street: number;
    number: number;
    complement: number;
    neighborhood: number;
    city: number;
    state: number;
    zipCode: number;
    institutionId: number;
    _all: number;
};
export type AddressInstitutionMinAggregateInputType = {
    id?: true;
    street?: true;
    number?: true;
    complement?: true;
    neighborhood?: true;
    city?: true;
    state?: true;
    zipCode?: true;
    institutionId?: true;
};
export type AddressInstitutionMaxAggregateInputType = {
    id?: true;
    street?: true;
    number?: true;
    complement?: true;
    neighborhood?: true;
    city?: true;
    state?: true;
    zipCode?: true;
    institutionId?: true;
};
export type AddressInstitutionCountAggregateInputType = {
    id?: true;
    street?: true;
    number?: true;
    complement?: true;
    neighborhood?: true;
    city?: true;
    state?: true;
    zipCode?: true;
    institutionId?: true;
    _all?: true;
};
export type AddressInstitutionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AddressInstitution to aggregate.
     */
    where?: Prisma.AddressInstitutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressInstitutions to fetch.
     */
    orderBy?: Prisma.AddressInstitutionOrderByWithRelationInput | Prisma.AddressInstitutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AddressInstitutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressInstitutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressInstitutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AddressInstitutions
    **/
    _count?: true | AddressInstitutionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AddressInstitutionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AddressInstitutionMaxAggregateInputType;
};
export type GetAddressInstitutionAggregateType<T extends AddressInstitutionAggregateArgs> = {
    [P in keyof T & keyof AggregateAddressInstitution]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAddressInstitution[P]> : Prisma.GetScalarType<T[P], AggregateAddressInstitution[P]>;
};
export type AddressInstitutionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddressInstitutionWhereInput;
    orderBy?: Prisma.AddressInstitutionOrderByWithAggregationInput | Prisma.AddressInstitutionOrderByWithAggregationInput[];
    by: Prisma.AddressInstitutionScalarFieldEnum[] | Prisma.AddressInstitutionScalarFieldEnum;
    having?: Prisma.AddressInstitutionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddressInstitutionCountAggregateInputType | true;
    _min?: AddressInstitutionMinAggregateInputType;
    _max?: AddressInstitutionMaxAggregateInputType;
};
export type AddressInstitutionGroupByOutputType = {
    id: string;
    street: string;
    number: string;
    complement: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
    institutionId: string | null;
    _count: AddressInstitutionCountAggregateOutputType | null;
    _min: AddressInstitutionMinAggregateOutputType | null;
    _max: AddressInstitutionMaxAggregateOutputType | null;
};
type GetAddressInstitutionGroupByPayload<T extends AddressInstitutionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AddressInstitutionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AddressInstitutionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AddressInstitutionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AddressInstitutionGroupByOutputType[P]>;
}>>;
export type AddressInstitutionWhereInput = {
    AND?: Prisma.AddressInstitutionWhereInput | Prisma.AddressInstitutionWhereInput[];
    OR?: Prisma.AddressInstitutionWhereInput[];
    NOT?: Prisma.AddressInstitutionWhereInput | Prisma.AddressInstitutionWhereInput[];
    id?: Prisma.StringFilter<"AddressInstitution"> | string;
    street?: Prisma.StringFilter<"AddressInstitution"> | string;
    number?: Prisma.StringFilter<"AddressInstitution"> | string;
    complement?: Prisma.StringNullableFilter<"AddressInstitution"> | string | null;
    neighborhood?: Prisma.StringFilter<"AddressInstitution"> | string;
    city?: Prisma.StringFilter<"AddressInstitution"> | string;
    state?: Prisma.EnumStateFilter<"AddressInstitution"> | $Enums.State;
    zipCode?: Prisma.StringFilter<"AddressInstitution"> | string;
    institutionId?: Prisma.StringNullableFilter<"AddressInstitution"> | string | null;
    institution?: Prisma.XOR<Prisma.InstitutionNullableScalarRelationFilter, Prisma.InstitutionWhereInput> | null;
};
export type AddressInstitutionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    complement?: Prisma.SortOrderInput | Prisma.SortOrder;
    neighborhood?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    institution?: Prisma.InstitutionOrderByWithRelationInput;
    _relevance?: Prisma.AddressInstitutionOrderByRelevanceInput;
};
export type AddressInstitutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    institutionId?: string;
    AND?: Prisma.AddressInstitutionWhereInput | Prisma.AddressInstitutionWhereInput[];
    OR?: Prisma.AddressInstitutionWhereInput[];
    NOT?: Prisma.AddressInstitutionWhereInput | Prisma.AddressInstitutionWhereInput[];
    street?: Prisma.StringFilter<"AddressInstitution"> | string;
    number?: Prisma.StringFilter<"AddressInstitution"> | string;
    complement?: Prisma.StringNullableFilter<"AddressInstitution"> | string | null;
    neighborhood?: Prisma.StringFilter<"AddressInstitution"> | string;
    city?: Prisma.StringFilter<"AddressInstitution"> | string;
    state?: Prisma.EnumStateFilter<"AddressInstitution"> | $Enums.State;
    zipCode?: Prisma.StringFilter<"AddressInstitution"> | string;
    institution?: Prisma.XOR<Prisma.InstitutionNullableScalarRelationFilter, Prisma.InstitutionWhereInput> | null;
}, "id" | "institutionId">;
export type AddressInstitutionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    complement?: Prisma.SortOrderInput | Prisma.SortOrder;
    neighborhood?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AddressInstitutionCountOrderByAggregateInput;
    _max?: Prisma.AddressInstitutionMaxOrderByAggregateInput;
    _min?: Prisma.AddressInstitutionMinOrderByAggregateInput;
};
export type AddressInstitutionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AddressInstitutionScalarWhereWithAggregatesInput | Prisma.AddressInstitutionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AddressInstitutionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AddressInstitutionScalarWhereWithAggregatesInput | Prisma.AddressInstitutionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AddressInstitution"> | string;
    street?: Prisma.StringWithAggregatesFilter<"AddressInstitution"> | string;
    number?: Prisma.StringWithAggregatesFilter<"AddressInstitution"> | string;
    complement?: Prisma.StringNullableWithAggregatesFilter<"AddressInstitution"> | string | null;
    neighborhood?: Prisma.StringWithAggregatesFilter<"AddressInstitution"> | string;
    city?: Prisma.StringWithAggregatesFilter<"AddressInstitution"> | string;
    state?: Prisma.EnumStateWithAggregatesFilter<"AddressInstitution"> | $Enums.State;
    zipCode?: Prisma.StringWithAggregatesFilter<"AddressInstitution"> | string;
    institutionId?: Prisma.StringNullableWithAggregatesFilter<"AddressInstitution"> | string | null;
};
export type AddressInstitutionCreateInput = {
    id?: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
    institution?: Prisma.InstitutionCreateNestedOneWithoutAddressInput;
};
export type AddressInstitutionUncheckedCreateInput = {
    id?: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
    institutionId?: string | null;
};
export type AddressInstitutionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.InstitutionUpdateOneWithoutAddressNestedInput;
};
export type AddressInstitutionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AddressInstitutionCreateManyInput = {
    id?: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
    institutionId?: string | null;
};
export type AddressInstitutionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AddressInstitutionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AddressInstitutionNullableScalarRelationFilter = {
    is?: Prisma.AddressInstitutionWhereInput | null;
    isNot?: Prisma.AddressInstitutionWhereInput | null;
};
export type AddressInstitutionOrderByRelevanceInput = {
    fields: Prisma.AddressInstitutionOrderByRelevanceFieldEnum | Prisma.AddressInstitutionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AddressInstitutionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    complement?: Prisma.SortOrder;
    neighborhood?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
};
export type AddressInstitutionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    complement?: Prisma.SortOrder;
    neighborhood?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
};
export type AddressInstitutionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    complement?: Prisma.SortOrder;
    neighborhood?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
};
export type AddressInstitutionCreateNestedOneWithoutInstitutionInput = {
    create?: Prisma.XOR<Prisma.AddressInstitutionCreateWithoutInstitutionInput, Prisma.AddressInstitutionUncheckedCreateWithoutInstitutionInput>;
    connectOrCreate?: Prisma.AddressInstitutionCreateOrConnectWithoutInstitutionInput;
    connect?: Prisma.AddressInstitutionWhereUniqueInput;
};
export type AddressInstitutionUncheckedCreateNestedOneWithoutInstitutionInput = {
    create?: Prisma.XOR<Prisma.AddressInstitutionCreateWithoutInstitutionInput, Prisma.AddressInstitutionUncheckedCreateWithoutInstitutionInput>;
    connectOrCreate?: Prisma.AddressInstitutionCreateOrConnectWithoutInstitutionInput;
    connect?: Prisma.AddressInstitutionWhereUniqueInput;
};
export type AddressInstitutionUpdateOneWithoutInstitutionNestedInput = {
    create?: Prisma.XOR<Prisma.AddressInstitutionCreateWithoutInstitutionInput, Prisma.AddressInstitutionUncheckedCreateWithoutInstitutionInput>;
    connectOrCreate?: Prisma.AddressInstitutionCreateOrConnectWithoutInstitutionInput;
    upsert?: Prisma.AddressInstitutionUpsertWithoutInstitutionInput;
    disconnect?: Prisma.AddressInstitutionWhereInput | boolean;
    delete?: Prisma.AddressInstitutionWhereInput | boolean;
    connect?: Prisma.AddressInstitutionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AddressInstitutionUpdateToOneWithWhereWithoutInstitutionInput, Prisma.AddressInstitutionUpdateWithoutInstitutionInput>, Prisma.AddressInstitutionUncheckedUpdateWithoutInstitutionInput>;
};
export type AddressInstitutionUncheckedUpdateOneWithoutInstitutionNestedInput = {
    create?: Prisma.XOR<Prisma.AddressInstitutionCreateWithoutInstitutionInput, Prisma.AddressInstitutionUncheckedCreateWithoutInstitutionInput>;
    connectOrCreate?: Prisma.AddressInstitutionCreateOrConnectWithoutInstitutionInput;
    upsert?: Prisma.AddressInstitutionUpsertWithoutInstitutionInput;
    disconnect?: Prisma.AddressInstitutionWhereInput | boolean;
    delete?: Prisma.AddressInstitutionWhereInput | boolean;
    connect?: Prisma.AddressInstitutionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AddressInstitutionUpdateToOneWithWhereWithoutInstitutionInput, Prisma.AddressInstitutionUpdateWithoutInstitutionInput>, Prisma.AddressInstitutionUncheckedUpdateWithoutInstitutionInput>;
};
export type EnumStateFieldUpdateOperationsInput = {
    set?: $Enums.State;
};
export type AddressInstitutionCreateWithoutInstitutionInput = {
    id?: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
};
export type AddressInstitutionUncheckedCreateWithoutInstitutionInput = {
    id?: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
};
export type AddressInstitutionCreateOrConnectWithoutInstitutionInput = {
    where: Prisma.AddressInstitutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AddressInstitutionCreateWithoutInstitutionInput, Prisma.AddressInstitutionUncheckedCreateWithoutInstitutionInput>;
};
export type AddressInstitutionUpsertWithoutInstitutionInput = {
    update: Prisma.XOR<Prisma.AddressInstitutionUpdateWithoutInstitutionInput, Prisma.AddressInstitutionUncheckedUpdateWithoutInstitutionInput>;
    create: Prisma.XOR<Prisma.AddressInstitutionCreateWithoutInstitutionInput, Prisma.AddressInstitutionUncheckedCreateWithoutInstitutionInput>;
    where?: Prisma.AddressInstitutionWhereInput;
};
export type AddressInstitutionUpdateToOneWithWhereWithoutInstitutionInput = {
    where?: Prisma.AddressInstitutionWhereInput;
    data: Prisma.XOR<Prisma.AddressInstitutionUpdateWithoutInstitutionInput, Prisma.AddressInstitutionUncheckedUpdateWithoutInstitutionInput>;
};
export type AddressInstitutionUpdateWithoutInstitutionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AddressInstitutionUncheckedUpdateWithoutInstitutionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AddressInstitutionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    street?: boolean;
    number?: boolean;
    complement?: boolean;
    neighborhood?: boolean;
    city?: boolean;
    state?: boolean;
    zipCode?: boolean;
    institutionId?: boolean;
    institution?: boolean | Prisma.AddressInstitution$institutionArgs<ExtArgs>;
}, ExtArgs["result"]["addressInstitution"]>;
export type AddressInstitutionSelectScalar = {
    id?: boolean;
    street?: boolean;
    number?: boolean;
    complement?: boolean;
    neighborhood?: boolean;
    city?: boolean;
    state?: boolean;
    zipCode?: boolean;
    institutionId?: boolean;
};
export type AddressInstitutionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "street" | "number" | "complement" | "neighborhood" | "city" | "state" | "zipCode" | "institutionId", ExtArgs["result"]["addressInstitution"]>;
export type AddressInstitutionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    institution?: boolean | Prisma.AddressInstitution$institutionArgs<ExtArgs>;
};
export type $AddressInstitutionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AddressInstitution";
    objects: {
        institution: Prisma.$InstitutionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        street: string;
        number: string;
        complement: string | null;
        neighborhood: string;
        city: string;
        state: $Enums.State;
        zipCode: string;
        institutionId: string | null;
    }, ExtArgs["result"]["addressInstitution"]>;
    composites: {};
};
export type AddressInstitutionGetPayload<S extends boolean | null | undefined | AddressInstitutionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AddressInstitutionPayload, S>;
export type AddressInstitutionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AddressInstitutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AddressInstitutionCountAggregateInputType | true;
};
export interface AddressInstitutionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AddressInstitution'];
        meta: {
            name: 'AddressInstitution';
        };
    };
    /**
     * Find zero or one AddressInstitution that matches the filter.
     * @param {AddressInstitutionFindUniqueArgs} args - Arguments to find a AddressInstitution
     * @example
     * // Get one AddressInstitution
     * const addressInstitution = await prisma.addressInstitution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressInstitutionFindUniqueArgs>(args: Prisma.SelectSubset<T, AddressInstitutionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AddressInstitutionClient<runtime.Types.Result.GetResult<Prisma.$AddressInstitutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AddressInstitution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressInstitutionFindUniqueOrThrowArgs} args - Arguments to find a AddressInstitution
     * @example
     * // Get one AddressInstitution
     * const addressInstitution = await prisma.addressInstitution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressInstitutionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AddressInstitutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AddressInstitutionClient<runtime.Types.Result.GetResult<Prisma.$AddressInstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AddressInstitution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressInstitutionFindFirstArgs} args - Arguments to find a AddressInstitution
     * @example
     * // Get one AddressInstitution
     * const addressInstitution = await prisma.addressInstitution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressInstitutionFindFirstArgs>(args?: Prisma.SelectSubset<T, AddressInstitutionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AddressInstitutionClient<runtime.Types.Result.GetResult<Prisma.$AddressInstitutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AddressInstitution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressInstitutionFindFirstOrThrowArgs} args - Arguments to find a AddressInstitution
     * @example
     * // Get one AddressInstitution
     * const addressInstitution = await prisma.addressInstitution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressInstitutionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AddressInstitutionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AddressInstitutionClient<runtime.Types.Result.GetResult<Prisma.$AddressInstitutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AddressInstitutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressInstitutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddressInstitutions
     * const addressInstitutions = await prisma.addressInstitution.findMany()
     *
     * // Get first 10 AddressInstitutions
     * const addressInstitutions = await prisma.addressInstitution.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const addressInstitutionWithIdOnly = await prisma.addressInstitution.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AddressInstitutionFindManyArgs>(args?: Prisma.SelectSubset<T, AddressInstitutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddressInstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AddressInstitution.
     * @param {AddressInstitutionCreateArgs} args - Arguments to create a AddressInstitution.
     * @example
     * // Create one AddressInstitution
     * const AddressInstitution = await prisma.addressInstitution.create({
     *   data: {
     *     // ... data to create a AddressInstitution
     *   }
     * })
     *
     */
    create<T extends AddressInstitutionCreateArgs>(args: Prisma.SelectSubset<T, AddressInstitutionCreateArgs<ExtArgs>>): Prisma.Prisma__AddressInstitutionClient<runtime.Types.Result.GetResult<Prisma.$AddressInstitutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AddressInstitutions.
     * @param {AddressInstitutionCreateManyArgs} args - Arguments to create many AddressInstitutions.
     * @example
     * // Create many AddressInstitutions
     * const addressInstitution = await prisma.addressInstitution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AddressInstitutionCreateManyArgs>(args?: Prisma.SelectSubset<T, AddressInstitutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a AddressInstitution.
     * @param {AddressInstitutionDeleteArgs} args - Arguments to delete one AddressInstitution.
     * @example
     * // Delete one AddressInstitution
     * const AddressInstitution = await prisma.addressInstitution.delete({
     *   where: {
     *     // ... filter to delete one AddressInstitution
     *   }
     * })
     *
     */
    delete<T extends AddressInstitutionDeleteArgs>(args: Prisma.SelectSubset<T, AddressInstitutionDeleteArgs<ExtArgs>>): Prisma.Prisma__AddressInstitutionClient<runtime.Types.Result.GetResult<Prisma.$AddressInstitutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AddressInstitution.
     * @param {AddressInstitutionUpdateArgs} args - Arguments to update one AddressInstitution.
     * @example
     * // Update one AddressInstitution
     * const addressInstitution = await prisma.addressInstitution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AddressInstitutionUpdateArgs>(args: Prisma.SelectSubset<T, AddressInstitutionUpdateArgs<ExtArgs>>): Prisma.Prisma__AddressInstitutionClient<runtime.Types.Result.GetResult<Prisma.$AddressInstitutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AddressInstitutions.
     * @param {AddressInstitutionDeleteManyArgs} args - Arguments to filter AddressInstitutions to delete.
     * @example
     * // Delete a few AddressInstitutions
     * const { count } = await prisma.addressInstitution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AddressInstitutionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AddressInstitutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AddressInstitutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressInstitutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddressInstitutions
     * const addressInstitution = await prisma.addressInstitution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AddressInstitutionUpdateManyArgs>(args: Prisma.SelectSubset<T, AddressInstitutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one AddressInstitution.
     * @param {AddressInstitutionUpsertArgs} args - Arguments to update or create a AddressInstitution.
     * @example
     * // Update or create a AddressInstitution
     * const addressInstitution = await prisma.addressInstitution.upsert({
     *   create: {
     *     // ... data to create a AddressInstitution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddressInstitution we want to update
     *   }
     * })
     */
    upsert<T extends AddressInstitutionUpsertArgs>(args: Prisma.SelectSubset<T, AddressInstitutionUpsertArgs<ExtArgs>>): Prisma.Prisma__AddressInstitutionClient<runtime.Types.Result.GetResult<Prisma.$AddressInstitutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AddressInstitutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressInstitutionCountArgs} args - Arguments to filter AddressInstitutions to count.
     * @example
     * // Count the number of AddressInstitutions
     * const count = await prisma.addressInstitution.count({
     *   where: {
     *     // ... the filter for the AddressInstitutions we want to count
     *   }
     * })
    **/
    count<T extends AddressInstitutionCountArgs>(args?: Prisma.Subset<T, AddressInstitutionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AddressInstitutionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AddressInstitution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressInstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressInstitutionAggregateArgs>(args: Prisma.Subset<T, AddressInstitutionAggregateArgs>): Prisma.PrismaPromise<GetAddressInstitutionAggregateType<T>>;
    /**
     * Group by AddressInstitution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressInstitutionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AddressInstitutionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AddressInstitutionGroupByArgs['orderBy'];
    } : {
        orderBy?: AddressInstitutionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AddressInstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AddressInstitution model
     */
    readonly fields: AddressInstitutionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AddressInstitution.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AddressInstitutionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    institution<T extends Prisma.AddressInstitution$institutionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AddressInstitution$institutionArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AddressInstitution model
 */
export interface AddressInstitutionFieldRefs {
    readonly id: Prisma.FieldRef<"AddressInstitution", 'String'>;
    readonly street: Prisma.FieldRef<"AddressInstitution", 'String'>;
    readonly number: Prisma.FieldRef<"AddressInstitution", 'String'>;
    readonly complement: Prisma.FieldRef<"AddressInstitution", 'String'>;
    readonly neighborhood: Prisma.FieldRef<"AddressInstitution", 'String'>;
    readonly city: Prisma.FieldRef<"AddressInstitution", 'String'>;
    readonly state: Prisma.FieldRef<"AddressInstitution", 'State'>;
    readonly zipCode: Prisma.FieldRef<"AddressInstitution", 'String'>;
    readonly institutionId: Prisma.FieldRef<"AddressInstitution", 'String'>;
}
/**
 * AddressInstitution findUnique
 */
export type AddressInstitutionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressInstitution
     */
    select?: Prisma.AddressInstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressInstitution
     */
    omit?: Prisma.AddressInstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressInstitutionInclude<ExtArgs> | null;
    /**
     * Filter, which AddressInstitution to fetch.
     */
    where: Prisma.AddressInstitutionWhereUniqueInput;
};
/**
 * AddressInstitution findUniqueOrThrow
 */
export type AddressInstitutionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressInstitution
     */
    select?: Prisma.AddressInstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressInstitution
     */
    omit?: Prisma.AddressInstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressInstitutionInclude<ExtArgs> | null;
    /**
     * Filter, which AddressInstitution to fetch.
     */
    where: Prisma.AddressInstitutionWhereUniqueInput;
};
/**
 * AddressInstitution findFirst
 */
export type AddressInstitutionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressInstitution
     */
    select?: Prisma.AddressInstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressInstitution
     */
    omit?: Prisma.AddressInstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressInstitutionInclude<ExtArgs> | null;
    /**
     * Filter, which AddressInstitution to fetch.
     */
    where?: Prisma.AddressInstitutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressInstitutions to fetch.
     */
    orderBy?: Prisma.AddressInstitutionOrderByWithRelationInput | Prisma.AddressInstitutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AddressInstitutions.
     */
    cursor?: Prisma.AddressInstitutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressInstitutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressInstitutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AddressInstitutions.
     */
    distinct?: Prisma.AddressInstitutionScalarFieldEnum | Prisma.AddressInstitutionScalarFieldEnum[];
};
/**
 * AddressInstitution findFirstOrThrow
 */
export type AddressInstitutionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressInstitution
     */
    select?: Prisma.AddressInstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressInstitution
     */
    omit?: Prisma.AddressInstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressInstitutionInclude<ExtArgs> | null;
    /**
     * Filter, which AddressInstitution to fetch.
     */
    where?: Prisma.AddressInstitutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressInstitutions to fetch.
     */
    orderBy?: Prisma.AddressInstitutionOrderByWithRelationInput | Prisma.AddressInstitutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AddressInstitutions.
     */
    cursor?: Prisma.AddressInstitutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressInstitutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressInstitutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AddressInstitutions.
     */
    distinct?: Prisma.AddressInstitutionScalarFieldEnum | Prisma.AddressInstitutionScalarFieldEnum[];
};
/**
 * AddressInstitution findMany
 */
export type AddressInstitutionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressInstitution
     */
    select?: Prisma.AddressInstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressInstitution
     */
    omit?: Prisma.AddressInstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressInstitutionInclude<ExtArgs> | null;
    /**
     * Filter, which AddressInstitutions to fetch.
     */
    where?: Prisma.AddressInstitutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressInstitutions to fetch.
     */
    orderBy?: Prisma.AddressInstitutionOrderByWithRelationInput | Prisma.AddressInstitutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AddressInstitutions.
     */
    cursor?: Prisma.AddressInstitutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressInstitutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressInstitutions.
     */
    skip?: number;
    distinct?: Prisma.AddressInstitutionScalarFieldEnum | Prisma.AddressInstitutionScalarFieldEnum[];
};
/**
 * AddressInstitution create
 */
export type AddressInstitutionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressInstitution
     */
    select?: Prisma.AddressInstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressInstitution
     */
    omit?: Prisma.AddressInstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressInstitutionInclude<ExtArgs> | null;
    /**
     * The data needed to create a AddressInstitution.
     */
    data: Prisma.XOR<Prisma.AddressInstitutionCreateInput, Prisma.AddressInstitutionUncheckedCreateInput>;
};
/**
 * AddressInstitution createMany
 */
export type AddressInstitutionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddressInstitutions.
     */
    data: Prisma.AddressInstitutionCreateManyInput | Prisma.AddressInstitutionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AddressInstitution update
 */
export type AddressInstitutionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressInstitution
     */
    select?: Prisma.AddressInstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressInstitution
     */
    omit?: Prisma.AddressInstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressInstitutionInclude<ExtArgs> | null;
    /**
     * The data needed to update a AddressInstitution.
     */
    data: Prisma.XOR<Prisma.AddressInstitutionUpdateInput, Prisma.AddressInstitutionUncheckedUpdateInput>;
    /**
     * Choose, which AddressInstitution to update.
     */
    where: Prisma.AddressInstitutionWhereUniqueInput;
};
/**
 * AddressInstitution updateMany
 */
export type AddressInstitutionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AddressInstitutions.
     */
    data: Prisma.XOR<Prisma.AddressInstitutionUpdateManyMutationInput, Prisma.AddressInstitutionUncheckedUpdateManyInput>;
    /**
     * Filter which AddressInstitutions to update
     */
    where?: Prisma.AddressInstitutionWhereInput;
    /**
     * Limit how many AddressInstitutions to update.
     */
    limit?: number;
};
/**
 * AddressInstitution upsert
 */
export type AddressInstitutionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressInstitution
     */
    select?: Prisma.AddressInstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressInstitution
     */
    omit?: Prisma.AddressInstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressInstitutionInclude<ExtArgs> | null;
    /**
     * The filter to search for the AddressInstitution to update in case it exists.
     */
    where: Prisma.AddressInstitutionWhereUniqueInput;
    /**
     * In case the AddressInstitution found by the `where` argument doesn't exist, create a new AddressInstitution with this data.
     */
    create: Prisma.XOR<Prisma.AddressInstitutionCreateInput, Prisma.AddressInstitutionUncheckedCreateInput>;
    /**
     * In case the AddressInstitution was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AddressInstitutionUpdateInput, Prisma.AddressInstitutionUncheckedUpdateInput>;
};
/**
 * AddressInstitution delete
 */
export type AddressInstitutionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressInstitution
     */
    select?: Prisma.AddressInstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressInstitution
     */
    omit?: Prisma.AddressInstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressInstitutionInclude<ExtArgs> | null;
    /**
     * Filter which AddressInstitution to delete.
     */
    where: Prisma.AddressInstitutionWhereUniqueInput;
};
/**
 * AddressInstitution deleteMany
 */
export type AddressInstitutionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AddressInstitutions to delete
     */
    where?: Prisma.AddressInstitutionWhereInput;
    /**
     * Limit how many AddressInstitutions to delete.
     */
    limit?: number;
};
/**
 * AddressInstitution.institution
 */
export type AddressInstitution$institutionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * AddressInstitution without action
 */
export type AddressInstitutionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressInstitution
     */
    select?: Prisma.AddressInstitutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressInstitution
     */
    omit?: Prisma.AddressInstitutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressInstitutionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AddressInstitution.d.ts.map
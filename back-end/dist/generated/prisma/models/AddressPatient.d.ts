import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AddressPatient
 *
 */
export type AddressPatientModel = runtime.Types.Result.DefaultSelection<Prisma.$AddressPatientPayload>;
export type AggregateAddressPatient = {
    _count: AddressPatientCountAggregateOutputType | null;
    _min: AddressPatientMinAggregateOutputType | null;
    _max: AddressPatientMaxAggregateOutputType | null;
};
export type AddressPatientMinAggregateOutputType = {
    id: string | null;
    street: string | null;
    number: string | null;
    complement: string | null;
    neighborhood: string | null;
    city: string | null;
    state: $Enums.State | null;
    zipCode: string | null;
    patientId: string | null;
};
export type AddressPatientMaxAggregateOutputType = {
    id: string | null;
    street: string | null;
    number: string | null;
    complement: string | null;
    neighborhood: string | null;
    city: string | null;
    state: $Enums.State | null;
    zipCode: string | null;
    patientId: string | null;
};
export type AddressPatientCountAggregateOutputType = {
    id: number;
    street: number;
    number: number;
    complement: number;
    neighborhood: number;
    city: number;
    state: number;
    zipCode: number;
    patientId: number;
    _all: number;
};
export type AddressPatientMinAggregateInputType = {
    id?: true;
    street?: true;
    number?: true;
    complement?: true;
    neighborhood?: true;
    city?: true;
    state?: true;
    zipCode?: true;
    patientId?: true;
};
export type AddressPatientMaxAggregateInputType = {
    id?: true;
    street?: true;
    number?: true;
    complement?: true;
    neighborhood?: true;
    city?: true;
    state?: true;
    zipCode?: true;
    patientId?: true;
};
export type AddressPatientCountAggregateInputType = {
    id?: true;
    street?: true;
    number?: true;
    complement?: true;
    neighborhood?: true;
    city?: true;
    state?: true;
    zipCode?: true;
    patientId?: true;
    _all?: true;
};
export type AddressPatientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AddressPatient to aggregate.
     */
    where?: Prisma.AddressPatientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressPatients to fetch.
     */
    orderBy?: Prisma.AddressPatientOrderByWithRelationInput | Prisma.AddressPatientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AddressPatientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressPatients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressPatients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AddressPatients
    **/
    _count?: true | AddressPatientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AddressPatientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AddressPatientMaxAggregateInputType;
};
export type GetAddressPatientAggregateType<T extends AddressPatientAggregateArgs> = {
    [P in keyof T & keyof AggregateAddressPatient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAddressPatient[P]> : Prisma.GetScalarType<T[P], AggregateAddressPatient[P]>;
};
export type AddressPatientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddressPatientWhereInput;
    orderBy?: Prisma.AddressPatientOrderByWithAggregationInput | Prisma.AddressPatientOrderByWithAggregationInput[];
    by: Prisma.AddressPatientScalarFieldEnum[] | Prisma.AddressPatientScalarFieldEnum;
    having?: Prisma.AddressPatientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddressPatientCountAggregateInputType | true;
    _min?: AddressPatientMinAggregateInputType;
    _max?: AddressPatientMaxAggregateInputType;
};
export type AddressPatientGroupByOutputType = {
    id: string;
    street: string;
    number: string;
    complement: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
    patientId: string | null;
    _count: AddressPatientCountAggregateOutputType | null;
    _min: AddressPatientMinAggregateOutputType | null;
    _max: AddressPatientMaxAggregateOutputType | null;
};
type GetAddressPatientGroupByPayload<T extends AddressPatientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AddressPatientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AddressPatientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AddressPatientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AddressPatientGroupByOutputType[P]>;
}>>;
export type AddressPatientWhereInput = {
    AND?: Prisma.AddressPatientWhereInput | Prisma.AddressPatientWhereInput[];
    OR?: Prisma.AddressPatientWhereInput[];
    NOT?: Prisma.AddressPatientWhereInput | Prisma.AddressPatientWhereInput[];
    id?: Prisma.StringFilter<"AddressPatient"> | string;
    street?: Prisma.StringFilter<"AddressPatient"> | string;
    number?: Prisma.StringFilter<"AddressPatient"> | string;
    complement?: Prisma.StringNullableFilter<"AddressPatient"> | string | null;
    neighborhood?: Prisma.StringFilter<"AddressPatient"> | string;
    city?: Prisma.StringFilter<"AddressPatient"> | string;
    state?: Prisma.EnumStateFilter<"AddressPatient"> | $Enums.State;
    zipCode?: Prisma.StringFilter<"AddressPatient"> | string;
    patientId?: Prisma.StringNullableFilter<"AddressPatient"> | string | null;
    patient?: Prisma.XOR<Prisma.PatientNullableScalarRelationFilter, Prisma.PatientWhereInput> | null;
};
export type AddressPatientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    complement?: Prisma.SortOrderInput | Prisma.SortOrder;
    neighborhood?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    patientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    patient?: Prisma.PatientOrderByWithRelationInput;
    _relevance?: Prisma.AddressPatientOrderByRelevanceInput;
};
export type AddressPatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    patientId?: string;
    AND?: Prisma.AddressPatientWhereInput | Prisma.AddressPatientWhereInput[];
    OR?: Prisma.AddressPatientWhereInput[];
    NOT?: Prisma.AddressPatientWhereInput | Prisma.AddressPatientWhereInput[];
    street?: Prisma.StringFilter<"AddressPatient"> | string;
    number?: Prisma.StringFilter<"AddressPatient"> | string;
    complement?: Prisma.StringNullableFilter<"AddressPatient"> | string | null;
    neighborhood?: Prisma.StringFilter<"AddressPatient"> | string;
    city?: Prisma.StringFilter<"AddressPatient"> | string;
    state?: Prisma.EnumStateFilter<"AddressPatient"> | $Enums.State;
    zipCode?: Prisma.StringFilter<"AddressPatient"> | string;
    patient?: Prisma.XOR<Prisma.PatientNullableScalarRelationFilter, Prisma.PatientWhereInput> | null;
}, "id" | "patientId">;
export type AddressPatientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    complement?: Prisma.SortOrderInput | Prisma.SortOrder;
    neighborhood?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    patientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AddressPatientCountOrderByAggregateInput;
    _max?: Prisma.AddressPatientMaxOrderByAggregateInput;
    _min?: Prisma.AddressPatientMinOrderByAggregateInput;
};
export type AddressPatientScalarWhereWithAggregatesInput = {
    AND?: Prisma.AddressPatientScalarWhereWithAggregatesInput | Prisma.AddressPatientScalarWhereWithAggregatesInput[];
    OR?: Prisma.AddressPatientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AddressPatientScalarWhereWithAggregatesInput | Prisma.AddressPatientScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AddressPatient"> | string;
    street?: Prisma.StringWithAggregatesFilter<"AddressPatient"> | string;
    number?: Prisma.StringWithAggregatesFilter<"AddressPatient"> | string;
    complement?: Prisma.StringNullableWithAggregatesFilter<"AddressPatient"> | string | null;
    neighborhood?: Prisma.StringWithAggregatesFilter<"AddressPatient"> | string;
    city?: Prisma.StringWithAggregatesFilter<"AddressPatient"> | string;
    state?: Prisma.EnumStateWithAggregatesFilter<"AddressPatient"> | $Enums.State;
    zipCode?: Prisma.StringWithAggregatesFilter<"AddressPatient"> | string;
    patientId?: Prisma.StringNullableWithAggregatesFilter<"AddressPatient"> | string | null;
};
export type AddressPatientCreateInput = {
    id?: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
    patient?: Prisma.PatientCreateNestedOneWithoutAddressInput;
};
export type AddressPatientUncheckedCreateInput = {
    id?: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
    patientId?: string | null;
};
export type AddressPatientUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    patient?: Prisma.PatientUpdateOneWithoutAddressNestedInput;
};
export type AddressPatientUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AddressPatientCreateManyInput = {
    id?: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
    patientId?: string | null;
};
export type AddressPatientUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AddressPatientUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AddressPatientOrderByRelevanceInput = {
    fields: Prisma.AddressPatientOrderByRelevanceFieldEnum | Prisma.AddressPatientOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AddressPatientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    complement?: Prisma.SortOrder;
    neighborhood?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
};
export type AddressPatientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    complement?: Prisma.SortOrder;
    neighborhood?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
};
export type AddressPatientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    complement?: Prisma.SortOrder;
    neighborhood?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
};
export type AddressPatientNullableScalarRelationFilter = {
    is?: Prisma.AddressPatientWhereInput | null;
    isNot?: Prisma.AddressPatientWhereInput | null;
};
export type AddressPatientCreateNestedOneWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.AddressPatientCreateWithoutPatientInput, Prisma.AddressPatientUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: Prisma.AddressPatientCreateOrConnectWithoutPatientInput;
    connect?: Prisma.AddressPatientWhereUniqueInput;
};
export type AddressPatientUncheckedCreateNestedOneWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.AddressPatientCreateWithoutPatientInput, Prisma.AddressPatientUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: Prisma.AddressPatientCreateOrConnectWithoutPatientInput;
    connect?: Prisma.AddressPatientWhereUniqueInput;
};
export type AddressPatientUpdateOneWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.AddressPatientCreateWithoutPatientInput, Prisma.AddressPatientUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: Prisma.AddressPatientCreateOrConnectWithoutPatientInput;
    upsert?: Prisma.AddressPatientUpsertWithoutPatientInput;
    disconnect?: Prisma.AddressPatientWhereInput | boolean;
    delete?: Prisma.AddressPatientWhereInput | boolean;
    connect?: Prisma.AddressPatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AddressPatientUpdateToOneWithWhereWithoutPatientInput, Prisma.AddressPatientUpdateWithoutPatientInput>, Prisma.AddressPatientUncheckedUpdateWithoutPatientInput>;
};
export type AddressPatientUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.AddressPatientCreateWithoutPatientInput, Prisma.AddressPatientUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: Prisma.AddressPatientCreateOrConnectWithoutPatientInput;
    upsert?: Prisma.AddressPatientUpsertWithoutPatientInput;
    disconnect?: Prisma.AddressPatientWhereInput | boolean;
    delete?: Prisma.AddressPatientWhereInput | boolean;
    connect?: Prisma.AddressPatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AddressPatientUpdateToOneWithWhereWithoutPatientInput, Prisma.AddressPatientUpdateWithoutPatientInput>, Prisma.AddressPatientUncheckedUpdateWithoutPatientInput>;
};
export type AddressPatientCreateWithoutPatientInput = {
    id?: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
};
export type AddressPatientUncheckedCreateWithoutPatientInput = {
    id?: string;
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state: $Enums.State;
    zipCode: string;
};
export type AddressPatientCreateOrConnectWithoutPatientInput = {
    where: Prisma.AddressPatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.AddressPatientCreateWithoutPatientInput, Prisma.AddressPatientUncheckedCreateWithoutPatientInput>;
};
export type AddressPatientUpsertWithoutPatientInput = {
    update: Prisma.XOR<Prisma.AddressPatientUpdateWithoutPatientInput, Prisma.AddressPatientUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.AddressPatientCreateWithoutPatientInput, Prisma.AddressPatientUncheckedCreateWithoutPatientInput>;
    where?: Prisma.AddressPatientWhereInput;
};
export type AddressPatientUpdateToOneWithWhereWithoutPatientInput = {
    where?: Prisma.AddressPatientWhereInput;
    data: Prisma.XOR<Prisma.AddressPatientUpdateWithoutPatientInput, Prisma.AddressPatientUncheckedUpdateWithoutPatientInput>;
};
export type AddressPatientUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AddressPatientUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    complement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neighborhood?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.EnumStateFieldUpdateOperationsInput | $Enums.State;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AddressPatientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    street?: boolean;
    number?: boolean;
    complement?: boolean;
    neighborhood?: boolean;
    city?: boolean;
    state?: boolean;
    zipCode?: boolean;
    patientId?: boolean;
    patient?: boolean | Prisma.AddressPatient$patientArgs<ExtArgs>;
}, ExtArgs["result"]["addressPatient"]>;
export type AddressPatientSelectScalar = {
    id?: boolean;
    street?: boolean;
    number?: boolean;
    complement?: boolean;
    neighborhood?: boolean;
    city?: boolean;
    state?: boolean;
    zipCode?: boolean;
    patientId?: boolean;
};
export type AddressPatientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "street" | "number" | "complement" | "neighborhood" | "city" | "state" | "zipCode" | "patientId", ExtArgs["result"]["addressPatient"]>;
export type AddressPatientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.AddressPatient$patientArgs<ExtArgs>;
};
export type $AddressPatientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AddressPatient";
    objects: {
        patient: Prisma.$PatientPayload<ExtArgs> | null;
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
        patientId: string | null;
    }, ExtArgs["result"]["addressPatient"]>;
    composites: {};
};
export type AddressPatientGetPayload<S extends boolean | null | undefined | AddressPatientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AddressPatientPayload, S>;
export type AddressPatientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AddressPatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AddressPatientCountAggregateInputType | true;
};
export interface AddressPatientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AddressPatient'];
        meta: {
            name: 'AddressPatient';
        };
    };
    /**
     * Find zero or one AddressPatient that matches the filter.
     * @param {AddressPatientFindUniqueArgs} args - Arguments to find a AddressPatient
     * @example
     * // Get one AddressPatient
     * const addressPatient = await prisma.addressPatient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressPatientFindUniqueArgs>(args: Prisma.SelectSubset<T, AddressPatientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AddressPatientClient<runtime.Types.Result.GetResult<Prisma.$AddressPatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AddressPatient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressPatientFindUniqueOrThrowArgs} args - Arguments to find a AddressPatient
     * @example
     * // Get one AddressPatient
     * const addressPatient = await prisma.addressPatient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressPatientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AddressPatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AddressPatientClient<runtime.Types.Result.GetResult<Prisma.$AddressPatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AddressPatient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressPatientFindFirstArgs} args - Arguments to find a AddressPatient
     * @example
     * // Get one AddressPatient
     * const addressPatient = await prisma.addressPatient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressPatientFindFirstArgs>(args?: Prisma.SelectSubset<T, AddressPatientFindFirstArgs<ExtArgs>>): Prisma.Prisma__AddressPatientClient<runtime.Types.Result.GetResult<Prisma.$AddressPatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AddressPatient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressPatientFindFirstOrThrowArgs} args - Arguments to find a AddressPatient
     * @example
     * // Get one AddressPatient
     * const addressPatient = await prisma.addressPatient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressPatientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AddressPatientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AddressPatientClient<runtime.Types.Result.GetResult<Prisma.$AddressPatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AddressPatients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressPatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddressPatients
     * const addressPatients = await prisma.addressPatient.findMany()
     *
     * // Get first 10 AddressPatients
     * const addressPatients = await prisma.addressPatient.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const addressPatientWithIdOnly = await prisma.addressPatient.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AddressPatientFindManyArgs>(args?: Prisma.SelectSubset<T, AddressPatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddressPatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AddressPatient.
     * @param {AddressPatientCreateArgs} args - Arguments to create a AddressPatient.
     * @example
     * // Create one AddressPatient
     * const AddressPatient = await prisma.addressPatient.create({
     *   data: {
     *     // ... data to create a AddressPatient
     *   }
     * })
     *
     */
    create<T extends AddressPatientCreateArgs>(args: Prisma.SelectSubset<T, AddressPatientCreateArgs<ExtArgs>>): Prisma.Prisma__AddressPatientClient<runtime.Types.Result.GetResult<Prisma.$AddressPatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AddressPatients.
     * @param {AddressPatientCreateManyArgs} args - Arguments to create many AddressPatients.
     * @example
     * // Create many AddressPatients
     * const addressPatient = await prisma.addressPatient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AddressPatientCreateManyArgs>(args?: Prisma.SelectSubset<T, AddressPatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a AddressPatient.
     * @param {AddressPatientDeleteArgs} args - Arguments to delete one AddressPatient.
     * @example
     * // Delete one AddressPatient
     * const AddressPatient = await prisma.addressPatient.delete({
     *   where: {
     *     // ... filter to delete one AddressPatient
     *   }
     * })
     *
     */
    delete<T extends AddressPatientDeleteArgs>(args: Prisma.SelectSubset<T, AddressPatientDeleteArgs<ExtArgs>>): Prisma.Prisma__AddressPatientClient<runtime.Types.Result.GetResult<Prisma.$AddressPatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AddressPatient.
     * @param {AddressPatientUpdateArgs} args - Arguments to update one AddressPatient.
     * @example
     * // Update one AddressPatient
     * const addressPatient = await prisma.addressPatient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AddressPatientUpdateArgs>(args: Prisma.SelectSubset<T, AddressPatientUpdateArgs<ExtArgs>>): Prisma.Prisma__AddressPatientClient<runtime.Types.Result.GetResult<Prisma.$AddressPatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AddressPatients.
     * @param {AddressPatientDeleteManyArgs} args - Arguments to filter AddressPatients to delete.
     * @example
     * // Delete a few AddressPatients
     * const { count } = await prisma.addressPatient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AddressPatientDeleteManyArgs>(args?: Prisma.SelectSubset<T, AddressPatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AddressPatients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressPatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddressPatients
     * const addressPatient = await prisma.addressPatient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AddressPatientUpdateManyArgs>(args: Prisma.SelectSubset<T, AddressPatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one AddressPatient.
     * @param {AddressPatientUpsertArgs} args - Arguments to update or create a AddressPatient.
     * @example
     * // Update or create a AddressPatient
     * const addressPatient = await prisma.addressPatient.upsert({
     *   create: {
     *     // ... data to create a AddressPatient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddressPatient we want to update
     *   }
     * })
     */
    upsert<T extends AddressPatientUpsertArgs>(args: Prisma.SelectSubset<T, AddressPatientUpsertArgs<ExtArgs>>): Prisma.Prisma__AddressPatientClient<runtime.Types.Result.GetResult<Prisma.$AddressPatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AddressPatients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressPatientCountArgs} args - Arguments to filter AddressPatients to count.
     * @example
     * // Count the number of AddressPatients
     * const count = await prisma.addressPatient.count({
     *   where: {
     *     // ... the filter for the AddressPatients we want to count
     *   }
     * })
    **/
    count<T extends AddressPatientCountArgs>(args?: Prisma.Subset<T, AddressPatientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AddressPatientCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AddressPatient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressPatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressPatientAggregateArgs>(args: Prisma.Subset<T, AddressPatientAggregateArgs>): Prisma.PrismaPromise<GetAddressPatientAggregateType<T>>;
    /**
     * Group by AddressPatient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressPatientGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AddressPatientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AddressPatientGroupByArgs['orderBy'];
    } : {
        orderBy?: AddressPatientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AddressPatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AddressPatient model
     */
    readonly fields: AddressPatientFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AddressPatient.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AddressPatientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.AddressPatient$patientArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AddressPatient$patientArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AddressPatient model
 */
export interface AddressPatientFieldRefs {
    readonly id: Prisma.FieldRef<"AddressPatient", 'String'>;
    readonly street: Prisma.FieldRef<"AddressPatient", 'String'>;
    readonly number: Prisma.FieldRef<"AddressPatient", 'String'>;
    readonly complement: Prisma.FieldRef<"AddressPatient", 'String'>;
    readonly neighborhood: Prisma.FieldRef<"AddressPatient", 'String'>;
    readonly city: Prisma.FieldRef<"AddressPatient", 'String'>;
    readonly state: Prisma.FieldRef<"AddressPatient", 'State'>;
    readonly zipCode: Prisma.FieldRef<"AddressPatient", 'String'>;
    readonly patientId: Prisma.FieldRef<"AddressPatient", 'String'>;
}
/**
 * AddressPatient findUnique
 */
export type AddressPatientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressPatient
     */
    select?: Prisma.AddressPatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressPatient
     */
    omit?: Prisma.AddressPatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressPatientInclude<ExtArgs> | null;
    /**
     * Filter, which AddressPatient to fetch.
     */
    where: Prisma.AddressPatientWhereUniqueInput;
};
/**
 * AddressPatient findUniqueOrThrow
 */
export type AddressPatientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressPatient
     */
    select?: Prisma.AddressPatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressPatient
     */
    omit?: Prisma.AddressPatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressPatientInclude<ExtArgs> | null;
    /**
     * Filter, which AddressPatient to fetch.
     */
    where: Prisma.AddressPatientWhereUniqueInput;
};
/**
 * AddressPatient findFirst
 */
export type AddressPatientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressPatient
     */
    select?: Prisma.AddressPatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressPatient
     */
    omit?: Prisma.AddressPatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressPatientInclude<ExtArgs> | null;
    /**
     * Filter, which AddressPatient to fetch.
     */
    where?: Prisma.AddressPatientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressPatients to fetch.
     */
    orderBy?: Prisma.AddressPatientOrderByWithRelationInput | Prisma.AddressPatientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AddressPatients.
     */
    cursor?: Prisma.AddressPatientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressPatients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressPatients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AddressPatients.
     */
    distinct?: Prisma.AddressPatientScalarFieldEnum | Prisma.AddressPatientScalarFieldEnum[];
};
/**
 * AddressPatient findFirstOrThrow
 */
export type AddressPatientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressPatient
     */
    select?: Prisma.AddressPatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressPatient
     */
    omit?: Prisma.AddressPatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressPatientInclude<ExtArgs> | null;
    /**
     * Filter, which AddressPatient to fetch.
     */
    where?: Prisma.AddressPatientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressPatients to fetch.
     */
    orderBy?: Prisma.AddressPatientOrderByWithRelationInput | Prisma.AddressPatientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AddressPatients.
     */
    cursor?: Prisma.AddressPatientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressPatients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressPatients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AddressPatients.
     */
    distinct?: Prisma.AddressPatientScalarFieldEnum | Prisma.AddressPatientScalarFieldEnum[];
};
/**
 * AddressPatient findMany
 */
export type AddressPatientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressPatient
     */
    select?: Prisma.AddressPatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressPatient
     */
    omit?: Prisma.AddressPatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressPatientInclude<ExtArgs> | null;
    /**
     * Filter, which AddressPatients to fetch.
     */
    where?: Prisma.AddressPatientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressPatients to fetch.
     */
    orderBy?: Prisma.AddressPatientOrderByWithRelationInput | Prisma.AddressPatientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AddressPatients.
     */
    cursor?: Prisma.AddressPatientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressPatients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressPatients.
     */
    skip?: number;
    distinct?: Prisma.AddressPatientScalarFieldEnum | Prisma.AddressPatientScalarFieldEnum[];
};
/**
 * AddressPatient create
 */
export type AddressPatientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressPatient
     */
    select?: Prisma.AddressPatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressPatient
     */
    omit?: Prisma.AddressPatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressPatientInclude<ExtArgs> | null;
    /**
     * The data needed to create a AddressPatient.
     */
    data: Prisma.XOR<Prisma.AddressPatientCreateInput, Prisma.AddressPatientUncheckedCreateInput>;
};
/**
 * AddressPatient createMany
 */
export type AddressPatientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddressPatients.
     */
    data: Prisma.AddressPatientCreateManyInput | Prisma.AddressPatientCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AddressPatient update
 */
export type AddressPatientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressPatient
     */
    select?: Prisma.AddressPatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressPatient
     */
    omit?: Prisma.AddressPatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressPatientInclude<ExtArgs> | null;
    /**
     * The data needed to update a AddressPatient.
     */
    data: Prisma.XOR<Prisma.AddressPatientUpdateInput, Prisma.AddressPatientUncheckedUpdateInput>;
    /**
     * Choose, which AddressPatient to update.
     */
    where: Prisma.AddressPatientWhereUniqueInput;
};
/**
 * AddressPatient updateMany
 */
export type AddressPatientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AddressPatients.
     */
    data: Prisma.XOR<Prisma.AddressPatientUpdateManyMutationInput, Prisma.AddressPatientUncheckedUpdateManyInput>;
    /**
     * Filter which AddressPatients to update
     */
    where?: Prisma.AddressPatientWhereInput;
    /**
     * Limit how many AddressPatients to update.
     */
    limit?: number;
};
/**
 * AddressPatient upsert
 */
export type AddressPatientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressPatient
     */
    select?: Prisma.AddressPatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressPatient
     */
    omit?: Prisma.AddressPatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressPatientInclude<ExtArgs> | null;
    /**
     * The filter to search for the AddressPatient to update in case it exists.
     */
    where: Prisma.AddressPatientWhereUniqueInput;
    /**
     * In case the AddressPatient found by the `where` argument doesn't exist, create a new AddressPatient with this data.
     */
    create: Prisma.XOR<Prisma.AddressPatientCreateInput, Prisma.AddressPatientUncheckedCreateInput>;
    /**
     * In case the AddressPatient was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AddressPatientUpdateInput, Prisma.AddressPatientUncheckedUpdateInput>;
};
/**
 * AddressPatient delete
 */
export type AddressPatientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressPatient
     */
    select?: Prisma.AddressPatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressPatient
     */
    omit?: Prisma.AddressPatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressPatientInclude<ExtArgs> | null;
    /**
     * Filter which AddressPatient to delete.
     */
    where: Prisma.AddressPatientWhereUniqueInput;
};
/**
 * AddressPatient deleteMany
 */
export type AddressPatientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AddressPatients to delete
     */
    where?: Prisma.AddressPatientWhereInput;
    /**
     * Limit how many AddressPatients to delete.
     */
    limit?: number;
};
/**
 * AddressPatient.patient
 */
export type AddressPatient$patientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: Prisma.PatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Patient
     */
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
};
/**
 * AddressPatient without action
 */
export type AddressPatientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressPatient
     */
    select?: Prisma.AddressPatientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressPatient
     */
    omit?: Prisma.AddressPatientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AddressPatientInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AddressPatient.d.ts.map
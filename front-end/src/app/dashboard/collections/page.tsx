'use client';

import { useEffect, useState } from 'react';
import { Plus, Search, Trash2, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

import { client } from '@/services/axios.config';
import axios from 'axios';

// ====== Tipos alinhados com teus enums do Prisma ======

type StateCode =
    | 'AC'
    | 'AL'
    | 'AP'
    | 'AM'
    | 'BA'
    | 'CE'
    | 'DF'
    | 'ES'
    | 'GO'
    | 'MA'
    | 'MT'
    | 'MS'
    | 'MG'
    | 'PA'
    | 'PB'
    | 'PR'
    | 'PE'
    | 'PI'
    | 'RJ'
    | 'RN'
    | 'RS'
    | 'RO'
    | 'RR'
    | 'SC'
    | 'SP'
    | 'SE'
    | 'TO';

type AgeRange =
    | 'AGE_6a11'
    | 'AGE_12a14'
    | 'AGE_15a17'
    | 'AGE_18a25'
    | 'AGE_26a40'
    | 'AGE_41a59'
    | 'AGE_60a74'
    | 'AGE_75a89'
    | 'AGE_90Plus';

type CollectChannel = 'PRESENTIAL' | 'ONLINE';

type CollectRisk = 'LOW' | 'MEDIUM' | 'HIGH';

type Gender = 'MALE' | 'FEMALE' | 'OTHER';

type Schooling =
    | 'NO_FORMAL'
    | 'PRE'
    | 'FUNDAMENTAL'
    | 'MEDIUM'
    | 'BACHELOR'
    | 'MASTER'
    | 'DOCTORATE';

// tipos pra listagem

type CollectData = {
    id: string;
    collectId: string;
    // Perfil
    ageRange: AgeRange;
    gender?: Gender | null;
    schooling?: Schooling | null;
    state: StateCode;
    city: string;
    // Comportamento digital
    dailyScreenTimeMin: number;
    nightUsageMin: number;
    devicesCount: number;
    // Questionário / risco
    dependencyScore: number;
    riskLevel: CollectRisk;
    questionnaireVersion: string;
    // Indicadores complementares
    sleepQualityScore: number;
    anxietyScore: number;
    depressionScore: number;
    isolationScore: number;
    physicalActivityPerWeek: number;
    // Consentimento
    hasConsent: boolean;
    consentAt: string;
    notes?: string | null;
};

type Collect = {
    id: string;
    collectedAt: string;
    channel: CollectChannel;
    patientHash: string;
    institutionId?: string | null;
    institution?: {
        id: string;
        name: string;
    } | null;
    collectData?: CollectData | null;
};

// estado do form de criação (string-friendly)
type CreateCollectForm = {
    // patient
    patientName: string;
    patientCpf: string;

    // collect
    channel: CollectChannel;
    institutionId: string;

    // collectData
    ageRange: AgeRange;
    gender: '' | Gender;
    schooling: '' | Schooling;
    state: StateCode;
    city: string;

    dailyScreenTimeMin: string;
    nightUsageMin: string;
    devicesCount: string;

    dependencyScore: string;
    riskLevel: CollectRisk;
    questionnaireVersion: string;

    sleepQualityScore: string;
    anxietyScore: string;
    depressionScore: string;
    isolationScore: string;
    physicalActivityPerWeek: string;

    hasConsent: boolean;
    consentAt: string; // datetime-local
    notes: string;
};

// ====== Constantes UI ======

const STATES: StateCode[] = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
];

const AGE_RANGE_LABELS: Record<AgeRange, string> = {
    AGE_6a11: '6–11',
    AGE_12a14: '12–14',
    AGE_15a17: '15–17',
    AGE_18a25: '18–25',
    AGE_26a40: '26–40',
    AGE_41a59: '41–59',
    AGE_60a74: '60–74',
    AGE_75a89: '75–89',
    AGE_90Plus: '90+',
};

const COLLECT_CHANNEL_LABELS: Record<CollectChannel, string> = {
    PRESENTIAL: 'Presential',
    ONLINE: 'Online',
};

const RISK_LABELS: Record<CollectRisk, string> = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
};

const GENDER_LABELS: Record<Gender, string> = {
    MALE: 'Male',
    FEMALE: 'Female',
    OTHER: 'Other',
};

const SCHOOLING_LABELS: Record<Schooling, string> = {
    NO_FORMAL: 'No formal education',
    PRE: 'Pre-school',
    FUNDAMENTAL: 'Fundamental',
    MEDIUM: 'High school',
    BACHELOR: 'Bachelor',
    MASTER: 'Master',
    DOCTORATE: 'Doctorate',
};

// ====== Página principal ======

export default function CollectsPage() {
    const [collects, setCollects] = useState<Collect[]>([]);
    const [filteredCollects, setFilteredCollects] = useState<Collect[]>([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        loadCollects();
    }, []);

    // filtro local por cidade / estado / risco
    useEffect(() => {
        const term = search.toLowerCase().trim();
        if (!term) {
            setFilteredCollects(collects);
            return;
        }

        setFilteredCollects(
            collects.filter(c => {
                const cd = c.collectData;
                const city = cd?.city.toLowerCase() ?? '';
                const state = cd?.state.toLowerCase() ?? '';
                const risk = cd?.riskLevel.toLowerCase() ?? '';
                return (
                    city.includes(term) ||
                    state.includes(term) ||
                    risk.includes(term)
                );
            })
        );
    }, [search, collects]);

    async function loadCollects() {
        try {
            setIsLoading(true);

            const res = await client.get('/collect/all');

            console.log('✅ /collect/all response:', res.status, res.data);

            // tenta pegar a lista em vários formatos possíveis
            const data: any = res.data;
            const list: Collect[] =
                data?.collects ??
                data?.data ??
                (Array.isArray(data) ? data : []);

            console.log('📊 Parsed collects list:', list);

            setCollects(list);
            setFilteredCollects(list);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(
                    '❌ Error loading collects:',
                    error.response?.status,
                    error.response?.data
                );
                alert(
                    `Erro ao carregar coletas: ${
                        error.response?.status ?? 'sem status'
                    }`
                );
            } else {
                console.error('❌ Unknown error loading collects:', error);
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function handleCreateCollect(form: CreateCollectForm) {
        try {
            setIsCreating(true);

            // monta o corpo exatamente no formato do CreateCollectRequestDTO
            const nowIso = new Date().toISOString();

            await client.post('/collect/create', {
                patient: {
                    name: form.patientName,
                    cpf: form.patientCpf,
                },
                collect: {
                    channel: form.channel,
                    collectedAt: nowIso,
                    institutionId: form.institutionId || null,
                },
                collectData: {
                    // 1) Perfil
                    ageRange: form.ageRange,
                    gender: form.gender || undefined,
                    schooling: form.schooling || undefined,
                    state: form.state,
                    city: form.city,

                    // 2) Comportamento digital
                    dailyScreenTimeMin: Number(form.dailyScreenTimeMin || 0),
                    nightUsageMin: Number(form.nightUsageMin || 0),
                    devicesCount: Number(form.devicesCount || 0),

                    // 3) Questionário / risco
                    dependencyScore: Number(form.dependencyScore || 0),
                    riskLevel: form.riskLevel,
                    questionnaireVersion: form.questionnaireVersion || 'v1',

                    rawAnswers: null, // se quiser depois plugar as respostas brutas

                    // 4) Indicadores complementares
                    sleepQualityScore: Number(form.sleepQualityScore || 0),
                    anxietyScore: Number(form.anxietyScore || 0),
                    depressionScore: Number(form.depressionScore || 0),
                    isolationScore: Number(form.isolationScore || 0),
                    physicalActivityPerWeek: Number(
                        form.physicalActivityPerWeek || 0
                    ),

                    // 5) Consentimento
                    hasConsent: form.hasConsent,
                    consentAt: form.consentAt
                        ? new Date(form.consentAt).toISOString()
                        : nowIso,

                    notes: form.notes || null,
                },
            });

            await loadCollects();
        } catch (error) {
            console.error('Error creating collect:', error);
        } finally {
            setIsCreating(false);
        }
    }

    async function handleDeleteCollect(id: string) {
        const confirmed = window.confirm(
            'Are you sure you want to delete this collect?'
        );
        if (!confirmed) return;

        try {
            await client.delete(`/collect/delete/${id}`);
            setCollects(prev => prev.filter(c => c.id !== id));
            setFilteredCollects(prev => prev.filter(c => c.id !== id));
        } catch (error) {
            console.error('Error deleting collect:', error);
        }
    }

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Header */}
            <header className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Collect Management
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Register, view and manage internet dependency
                        collects.
                    </p>
                </div>

                <CreateCollectDialog
                    onCreate={handleCreateCollect}
                    isSubmitting={isCreating}
                />
            </header>

            {/* Search */}
            <section className="flex items-center gap-2">
                <div className="relative w-full max-w-sm">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search by city, state or risk level..."
                        className="pl-9"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={loadCollects}
                    disabled={isLoading}>
                    {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <span className="text-lg">↻</span>
                    )}
                </Button>
            </section>

            {/* Table */}
            <section className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Channel</TableHead>
                            <TableHead>Age range</TableHead>
                            <TableHead>Risk</TableHead>
                            <TableHead>Dependency score</TableHead>
                            <TableHead>City / State</TableHead>
                            <TableHead>Consent</TableHead>
                            <TableHead className="w-[80px] text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && collects.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={8}
                                    className="h-24 text-center text-sm text-muted-foreground">
                                    Loading collects...
                                </TableCell>
                            </TableRow>
                        ) : filteredCollects.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={8}
                                    className="h-24 text-center text-sm text-muted-foreground">
                                    No collects found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredCollects.map(c => {
                                const cd = c.collectData;
                                return (
                                    <TableRow key={c.id}>
                                        <TableCell>
                                            {new Date(
                                                c.collectedAt
                                            ).toLocaleString('pt-BR')}
                                        </TableCell>
                                        <TableCell>
                                            {COLLECT_CHANNEL_LABELS[c.channel]}
                                        </TableCell>
                                        <TableCell>
                                            {cd ? AGE_RANGE_LABELS[cd.ageRange] : '-'}
                                        </TableCell>
                                        <TableCell>
                                            {cd ? RISK_LABELS[cd.riskLevel] : '-'}
                                        </TableCell>
                                        <TableCell>
                                            {cd ? cd.dependencyScore : '-'}
                                        </TableCell>
                                        <TableCell>
                                            {cd ? `${cd.city} / ${cd.state}` : '-'}
                                        </TableCell>
                                        <TableCell>
                                            {cd ? (cd.hasConsent ? 'Yes' : 'No') : '-'}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                onClick={() =>
                                                    handleDeleteCollect(c.id)
                                                }>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        )}
                    </TableBody>
                </Table>
            </section>
        </div>
    );
}


    // ====== Dialog de criação ======

    type CreateCollectDialogProps = {
        onCreate: (form: CreateCollectForm) => Promise<void> | void;
        isSubmitting: boolean;
    };

    function CreateCollectDialog({
        onCreate,
        isSubmitting,
    }: CreateCollectDialogProps) {
        const [open, setOpen] = useState(false);
        const [form, setForm] = useState<CreateCollectForm>({
            // patient
            patientName: '',
            patientCpf: '',

            // collect
            channel: 'PRESENTIAL',
            institutionId: '',

            // collectData
            ageRange: 'AGE_18a25',
            gender: '',
            schooling: '',
            state: 'PE',
            city: '',

            dailyScreenTimeMin: '',
            nightUsageMin: '',
            devicesCount: '',

            dependencyScore: '',
            riskLevel: 'MEDIUM',
            questionnaireVersion: 'v1',

            sleepQualityScore: '',
            anxietyScore: '',
            depressionScore: '',
            isolationScore: '',
            physicalActivityPerWeek: '',

            hasConsent: false,
            consentAt: '',
            notes: '',
        });

        function handleChange(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) {
            const { name, value } = e.target;
            setForm(prev => ({ ...prev, [name]: value }));
        }

        async function handleSubmit(e: React.FormEvent) {
            e.preventDefault();
            await onCreate(form);
            setOpen(false);
            setForm({
                patientName: '',
                patientCpf: '',
                channel: 'PRESENTIAL',
                institutionId: '',
                ageRange: 'AGE_18a25',
                gender: '',
                schooling: '',
                state: 'PE',
                city: '',
                dailyScreenTimeMin: '',
                nightUsageMin: '',
                devicesCount: '',
                dependencyScore: '',
                riskLevel: 'MEDIUM',
                questionnaireVersion: 'v1',
                sleepQualityScore: '',
                anxietyScore: '',
                depressionScore: '',
                isolationScore: '',
                physicalActivityPerWeek: '',
                hasConsent: false,
                consentAt: '',
                notes: '',
            });
        }

        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        New collect
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Create collect</DialogTitle>
                        <DialogDescription>
                            Fill in the patient, collect and questionnaire data.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-2 max-h-[70vh] overflow-y-auto pr-2">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Patient */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium">Patient</h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="patientName">
                                            Name
                                        </Label>
                                        <Input
                                            id="patientName"
                                            name="patientName"
                                            required
                                            value={form.patientName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="patientCpf">CPF</Label>
                                        <Input
                                            id="patientCpf"
                                            name="patientCpf"
                                            required
                                            maxLength={11}
                                            value={form.patientCpf}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Collect */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium">Collect</h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label>Channel</Label>
                                        <Select
                                            value={form.channel}
                                            onValueChange={value =>
                                                setForm(prev => ({
                                                    ...prev,
                                                    channel:
                                                        value as CollectChannel,
                                                }))
                                            }>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select channel" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="PRESENTIAL">
                                                    Presential
                                                </SelectItem>
                                                <SelectItem value="ONLINE">
                                                    Online
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="institutionId">
                                            Institution ID (optional)
                                        </Label>
                                        <Input
                                            id="institutionId"
                                            name="institutionId"
                                            value={form.institutionId}
                                            onChange={handleChange}
                                            placeholder="Link this collect to an institution (id)"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Profile */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium">
                                    Respondent profile
                                </h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label>Age range</Label>
                                        <Select
                                            value={form.ageRange}
                                            onValueChange={value =>
                                                setForm(prev => ({
                                                    ...prev,
                                                    ageRange: value as AgeRange,
                                                }))
                                            }>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select age range" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {(
                                                    Object.keys(
                                                        AGE_RANGE_LABELS
                                                    ) as AgeRange[]
                                                ).map(ar => (
                                                    <SelectItem
                                                        key={ar}
                                                        value={ar}>
                                                        {AGE_RANGE_LABELS[ar]}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Gender (optional)</Label>
                                        <Select
                                            value={form.gender}
                                            onValueChange={value =>
                                                setForm(prev => ({
                                                    ...prev,
                                                    gender: value as Gender,
                                                }))
                                            }>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="MALE">
                                                    {GENDER_LABELS.MALE}
                                                </SelectItem>
                                                <SelectItem value="FEMALE">
                                                    {GENDER_LABELS.FEMALE}
                                                </SelectItem>
                                                <SelectItem value="OTHER">
                                                    {GENDER_LABELS.OTHER}
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Schooling (optional)</Label>
                                        <Select
                                            value={form.schooling}
                                            onValueChange={value =>
                                                setForm(prev => ({
                                                    ...prev,
                                                    schooling:
                                                        value as Schooling,
                                                }))
                                            }>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select schooling" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {(
                                                    Object.keys(
                                                        SCHOOLING_LABELS
                                                    ) as Schooling[]
                                                ).map(sc => (
                                                    <SelectItem
                                                        key={sc}
                                                        value={sc}>
                                                        {SCHOOLING_LABELS[sc]}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input
                                            id="city"
                                            name="city"
                                            required
                                            value={form.city}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>State</Label>
                                        <Select
                                            value={form.state}
                                            onValueChange={value =>
                                                setForm(prev => ({
                                                    ...prev,
                                                    state: value as StateCode,
                                                }))
                                            }>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select state" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {STATES.map(uf => (
                                                    <SelectItem
                                                        key={uf}
                                                        value={uf}>
                                                        {uf}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* Digital behaviour */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium">
                                    Digital behaviour
                                </h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="dailyScreenTimeMin">
                                            Daily screen time (min)
                                        </Label>
                                        <Input
                                            id="dailyScreenTimeMin"
                                            name="dailyScreenTimeMin"
                                            type="number"
                                            min={0}
                                            value={form.dailyScreenTimeMin}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="nightUsageMin">
                                            Night usage 00:00–06:00 (min)
                                        </Label>
                                        <Input
                                            id="nightUsageMin"
                                            name="nightUsageMin"
                                            type="number"
                                            min={0}
                                            value={form.nightUsageMin}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="devicesCount">
                                            Devices count
                                        </Label>
                                        <Input
                                            id="devicesCount"
                                            name="devicesCount"
                                            type="number"
                                            min={0}
                                            value={form.devicesCount}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Risk & questionnaire */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium">
                                    Risk & questionnaire
                                </h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="dependencyScore">
                                            Dependency score (0–100)
                                        </Label>
                                        <Input
                                            id="dependencyScore"
                                            name="dependencyScore"
                                            type="number"
                                            min={0}
                                            max={100}
                                            value={form.dependencyScore}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Risk level</Label>
                                        <Select
                                            value={form.riskLevel}
                                            onValueChange={value =>
                                                setForm(prev => ({
                                                    ...prev,
                                                    riskLevel:
                                                        value as CollectRisk,
                                                }))
                                            }>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select risk" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="LOW">
                                                    {RISK_LABELS.LOW}
                                                </SelectItem>
                                                <SelectItem value="MEDIUM">
                                                    {RISK_LABELS.MEDIUM}
                                                </SelectItem>
                                                <SelectItem value="HIGH">
                                                    {RISK_LABELS.HIGH}
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="questionnaireVersion">
                                            Questionnaire version
                                        </Label>
                                        <Input
                                            id="questionnaireVersion"
                                            name="questionnaireVersion"
                                            value={form.questionnaireVersion}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Emotional / routine */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium">
                                    Emotional / routine
                                </h3>
                                <div className="grid gap-4 md:grid-cols-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="sleepQualityScore">
                                            Sleep quality
                                        </Label>
                                        <Input
                                            id="sleepQualityScore"
                                            name="sleepQualityScore"
                                            type="number"
                                            value={form.sleepQualityScore}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="anxietyScore">
                                            Anxiety
                                        </Label>
                                        <Input
                                            id="anxietyScore"
                                            name="anxietyScore"
                                            type="number"
                                            value={form.anxietyScore}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="depressionScore">
                                            Depression
                                        </Label>
                                        <Input
                                            id="depressionScore"
                                            name="depressionScore"
                                            type="number"
                                            value={form.depressionScore}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="isolationScore">
                                            Isolation
                                        </Label>
                                        <Input
                                            id="isolationScore"
                                            name="isolationScore"
                                            type="number"
                                            value={form.isolationScore}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="physicalActivityPerWeek">
                                            Physical activity / week
                                        </Label>
                                        <Input
                                            id="physicalActivityPerWeek"
                                            name="physicalActivityPerWeek"
                                            type="number"
                                            min={0}
                                            max={7}
                                            value={form.physicalActivityPerWeek}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Consent */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium">Consent</h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="space-y-2 md:col-span-1">
                                        <Label>LGPD consent</Label>
                                        <div className="flex items-center gap-2 rounded-md border px-3 py-2">
                                            <Checkbox
                                                id="hasConsent"
                                                checked={form.hasConsent}
                                                onCheckedChange={checked =>
                                                    setForm(prev => ({
                                                        ...prev,
                                                        hasConsent:
                                                            Boolean(checked),
                                                    }))
                                                }
                                            />
                                            <Label
                                                htmlFor="hasConsent"
                                                className="text-sm font-normal leading-none">
                                                User accepted the terms
                                            </Label>
                                        </div>
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="consentAt">
                                            Consent date/time
                                        </Label>
                                        <Input
                                            id="consentAt"
                                            name="consentAt"
                                            type="datetime-local"
                                            value={form.consentAt}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="notes">
                                        Notes (optional)
                                    </Label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                                        value={form.notes}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <DialogFooter className="gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting && (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Create
                                </Button>
                            </DialogFooter>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

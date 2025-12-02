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

// ==== Types alinhados com o Prisma/DTO ====

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

type PatientStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
type Gender = 'MALE' | 'FEMALE' | 'OTHER';
type Schooling =
    | 'NO_FORMAL'
    | 'PRE'
    | 'FUNDAMENTAL'
    | 'MEDIUM'
    | 'BACHELOR'
    | 'MASTER'
    | 'DOCTORATE';

type AddressPatient = {
    id: string;
    street: string;
    number: string;
    complement: string | null;
    neighborhood: string;
    city: string;
    state: StateCode;
    zipCode: string;
};

type Patient = {
    id: string;
    name: string;
    cpf: string;
    phone: string;
    email: string;
    birthDate: string; // ISO
    patientStatus: PatientStatus;
    createdAt: string;
    updatedAt: string;
    lastCollectionAt: string | null;
    sleepQuality: number;
    isInsomnia: boolean;
    gender?: Gender | null;
    schooling?: Schooling | null;
    address?: AddressPatient | null;
};

// estado do form (strings + enums opcionais)
type CreatePatientForm = {
    name: string;
    cpf: string;
    phone: string;
    email: string;
    birthDate: string; // yyyy-mm-dd
    sleepQuality: string; // string no form, converte pra number na requisição
    isInsomnia: boolean;
    gender: '' | Gender;
    schooling: '' | Schooling;
    patientStatus: PatientStatus;
    city: string;
    state: StateCode;
    street: string;
    number: string;
    neighborhood: string;
    zipCode: string;
    complement: string;
};

// ==== Constantes ====

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

const PATIENT_STATUS_LABELS: Record<PatientStatus, string> = {
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
    SUSPENDED: 'Suspended',
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

// ==== Page ====

export default function PatientsPage() {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        loadPatients();
    }, []);

    // filtro local por nome / email / cpf
    useEffect(() => {
        const term = search.toLowerCase().trim();
        if (!term) {
            setFilteredPatients(patients);
            return;
        }

        setFilteredPatients(
            patients.filter(p => {
                const name = p.name.toLowerCase();
                const email = p.email.toLowerCase();
                const cpf = p.cpf.toLowerCase();
                return (
                    name.includes(term) ||
                    email.includes(term) ||
                    cpf.includes(term)
                );
            })
        );
    }, [search, patients]);

    async function loadPatients() {
        try {
            setIsLoading(true);

            const res = await client.get<{
                message: string;
                patients: Patient[];
            }>('/patient/all');

            const list = res.data.patients ?? [];
            setPatients(list);
            setFilteredPatients(list);
        } catch (error) {
            console.error('Error loading patients:', error);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleCreatePatient(form: CreatePatientForm) {
        try {
            setIsCreating(true);

            await client.post('/patient/create', {
                name: form.name,
                cpf: form.cpf,
                phone: form.phone,
                email: form.email,
                birthDate: form.birthDate,
                sleepQuality: form.sleepQuality ? Number(form.sleepQuality) : 0,
                isInsomnia: form.isInsomnia,
                gender: form.gender || undefined,
                schooling: form.schooling || undefined,
                patientStatus: form.patientStatus,
                address: {
                    street: form.street,
                    number: form.number,
                    complement: form.complement,
                    neighborhood: form.neighborhood,
                    city: form.city,
                    state: form.state,
                    zipCode: form.zipCode,
                },
            });

            await loadPatients();
        } catch (error) {
            console.error('Error creating patient:', error);
        } finally {
            setIsCreating(false);
        }
    }

    async function handleDeletePatient(id: string) {
        const confirmed = window.confirm(
            'Are you sure you want to delete this patient?'
        );
        if (!confirmed) return;

        try {
            await client.delete(`/patient/delete/${id}`);
            setPatients(prev => prev.filter(p => p.id !== id));
        } catch (error) {
            console.error('Error deleting patient:', error);
        }
    }

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Header */}
            <header className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Patient Management
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Register, search and manage patients in the system.
                    </p>
                </div>

                <CreatePatientDialog
                    onCreate={handleCreatePatient}
                    isSubmitting={isCreating}
                />
            </header>

            {/* Search bar */}
            <section className="flex items-center gap-2">
                <div className="relative w-full max-w-sm">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search by name, email or CPF..."
                        className="pl-9"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={loadPatients}
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
                            <TableHead>Name</TableHead>
                            <TableHead>CPF</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>City / State</TableHead>
                            <TableHead>Last collection</TableHead>
                            <TableHead className="w-[80px] text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && patients.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    className="h-24 text-center text-sm text-muted-foreground">
                                    Loading patients...
                                </TableCell>
                            </TableRow>
                        ) : filteredPatients.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    className="h-24 text-center text-sm text-muted-foreground">
                                    No patients found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredPatients.map(p => (
                                <TableRow key={p.id}>
                                    <TableCell className="font-medium">
                                        {p.name}
                                    </TableCell>
                                    <TableCell>{p.cpf}</TableCell>
                                    <TableCell>{p.email}</TableCell>
                                    <TableCell>
                                        {PATIENT_STATUS_LABELS[p.patientStatus]}
                                    </TableCell>
                                    <TableCell>
                                        {p.address
                                            ? `${p.address.city} / ${p.address.state}`
                                            : '-'}
                                    </TableCell>
                                    <TableCell>
                                        {p.lastCollectionAt
                                            ? new Date(
                                                  p.lastCollectionAt
                                              ).toLocaleDateString('pt-BR')
                                            : '-'}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={() =>
                                                handleDeletePatient(p.id)
                                            }>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </section>
        </div>
    );
}

// ==== Dialog de criação ====

type CreatePatientDialogProps = {
    onCreate: (payload: CreatePatientForm) => Promise<void> | void;
    isSubmitting: boolean;
};

function CreatePatientDialog({
    onCreate,
    isSubmitting,
}: CreatePatientDialogProps) {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<CreatePatientForm>({
        name: '',
        cpf: '',
        phone: '',
        email: '',
        birthDate: '',
        sleepQuality: '',
        isInsomnia: false,
        gender: '',
        schooling: '',
        patientStatus: 'ACTIVE',
        city: '',
        state: 'PE',
        street: '',
        number: '',
        neighborhood: '',
        zipCode: '',
        complement: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await onCreate(form);
        setOpen(false);
        setForm({
            name: '',
            cpf: '',
            phone: '',
            email: '',
            birthDate: '',
            sleepQuality: '',
            isInsomnia: false,
            gender: '',
            schooling: '',
            patientStatus: 'ACTIVE',
            city: '',
            state: 'PE',
            street: '',
            number: '',
            neighborhood: '',
            zipCode: '',
            complement: '',
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New patient
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Create patient</DialogTitle>
                    <DialogDescription>
                        Fill in the fields below to register a new patient.
                    </DialogDescription>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Basic info */}
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="cpf">CPF</Label>
                            <Input
                                id="cpf"
                                name="cpf"
                                required
                                maxLength={11}
                                value={form.cpf}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                name="phone"
                                maxLength={11}
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Extra info */}
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                            <Label htmlFor="birthDate">Birth date</Label>
                            <Input
                                id="birthDate"
                                name="birthDate"
                                type="date"
                                required
                                value={form.birthDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="sleepQuality">
                                Sleep quality (0–10)
                            </Label>
                            <Input
                                id="sleepQuality"
                                name="sleepQuality"
                                type="number"
                                min={0}
                                max={10}
                                value={form.sleepQuality}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Status</Label>
                            <Select
                                value={form.patientStatus}
                                onValueChange={value =>
                                    setForm(prev => ({
                                        ...prev,
                                        patientStatus: value as PatientStatus,
                                    }))
                                }>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ACTIVE">
                                        Active
                                    </SelectItem>
                                    <SelectItem value="INACTIVE">
                                        Inactive
                                    </SelectItem>
                                    <SelectItem value="SUSPENDED">
                                        Suspended
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Gender / schooling / insomnia */}
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                            <Label>Gender</Label>
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
                                    <SelectItem value="MALE">Male</SelectItem>
                                    <SelectItem value="FEMALE">
                                        Female
                                    </SelectItem>
                                    <SelectItem value="OTHER">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Schooling</Label>
                            <Select
                                value={form.schooling}
                                onValueChange={value =>
                                    setForm(prev => ({
                                        ...prev,
                                        schooling: value as Schooling,
                                    }))
                                }>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select schooling" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="NO_FORMAL">
                                        No formal education
                                    </SelectItem>
                                    <SelectItem value="PRE">
                                        Pre-school
                                    </SelectItem>
                                    <SelectItem value="FUNDAMENTAL">
                                        Fundamental
                                    </SelectItem>
                                    <SelectItem value="MEDIUM">
                                        High school
                                    </SelectItem>
                                    <SelectItem value="BACHELOR">
                                        Bachelor
                                    </SelectItem>
                                    <SelectItem value="MASTER">
                                        Master
                                    </SelectItem>
                                    <SelectItem value="DOCTORATE">
                                        Doctorate
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Insomnia</Label>
                            <div className="flex items-center gap-2 rounded-md border px-3 py-2">
                                <Checkbox
                                    id="isInsomnia"
                                    checked={form.isInsomnia}
                                    onCheckedChange={checked =>
                                        setForm(prev => ({
                                            ...prev,
                                            isInsomnia: Boolean(checked),
                                        }))
                                    }
                                />
                                <Label
                                    htmlFor="isInsomnia"
                                    className="text-sm font-normal leading-none">
                                    Patient reports insomnia
                                </Label>
                            </div>
                        </div>
                    </div>

                    {/* Address */}
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
                                        <SelectItem key={uf} value={uf}>
                                            {uf}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                            <Label htmlFor="street">Street</Label>
                            <Input
                                id="street"
                                name="street"
                                value={form.street}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="number">Number</Label>
                            <Input
                                id="number"
                                name="number"
                                value={form.number}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="zipCode">ZIP code</Label>
                            <Input
                                id="zipCode"
                                name="zipCode"
                                placeholder="53690000"
                                value={form.zipCode}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="neighborhood">Neighborhood</Label>
                        <Input
                            id="neighborhood"
                            name="neighborhood"
                            value={form.neighborhood}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="complement">Complement</Label>
                        <Input
                            id="complement"
                            name="complement"
                            value={form.complement}
                            onChange={handleChange}
                        />
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
            </DialogContent>
        </Dialog>
    );
}

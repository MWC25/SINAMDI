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

import { client } from '@/services/axios.config';

type InstitutionType =
    | 'HOSPITAL'
    | 'CLINIC'
    | 'SCHOOL'
    | 'COMPANY'
    | 'ONG'
    | 'DEVs';

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

type AddressInstitution = {
    id: string;
    street: string;
    number: string; // vem como string no GET
    complement: string | null;
    neighborhood: string;
    city: string;
    state: StateCode;
    zipCode: string;
};

type Institution = {
    id: string;
    name: string;
    type: InstitutionType;
    createdAt: string;
    updatedAt: string;
    address?: AddressInstitution | null;
};

type CreateInstitutionPayload = {
    name: string;
    type: InstitutionType;
    city: string;
    state: StateCode;
    street: string;
    number: string;
    neighborhood: string;
    zipCode: string;
    complement?: string;
};

const INSTITUTION_TYPE_LABELS: Record<InstitutionType, string> = {
    HOSPITAL: 'Hospital',
    CLINIC: 'Clinic',
    SCHOOL: 'School',
    COMPANY: 'Company',
    ONG: 'NGO',
    DEVs: 'Developers',
};

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

const INSTITUTION_TYPES: InstitutionType[] = [
    'HOSPITAL',
    'CLINIC',
    'SCHOOL',
    'COMPANY',
    'ONG',
    'DEVs',
];

export default function InstitutionsPage() {
    const [institutions, setInstitutions] = useState<Institution[]>([]);
    const [filteredInstitutions, setFilteredInstitutions] = useState<
        Institution[]
    >([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        loadInstitutions();
    }, []);

    // filtro local por nome/cidade
    useEffect(() => {
        const term = search.toLowerCase().trim();
        if (!term) {
            setFilteredInstitutions(institutions);
            return;
        }

        setFilteredInstitutions(
            institutions.filter(inst => {
                const name = inst.name.toLowerCase();
                const city = inst.address?.city?.toLowerCase() ?? '';
                return name.includes(term) || city.includes(term);
            })
        );
    }, [search, institutions]);

    async function loadInstitutions() {
        try {
            setIsLoading(true);

            const res = await client.get<{
                message: string;
                institutions: Institution[];
            }>('/institution/all');

            const list = res.data.institutions ?? [];
            setInstitutions(list);
            setFilteredInstitutions(list);
        } catch (error) {
            console.error('Error loading institutions:', error);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleCreateInstitution(payload: CreateInstitutionPayload) {
        try {
            setIsCreating(true);

            await client.post('/institution/create', {
                name: payload.name,
                type: payload.type, // ex: "DEVs"
                address: {
                    street: payload.street,
                    number: payload.number ? Number(payload.number) : undefined,
                    complement: payload.complement,
                    neighborhood: payload.neighborhood,
                    city: payload.city,
                    state: payload.state,
                    zipCode: payload.zipCode,
                },
            });

            // recarrega a lista pra vir já com address completo
            await loadInstitutions();
        } catch (error) {
            console.error('Error creating institution:', error);
        } finally {
            setIsCreating(false);
        }
    }

    async function handleDeleteInstitution(id: string) {
        const confirmed = window.confirm(
            'Are you sure you want to delete this institution?'
        );
        if (!confirmed) return;

        try {
            await client.delete(`/institution/delete/${id}`);
            setInstitutions(prev => prev.filter(inst => inst.id !== id));
        } catch (error) {
            console.error('Error deleting institution:', error);
        }
    }

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Header */}
            <header className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Institution Management
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Register, search and manage institutions connected to
                        the system.
                    </p>
                </div>

                <CreateInstitutionDialog
                    onCreate={handleCreateInstitution}
                    isSubmitting={isCreating}
                />
            </header>

            {/* Search bar */}
            <section className="flex items-center gap-2">
                <div className="relative w-full max-w-sm">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search by name or city..."
                        className="pl-9"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={loadInstitutions}
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
                            <TableHead>Type</TableHead>
                            <TableHead>City / State</TableHead>
                            <TableHead>Street</TableHead>
                            <TableHead>Created at</TableHead>
                            <TableHead className="w-[80px] text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && institutions.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    className="h-24 text-center text-sm text-muted-foreground">
                                    Loading institutions...
                                </TableCell>
                            </TableRow>
                        ) : filteredInstitutions.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    className="h-24 text-center text-sm text-muted-foreground">
                                    No institutions found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredInstitutions.map(inst => (
                                <TableRow key={inst.id}>
                                    <TableCell className="font-medium">
                                        {inst.name}
                                    </TableCell>
                                    <TableCell>
                                        {INSTITUTION_TYPE_LABELS[inst.type]}
                                    </TableCell>
                                    <TableCell>
                                        {inst.address
                                            ? `${inst.address.city} / ${inst.address.state}`
                                            : '-'}
                                    </TableCell>
                                    <TableCell>
                                        {inst.address
                                            ? `${inst.address.street}, ${inst.address.number}`
                                            : '-'}
                                    </TableCell>
                                    <TableCell>
                                        {new Date(
                                            inst.createdAt
                                        ).toLocaleDateString('pt-BR')}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={() =>
                                                handleDeleteInstitution(inst.id)
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

type CreateInstitutionDialogProps = {
    onCreate: (payload: CreateInstitutionPayload) => Promise<void> | void;
    isSubmitting: boolean;
};

function CreateInstitutionDialog({
    onCreate,
    isSubmitting,
}: CreateInstitutionDialogProps) {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<CreateInstitutionPayload>({
        name: '',
        type: 'SCHOOL',
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
            type: 'DEVs',
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
                    New institution
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create institution</DialogTitle>
                    <DialogDescription>
                        Fill in the fields below to register a new institution.
                    </DialogDescription>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleSubmit}>
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

                    <div className="grid gap-4 md:grid-cols-2">

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

                    <div className="grid gap-4 md:grid-cols-2">
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

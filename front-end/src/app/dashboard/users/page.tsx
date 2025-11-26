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

type Role = 'ADMIN' | 'COMMON' | 'PATIENT' | 'HEALTH_PROFESSIONAL';

type User = {
    id: string;
    username: string;
    registration: string;
    role: Role;
    isActive: boolean;
    createdAt: string;
    lastLogin: string | null;
};

type CreateUserPayload = {
    username: string;
    password: string;
    role: Role;
};

const ROLE_LABELS: Record<Role, string> = {
    ADMIN: 'Admin',
    COMMON: 'Common',
    PATIENT: 'Patient',
    HEALTH_PROFESSIONAL: 'Health professional',
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isCreating, setIsCreating] = useState(false);


    useEffect(() => {
        loadUsers();
    }, []);

    // local search filter by username or registration
    useEffect(() => {
        const term = search.toLowerCase().trim();
        if (!term) {
            setFilteredUsers(users);
            return;
        }

        setFilteredUsers(
            users.filter(
                u =>
                    u.username.toLowerCase().includes(term) ||
                    u.registration.toLowerCase().includes(term)
            )
        );
    }, [search, users]);

    async function loadUsers() {
        try {
            setIsLoading(true);
            const res = await client.get('/user/all');

            if (res.status !== 200) {
                throw new Error('Failed to load users');
            }

            const data: User[] = await res.data.users;
            setUsers(data);
            setFilteredUsers(data);
        } catch (error) {
            console.error(error);
            // aqui você pode plugar um toast do shadcn se quiser
        } finally {
            setIsLoading(false);
        }
    }

    async function handleCreateUser(payload: CreateUserPayload) {
        try {
            setIsCreating(true);

            const res = await client.post('/user/create', payload);

            if (res.status !== 200) {
                throw new Error('Failed to create user');
            }

            const newUser: User = await res.data.user;
            setUsers(prev => [newUser, ...prev]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsCreating(false);
        }
    }

    async function handleDeleteUser(id: string) {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        );
        if (!confirmed) return;

        try {
            const res = await client.delete(`/user/delete/${id}`);

            if (res.status !== 200 ) {
                throw new Error('Failed to delete user');
            }

            setUsers(prev => prev.filter(u => u.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Header */}
            <header className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        User Management
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Create, search and manage system users.
                    </p>
                </div>

                <CreateUserDialog
                    onCreate={handleCreateUser}
                    isSubmitting={isCreating}
                />
            </header>

            {/* Search bar */}
            <section className="flex items-center gap-2">
                <div className="relative w-full max-w-sm">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search by username or registration..."
                        className="pl-9"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={loadUsers}
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
                            <TableHead>Username</TableHead>
                            <TableHead>Registration</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Created at</TableHead>
                            <TableHead>Last login</TableHead>
                            <TableHead className="w-[80px] text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && users.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    className="h-24 text-center text-sm text-muted-foreground">
                                    Loading users...
                                </TableCell>
                            </TableRow>
                        ) : filteredUsers.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    className="h-24 text-center text-sm text-muted-foreground">
                                    No users found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredUsers.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">
                                        {user.username}
                                    </TableCell>
                                    <TableCell>{user.registration}</TableCell>
                                    <TableCell>
                                        {ROLE_LABELS[user.role]}
                                    </TableCell>
                                    <TableCell>
                                        {user.isActive ? 'Active' : 'Inactive'}
                                    </TableCell>
                                    <TableCell>
                                        {new Date(
                                            user.createdAt
                                        ).toLocaleDateString('pt-BR')}
                                    </TableCell>
                                    <TableCell>
                                        {user.lastLogin
                                            ? new Date(
                                                  user.lastLogin
                                              ).toLocaleString('pt-BR')
                                            : '-'}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={() =>
                                                handleDeleteUser(user.id)
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

type CreateUserDialogProps = {
    onCreate: (payload: CreateUserPayload) => Promise<void> | void;
    isSubmitting: boolean;
};

function CreateUserDialog({ onCreate, isSubmitting }: CreateUserDialogProps) {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<CreateUserPayload>({
        username: '',
        password: '',
        role: 'COMMON',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await onCreate(form);
        // se der erro na API você pode tratar dentro de onCreate e não fechar
        setOpen(false);
        setForm({
            username: '',
            password: '',
            role: 'COMMON',
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New user
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create user</DialogTitle>
                    <DialogDescription>
                        Fill in the fields below to create a new user.
                    </DialogDescription>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            name="username"
                            required
                            value={form.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Role</Label>
                        <Select
                            value={form.role}
                            onValueChange={value =>
                                setForm(prev => ({
                                    ...prev,
                                    role: value as Role,
                                }))
                            }>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="COMMON">Common</SelectItem>
                                <SelectItem value="ADMIN">Admin</SelectItem>
                                <SelectItem value="PATIENT">Patient</SelectItem>
                                <SelectItem value="HEALTH_PROFESSIONAL">
                                    Health professional
                                </SelectItem>
                            </SelectContent>
                        </Select>
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

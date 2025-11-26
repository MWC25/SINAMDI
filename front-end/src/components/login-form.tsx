'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginService } from '@/services/login.service';


export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'form'>) {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const data = await loginService(username, password);

            if (data.status === 200) {
                router.push('/dashboard');
            }

        } catch (err: any) {
            if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError('Erro ao fazer login. Tente novamente.');
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form
            className={cn('flex flex-col gap-6', className)}
            onSubmit={handleSubmit}
            {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Logue na sua conta</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Insira seu email abaixo para acessar sua conta
                </p>
            </div>

            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="username">Usuário</Label>
                    <Input
                        id="username"
                        type="text"
                        placeholder="mexample"
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>

                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Senha</Label>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Entrando...' : 'Login'}
                </Button>
            </div>
        </form>
    );
}

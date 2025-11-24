'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {

    const route = useRouter();

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Logue na sua conta</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Insira seu email abaixo para acessar sua conta
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/test"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button onClick={()=>{
            route.push('/dashboard');
        }} type="submit" className="w-full">
          Login
        </Button>
        </div>
    </form>
  )
}

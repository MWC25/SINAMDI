import { LoginForm } from "@/components/login-form";

export default function Login({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="max-w-sm border border-collapsese rounded-lg  p-6 shadow-md">
            <LoginForm/>
        </div>
    </main>
  );
}

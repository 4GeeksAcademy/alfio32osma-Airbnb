import Button from "@/components/ui/Button";

export default function HomePage(): JSX.Element {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Proyecto Next.js 16</h1>
      <p className="mt-3 text-center text-zinc-600">
        Base minima con App Router, TypeScript y Tailwind CSS.
      </p>
      <div className="mt-8 flex items-center gap-3">
        <Button variant="primary">Comenzar</Button>
        <Button variant="secondary">Ver mas</Button>
      </div>
    </main>
  );
}
import SalesForm from "@/components/forms/SalesForm";

export default function Home() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr]">
      <aside className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-neon">
        <SalesForm />
      </aside>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black/80 to-black/40 p-10 shadow-neon">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-neon-blue">
            HealthyMe Management System
            <span className="h-[1px] flex-1 bg-neon-blue/40" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Painel neon. Fluxo clinico no controle.
          </h1>
          <p className="max-w-2xl text-base text-white/70">
            Base pronta para acompanhar pacientes, consultas e financeiro. Tema
            escuro fixo, acentos neon, layout centralizado com sidebar retratil.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-neon-green/60 px-5 py-2 text-sm text-neon-green transition hover:bg-neon-green/10">
              Criar primeiro paciente
            </button>
            <button className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/70 transition hover:border-neon-blue/60 hover:text-neon-blue">
              Configurar agenda
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

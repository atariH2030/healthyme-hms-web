"use client";

import { useState } from "react";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="flex min-h-screen">
        <aside
          className={`flex flex-col border-r border-white/10 bg-black/60 px-4 py-6 transition-all duration-300 ${
            collapsed ? "w-20" : "w-64"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-neon-green/20 shadow-neon" />
              {!collapsed && (
                <div className="text-lg font-semibold tracking-tight">
                  HealthyMe
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => setCollapsed((value) => !value)}
              className="rounded-full border border-white/15 px-2 py-1 text-xs uppercase tracking-[0.2em] text-neon-blue hover:border-neon-blue/60"
              aria-pressed={collapsed}
            >
              {collapsed ? ">" : "<"}
            </button>
          </div>

          <nav className="mt-10 flex flex-1 flex-col gap-3 text-sm">
            {[
              "Dashboard",
              "Pacientes",
              "Consultas",
              "Financeiro",
              "Config",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className={`rounded-xl px-3 py-2 text-left transition ${
                  collapsed
                    ? "text-xs"
                    : "text-sm"
                } hover:bg-white/5 hover:text-neon-green`}
              >
                {collapsed ? item.slice(0, 3) : item}
              </button>
            ))}
          </nav>

          {!collapsed && (
            <div className="rounded-2xl border border-neon-blue/30 bg-black/40 p-4 text-xs text-white/70">
              Modo escuro ativo. Neon pronto.
            </div>
          )}
        </aside>

        <main className="flex-1 px-6 py-8">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}

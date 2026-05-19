"use client";

import { useEffect, useState } from "react";
import { searchPatients } from "@/services/patientService";
import type { Paciente } from "@/types/database.types";

export default function SalesForm() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Paciente[]>([]);
  const [selected, setSelected] = useState<Paciente | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      return;
    }

    let active = true;
    const handle = setTimeout(async () => {
      try {
        setLoading(true);
        const data = await searchPatients(trimmed);
        if (active) {
          setResults(data);
        }
      } finally {
        if (active) {
          setLoading(false);
          setOpen(true);
        }
      }
    }, 300);

    return () => {
      active = false;
      clearTimeout(handle);
    };
  }, [query]);

  const handleSelect = (patient: Paciente) => {
    setSelected(patient);
    setQuery(patient.nome_completo);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="text-xs uppercase tracking-[0.4em] text-neon-blue">
          Cadastro de venda
        </div>
        <p className="mt-2 text-sm text-white/60">
          Relacione paciente, atendimento e pagamento.
        </p>
      </div>

      <div className="relative">
        <label className="text-xs uppercase tracking-[0.3em] text-white/60">
          Buscar paciente
        </label>
        <input
          type="text"
          value={query}
          onChange={(event) => {
            const nextValue = event.target.value;
            setQuery(nextValue);
            setSelected(null);
            if (!nextValue.trim()) {
              setResults([]);
              setOpen(false);
              setLoading(false);
            }
          }}
          placeholder="Digite nome do paciente"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/40"
        />
        {loading && (
          <div className="mt-2 text-xs uppercase tracking-[0.3em] text-neon-blue">
            Carregando...
          </div>
        )}
        {open && !loading && (
          <div className="absolute z-10 mt-3 w-full rounded-2xl border border-white/10 bg-black/90 shadow-neon">
            {results.length === 0 ? (
              <div className="px-4 py-3 text-sm text-white/60">
                Nenhum paciente encontrado.
              </div>
            ) : (
              <ul className="max-h-56 overflow-auto">
                {results.map((patient) => (
                  <li key={patient.id}>
                    <button
                      type="button"
                      onClick={() => handleSelect(patient)}
                      className="flex w-full flex-col gap-1 px-4 py-3 text-left text-sm text-white/80 transition hover:bg-white/5 hover:text-neon-green"
                    >
                      <span className="text-white">
                        {patient.nome_completo}
                      </span>
                      <span className="text-xs text-white/50">{patient.cpf}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {selected && (
          <div className="mt-2 text-xs text-neon-green">
            Selecionado: {selected.nome_completo}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="tipo-atendimento"
          className="text-xs uppercase tracking-[0.3em] text-white/60"
        >
          Tipo de atendimento
        </label>
        <select
          id="tipo-atendimento"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/40"
        >
          <option value="">Selecione</option>
          <option value="avaliacao">Avaliacao</option>
          <option value="retorno-avulso">Retorno Avulso</option>
          <option value="pacote">Pacote</option>
          <option value="renovacao">Renovacao</option>
        </select>
      </div>

      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-white/60">
          Valor total (R$)
        </label>
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="0,00"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/40"
        />
      </div>

      <div>
        <label
          htmlFor="forma-pagamento"
          className="text-xs uppercase tracking-[0.3em] text-white/60"
        >
          Forma de pagamento
        </label>
        <select
          id="forma-pagamento"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/40"
        >
          <option value="">Selecione</option>
          <option value="pix">Pix</option>
          <option value="debito">Debito</option>
          <option value="credito">Credito</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="voucher">Voucher</option>
        </select>
      </div>

      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-white/60">
          Numero da NF-e
        </label>
        <input
          type="text"
          placeholder="000000000"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-neon-blue/70 focus:ring-1 focus:ring-neon-blue/40"
        />
      </div>

      <button
        type="button"
        className="rounded-2xl border border-neon-green/60 bg-neon-green/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-neon-green transition hover:bg-neon-green/20 hover:shadow-neon"
      >
        Salvar venda
      </button>
    </div>
  );
}

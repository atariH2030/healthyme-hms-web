import { supabase } from "../lib/supabaseClient";
import type { Paciente } from "../types/database.types";

export async function searchPatients(query: string): Promise<Paciente[]> {
  const { data, error } = await supabase
    .from("pacientes")
    .select("*")
    .ilike("nome_completo", `%${query}%`);

  if (error) {
    throw error;
  }

  return (data ?? []) as Paciente[];
}

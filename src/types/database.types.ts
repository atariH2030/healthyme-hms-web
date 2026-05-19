export interface Paciente {
  id: string;
  nome_completo: string;
  cpf: string;
  data_nascimento: string;
  observacoes_clinicas: string;
}

export interface Venda {
  id: string;
  paciente_id: string;
  usuario_id: string;
  tipo_atendimento: string;
  valor_total: number;
  nfe_numero: string;
  nfe_url: string;
  comissao_gerada: boolean;
}

export interface Pagamento {
  id: string;
  venda_id: string;
  metodo_pagamento: string;
  valor_pago: number;
  parcelas: number;
}

export interface Voucher {
  id: string;
  venda_origem_id: string;
  beneficiario_nome: string;
  codigo_voucher: string;
  status: string;
  valor_monetario: number;
}

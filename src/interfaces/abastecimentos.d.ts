export interface IAbastecimento {
  autorizacao: string;
  cota: boolean;
  created_at: Date;
  data: Date;
  grupo_id?: null;
  id: number;
  id_combustivel: number;
  id_endereco: number;
  id_imagen: number;
  id_lubrificante: number;
  id_motorista: number;
  id_posto: number;
  id_secretaria: number;
  id_veiculo: number;
  km: number;
  km_antigo: string;
  km_l: string;
  lubrificante_lt: number;
  obs: string;
  quantidade_lt: number;
  updated_at: Date;
  valor_total: number;
}

export interface IEndereco {
  id: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  createdAt: Date;
  updatedAt: Date;
  regiao: string;
}

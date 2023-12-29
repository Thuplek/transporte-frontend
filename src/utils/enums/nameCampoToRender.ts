const enumCampo = {
  autorizacao: 'Autorização',
  valor_total: 'Valor total',
  quantidade_lt: 'Quantidade lt',
  data: 'Data',
  obs: 'Observação',
  cota: 'Cota',
  km: 'Km',
  km_l: 'Km/l',
  id_combustivel: 'Combustível',
  id_endereco: 'Endereço',
  id_lubrificante: 'Lubrificante',
  lubrificante_lt: 'Lubrificante lt',
  id_motorista: 'Motorista',
  id_posto: 'Posto',
  id_secretaria: 'Secretaria',
  id_veiculo: 'Veículo',
};

const nameCampoToRender = (campo: string) => {
  //@ts-ignore
  return enumCampo[campo];
};
export default nameCampoToRender;

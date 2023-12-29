import { formatLts, formatMoney } from '@utils/format';
import { formatDecimal } from './decimal';
import { visualizeDate } from './date';

export const renderValorTypeOf = (value: string | number | Date) => {
  switch (typeof value) {
    case 'string':
      return value?.toString;
    case 'number':
      return value;
    case 'object':
      return value?.toISOString();
    default:
      return '-';
      break;
  }
};
export const renderValorPdfName = (
  name: string,
  value: string | number | Date
) => {
  // valor_total: 'Valor total',
  // quantidade_lt: 'Quantidade lt',
  // data: 'Data',
  // obs: 'Observação',
  // cota: 'Cota',
  // km: 'Km',
  // km_l: 'Km/l',
  // id_combustivel: 'Combustível',
  // id_endereco: 'Endereço',
  // id_lubrificante: 'Lubrificante',
  // lubrificante_lt: 'Lubrificante lt',
  // id_motorista: 'Motorista',
  // id_posto: 'Posto',
  // id_secretaria: 'Secretaria',
  // id_veiculo: 'Veículo',
  switch (name) {
    case 'autorizacao':
      return value;
    case 'valor_total':
      return formatMoney(value);
    case 'quantidade_lt':
      return formatLts(value);
    case 'data':
      return visualizeDate(value);
    case 'obs':
      return value;
    case 'cota':
      return value ? 'Sim' : 'Não';
    case 'km':
      return value;
    case 'km_l':
      return value;
    case 'id_combustivel':
      return value;
    case 'id_endereco':
      return value;
    case 'id_lubrificante':
      return value;
    case 'lubrificante_lt':
      return value;
    case 'id_motorista':
      return value;
    case 'id_posto':
      return value;
    case 'id_secretaria':
      return value;
    case 'id_veiculo':
      return value;
    default:
      return value;
  }
};

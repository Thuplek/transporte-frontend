import { formatLts, formatMoney } from '@utils/format';
import { visualizeDate } from './date';
import { ReactNode } from 'react';

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
  value: string | number | Date | null
):ReactNode => {
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
      return value?.toString();
    case 'valor_total':
      return formatMoney(value as number);
    case 'quantidade_lt':
      return formatLts(value as number);
    case 'data':
      return visualizeDate(value as Date);
    case 'obs':
      return value?.toString();
    case 'cota':
      return value ? 'Sim' : 'Não';
    case 'km':
      return value?.toString();
    case 'km_l':
      return value?.toString();
    case 'id_combustivel':
      return value?.toString();
    case 'id_endereco':
      return value?.toString();
    case 'id_lubrificante':
      return value?.toString();
    case 'lubrificante_lt':
      return value?.toString();
    case 'id_motorista':
      return value?.toString();
    case 'id_posto':
      return value?.toString();
    case 'id_secretaria':
      return value?.toString();
    case 'id_veiculo':
      return value?.toString();
    default:
      return value?.toString();
  }
};

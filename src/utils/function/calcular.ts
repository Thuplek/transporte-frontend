//@ts-nocheck
import { formatLts, formatMoney } from '@utils/format';

export function CalcularValoresTotais(data) {
  let totalLitros = 0;
  let totalValor = 0;
  data.forEach((item: { quantidade_lt: number; valor_total: number }) => {
    totalLitros += item.quantidade_lt;
    totalValor += item.valor_total;
  });

  return {
    totalLitros: formatLts(totalLitros),
    totalValor: formatMoney(totalValor),
  };
}

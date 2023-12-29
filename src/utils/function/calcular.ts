import { formatLts, formatMoney } from "@utils/format";

export function CalcularValoresTotais(data) {
  let totalLitros = 0;
  let totalValor = 0;
  data.forEach((item) => {
    totalLitros += item.quantidade_lt;
    totalValor += item.valor_total;
  });

  return {
    totalLitros:formatLts(totalLitros),
    totalValor:formatMoney(totalValor),
  };
}

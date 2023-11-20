import { ICombustivel } from '@app/interfaces/combustivel';

export const getCombustivelById = (
  id: number,
  lsCombustivel: ICombustivel[]
) => {
  return lsCombustivel?.find((combustivel) => combustivel.id === id);
};

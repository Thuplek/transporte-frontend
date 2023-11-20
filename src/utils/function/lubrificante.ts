import { ILubrificante } from '@app/interfaces/lubrificante';

export const getlubrificanteById = (
  id: number,
  lsLubrificante: ILubrificante[]
) => {
  return lsLubrificante?.find((lubrificante) => lubrificante.id === id);
};

import { IPosto } from '@app/interfaces/posto';

export const getPostoById = (id: number, lsPosto: IPosto[]) => {
  return lsPosto?.find((posto) => posto.id === id);
};

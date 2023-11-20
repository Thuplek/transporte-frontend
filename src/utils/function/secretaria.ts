import { ISecretaria } from '@app/interfaces/secretaria';

export const getSecretariaById = (id: number, lsSecretaria: ISecretaria[]) => {
  return lsSecretaria?.find((secretaria) => secretaria.id === id);
};

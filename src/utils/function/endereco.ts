import { IEndereco } from '@app/interfaces/endereco';

export const getEnderecoById = (id: number, lsEndereco: IEndereco[]) => {
  return lsEndereco?.find((endereco) => endereco.id === id) ;
};

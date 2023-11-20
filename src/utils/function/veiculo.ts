import { IVeiculo } from '@app/interfaces/veiculo';

export const getVeiculoById = (id: number, lsveiculo: IVeiculo[]) => {
  return lsveiculo?.find((veiculo) => veiculo.id === id);
};

import { IMotorista } from '@app/interfaces/motorista';

export const getMotoristaById = (id: number, lsMotorista: IMotorista[]) => {
  return lsMotorista?.find((motorista) => motorista.id === id);
};

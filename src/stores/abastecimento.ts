import { IAbastecimento } from '@app/interfaces/abastecimentos';
import { create } from 'zustand';

type StoreType = {
  lsAbastecimento: IAbastecimento[] | null;
  setLsAbastecimento: (lsAbastecimento: IAbastecimento[] ) => void;
};
const initialState = {
  lsAbastecimento: null,
};

const AbastecimentoStore = create<StoreType>((set) => ({
  ...initialState,
  setLsAbastecimento: (lsAbastecimento) => set(() => ({ lsAbastecimento })),
}));

export default AbastecimentoStore;

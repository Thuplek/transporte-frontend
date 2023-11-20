import { create } from 'zustand';

type StoreType = {
  lsAbastecimento: [] | null;
  setLsAbastecimento: (lsAbastecimento: [] ) => void;
};
const initialState = {
  lsAbastecimento: null,
};

const AbastecimentoStore = create<StoreType>((set) => ({
  ...initialState,
  setLsAbastecimento: (lsAbastecimento:[]) => set(() => ({ lsAbastecimento })),
}));

export default AbastecimentoStore;

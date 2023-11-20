import { create } from 'zustand';

type StoreType = {
  lsVeiculos: [] | null;
  setLsVeiculos: (lsAbastecimento: [] ) => void;
};
const initialState = {
    lsVeiculos: null,
};

const VeiculoStore = create<StoreType>((set) => ({
  ...initialState,
  setLsVeiculos: (lsVeiculos:[]) => set(() => ({ lsVeiculos: lsVeiculos })),
}));

export default VeiculoStore;

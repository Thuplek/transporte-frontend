import { ICombustivel } from '@app/interfaces/combustivel';
import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

type StoreType = {
  lsCombustivel: ICombustivel[] | null;
  setLsCombustivel: (lsCombustivel: ICombustivel[]) => void;
};
const initialState = {
  lsCombustivel: null,
};



const CombustivelStore = create<StoreType>((set, get) => ({
  ...initialState,
  setLsCombustivel: (lsCombustivel) => set(() => ({ lsCombustivel })),
  
}));

mountStoreDevtool('CombustivelStore', CombustivelStore);

export default CombustivelStore;

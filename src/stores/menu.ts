import { create } from 'zustand';

type StoreType = {
  open: boolean;
  toogleOpenMenu: () => void;
};
const initialState = {
    open: false,
};



const MenuStore = create<StoreType>((set) => ({
  ...initialState,
  toogleOpenMenu: () => set((state) => ({ open: !state.open })),
  
}));


export default MenuStore;

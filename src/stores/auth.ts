import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


type StoreType = {
  token: string | null;
  setIsAutenticated: (token?: string) => void;
};
const initialState = {
  token: null,
};

const AuthStore = create<StoreType>()(
  persist(
    (set) => ({
      ...initialState,
      setIsAutenticated: (token) => {
        return set(() => ({ token }));
      },
    } ),
    { name: 'auth',storage:createJSONStorage(() => sessionStorage) }
  )
);

export default AuthStore;

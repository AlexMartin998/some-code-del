import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  isAuth: boolean;
  user : any;

  setToken: (token: string | null) => void;
  setIsAuth: (isAuth: boolean) => void;

  onLogout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      token: null,
      isAuth: false,
      user: null,

      setToken: token => set({ token }),
      setIsAuth: isAuth => set({ isAuth }),
      onLogout: () => {
        set({ token: null, isAuth: false });
      },
    }),

    {
      name: 'auth-store',
    }
  )
);

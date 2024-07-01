import { ColorMode } from '@/theme/utils';
import { create } from 'zustand';

interface UiStateStore {
  isNavOpen: boolean;
  isNavOpenMobile: boolean;
  colorMode: ColorMode;

  setIsNavOpen: (isOpen: boolean) => void;
  setIsNavOpenMobile: (isOpen: boolean) => void;
  setColorMode: (mode: ColorMode) => void;
}

export const useUiStore = create<UiStateStore>(set => ({
  isNavOpen: true,
  isNavOpenMobile: false,
  colorMode: 'light',

  setIsNavOpen: isOpen => set({ isNavOpen: isOpen }),
  setIsNavOpenMobile: isOpen => set({ isNavOpenMobile: isOpen }),

  setColorMode: mode => set({ colorMode: mode }),
}));

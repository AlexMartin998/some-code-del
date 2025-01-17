import { Theme, createTheme } from '@mui/material/styles';

import { components } from '../components/components';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';

declare module '@mui/material/styles/createPalette' {
  interface PaletteRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  }

  interface Palette {
    neutral: PaletteRange;
  }

  interface PaletteOptions {
    neutral?: PaletteRange;
  }

  interface TypeBackground {
    level1: string;
    level2: string;
    level3: string;
  }
}

export type ColorMode = 'light' | 'dark';

export function createAppTheme(mode: ColorMode = 'light'): Theme {
  const theme = createTheme({
    palette: palette(mode),
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 } },
    components: components as any,
    shadows,
    shape: { borderRadius: 8 },
    typography,
  });

  return theme;
}

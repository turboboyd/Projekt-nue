import { createContext } from 'react';
/* eslint no-unused-vars: ["off", { "varsIgnorePattern": "^[A-Z_]+$" }] */

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

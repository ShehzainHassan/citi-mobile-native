import React, { ReactNode, createContext } from 'react';
import { useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { darkTheme, lightTheme, Theme } from '../theme';
import {
  setThemeMode as setThemeModeAction,
  ThemeMode,
} from '@/store/slices/theme/themeSlice';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const themeMode = useSelector((state: RootState) => state.theme.themeMode);
  const dispatch = useDispatch();

  const isDark =
    themeMode === 'system'
      ? systemColorScheme === 'dark'
      : themeMode === 'dark';
  const theme: Theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    const nextMode: ThemeMode =
      themeMode === 'light'
        ? 'dark'
        : themeMode === 'dark'
        ? 'system'
        : 'light';
    dispatch(setThemeModeAction(nextMode));
  };

  const setMode = (mode: ThemeMode) => {
    dispatch(setThemeModeAction(mode));
  };

  return (
    <ThemeContext.Provider
      value={{ theme, isDark, themeMode, toggleTheme, setThemeMode: setMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

import { useMemo } from 'react';
import { useTheme } from '../theme';
import { createGlobalStyles } from '../theme/globalStyles';

/**
 * Custom hook for accessing themed styles
 * Usage: const { theme, globalStyles } = useStyles();
 */
export const useStyles = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  
  const globalStyles = useMemo(() => createGlobalStyles(theme), [theme]);
  
  return {
    theme,
    globalStyles,
    isDark,
    toggleTheme,
  };
};

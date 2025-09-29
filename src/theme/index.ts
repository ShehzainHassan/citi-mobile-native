// Theme configuration for consistent UI styling
// Colors, typography, spacing, shadows, dimensions
// Light and dark theme variants
// Component-specific styling presets

// ------------------------------------------------------------
// IMPORTANT: DO NOT import lightTheme directly in components!
// 
// Use theme context: const theme = useTheme(); then theme.colors.primary
// This allows proper theme switching and consistent styling
// ------------------------------------------------------------
export const lightTheme = {
  colors: {
    primary: '#3629B7',
    background: '#FFFFFF',
    text: '#343434',
    // Add more colors
  },
  typography: {
    fontSize: {
      sm: 12,
      base: 14,
      lg: 16,
      // Add more sizes
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    // Add more spacing
  },
};

export type Theme = typeof lightTheme;

// Re-export theme utilities
export { createStyledComponent, getThemeValue } from './styled';
export { ThemeProvider, useTheme } from './ThemeProvider';


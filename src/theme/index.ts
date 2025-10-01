// Theme configuration for consistent UI styling
// Colors, typography, spacing, shadows, dimensions
// Light and dark theme variants
// Component-specific styling presets

// ------------------------------------------------------------
// IMPORTANT: DO NOT import lightTheme/ darkTheme directly in components!
//
// Use theme context: const theme = useTheme(); then theme.colors.primary
// This allows proper theme switching and consistent styling
// ------------------------------------------------------------
export const lightTheme = {
  colors: {
    // Add more colors
    primary: "#3629B7",
    background: "#FFFFFF",
    text: "#343434",
    surface: "#F5F5F5",
    border: "#CBCBCB",
    neutral: "#CACACA",
    neutral2: "#898989",
  },
  typography: {
    fontSize: {
      // Add more font sizes
      sm: 12,
      base: 14,
      lg: 16,
      xl: 20,
      xxl: 24,
    },
  },
  spacing: {
    // Add more spacing
    xs: 4,
    sm: 8,
    ms: 12,
    md: 16,
    ml: 20,
    lg: 24,
    lgx: 28,
    xl: 32,
  },
};

export const darkTheme = {
  colors: {
    // Add more colors
    primary: "#5B4FE8",
    background: "#121212",
    text: "#FFFFFF",
    surface: "#1E1E1E",
    border: "#333333",
    neutral: "#CACACA",
    neutral2: "#898989",
  },
  typography: {
    fontSize: {
      // Add more font sizes
      sm: 12,
      base: 14,
      lg: 16,
      xl: 20,
      xxl: 24,
    },
  },
  spacing: {
    // Add more spacing
    xs: 4,
    sm: 8,
    ms: 12,
    md: 16,
    ml: 20,
    lg: 24,
    lgx: 28,
    xl: 32,
  },
};

export type Theme = typeof lightTheme;

// Re-export theme utilities
export { createStyledComponent, getThemeValue } from "./styled";
export { ThemeProvider, useTheme } from "./ThemeProvider";

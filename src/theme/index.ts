// Theme configuration for consistent UI styling
// Colors, typography, spacing, shadows, dimensions
// Light and dark theme variants
// Component-specific styling presets

// ------------------------------------------------------------
// IMPORTANT: DO NOT import lightTheme/ darkTheme directly in components!
//
// Use theme context: const theme = useTheme(); then theme.colors.primary1
// This allows proper theme switching and consistent styling
// ------------------------------------------------------------
import { darkTheme } from './dark';
import { lightTheme } from './light';

export type Theme = typeof lightTheme;

export { ThemeProvider, useTheme } from '../styles/ThemeProvider';
export { darkTheme, lightTheme };

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
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export type Theme = typeof lightTheme;

export { createStyledComponent, getThemeValue } from "../styles/styled";
export { ThemeProvider, useTheme } from "../styles/ThemeProvider";
export { darkTheme, lightTheme };

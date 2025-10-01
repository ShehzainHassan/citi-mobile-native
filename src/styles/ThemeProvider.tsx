// Theme Provider for consistent theming across the app
// Provides theme context to all components
// Handles theme switching (light/dark mode)

import React, { createContext, ReactNode, useContext, useState } from "react";
import { darkTheme, lightTheme, Theme } from "../theme/index";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = lightTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    // Toggle between light and dark themes
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setTheme(newIsDark ? darkTheme : lightTheme);
  };

  const value = {
    theme,
    isDark,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to use theme
// Usage in components: const { theme } = useTheme();
// Then use: theme.colors.primary, theme.spacing.md, etc.
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

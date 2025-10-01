import { createAuthStyles } from "@/styles/auth.styles";
import { createButtonStyles } from "@/styles/button.styles";
import { createCheckboxStyles } from "@/styles/checkbox.styles";
import { createForgotPasswordStyles } from "@/styles/forgotPassword.styles";
import { createHomeScreenStyles } from "@/styles/homeScreen.styles";
import { createHomeScreenCardStyles } from "@/styles/homeScreenCard.styles";
import { createTabStyles } from "@/styles/tabs.styles";
import { useMemo } from "react";
import { createGlobalStyles } from "../styles/global.styles";
import { useTheme } from "../theme";

/**
 * Custom hook for accessing themed styles
 * Usage: const { theme, globalStyles } = useStyles();
 */
export const useStyles = () => {
  const { theme, isDark, toggleTheme } = useTheme();

  const globalStyles = useMemo(() => createGlobalStyles(theme), [theme]);
  const buttonStyles = useMemo(() => createButtonStyles(theme), [theme]);
  const checkboxStyles = useMemo(() => createCheckboxStyles(theme), [theme]);
  const forgotPasswordStyles = useMemo(
    () => createForgotPasswordStyles(theme),
    [theme]
  );
  const authStyles = useMemo(() => createAuthStyles(theme), [theme]);
  const homeCardStyles = useMemo(
    () => createHomeScreenCardStyles(theme),
    [theme]
  );
  const homeScreenStyles = useMemo(
    () => createHomeScreenStyles(theme),
    [theme]
  );
  const tabStyles = useMemo(() => createTabStyles(theme), [theme]);
  return {
    theme,
    globalStyles,
    forgotPasswordStyles,
    buttonStyles,
    checkboxStyles,
    authStyles,
    homeCardStyles,
    homeScreenStyles,
    tabStyles,
    isDark,
    toggleTheme,
  };
};

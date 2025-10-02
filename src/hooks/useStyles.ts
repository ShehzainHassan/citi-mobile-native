import { createButtonStyles } from "@/components/ui/Button/Button.styles";
import { createCardDetailsStyles } from "@/components/ui/Cards/CardDetails/CardDetails.styles";
import { createCheckboxStyles } from "@/components/ui/Checkbox/Checkbox.styles";
import { createInputStyles } from "@/components/ui/Input/Input.styles";
import { createAccountScreenStyles } from "@/styles/account.styles";
import { createAuthStyles } from "@/styles/auth.styles";
import { createForgotPasswordStyles } from "@/styles/forgotPassword.styles";
import { createHomeScreenStyles } from "@/styles/homeScreen.styles";
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
  const homeScreenStyles = useMemo(
    () => createHomeScreenStyles(theme),
    [theme]
  );
  const tabStyles = useMemo(() => createTabStyles(theme), [theme]);
  const accountScreenStyles = useMemo(
    () => createAccountScreenStyles(theme),
    [theme]
  );
  const cardDetailStyles = useMemo(
    () => createCardDetailsStyles(theme),
    [theme]
  );
  const inputStyles = useMemo(() => createInputStyles(theme), [theme]);
  return {
    theme,
    globalStyles,
    forgotPasswordStyles,
    buttonStyles,
    checkboxStyles,
    authStyles,
    homeScreenStyles,
    tabStyles,
    accountScreenStyles,
    cardDetailStyles,
    inputStyles,
    isDark,
    toggleTheme,
  };
};

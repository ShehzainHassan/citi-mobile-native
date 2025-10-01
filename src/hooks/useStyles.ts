import { createAuthStyles } from "@/theme/authStyles";
import { createForgotPasswordStyles } from "@/theme/forgotPassword.styles";
import { createLoginStyles } from "@/theme/loginScreen.styles";
import { useMemo } from "react";
import { useTheme } from "../theme";
import { createGlobalStyles } from "../theme/globalStyles";
import { createSignUpStyles } from "@/theme/signUpScreen.styles";
import { createButtonStyles } from "@/theme/button.styles";
import { createCheckboxStyles } from "@/theme/checkboxStyles";

/**
 * Custom hook for accessing themed styles
 * Usage: const { theme, globalStyles } = useStyles();
 */
export const useStyles = () => {
  const { theme, isDark, toggleTheme } = useTheme();

  const globalStyles = useMemo(() => createGlobalStyles(theme), [theme]);
  const loginStyles = useMemo(() => createLoginStyles(theme), [theme]);
  const signUpStyles = useMemo(() => createSignUpStyles(theme), [theme]);
  const buttonStyles = useMemo(() => createButtonStyles(theme), [theme]);
  const checkboxStyles = useMemo(() => createCheckboxStyles(theme), [theme]);
  const forgotPasswordStyles = useMemo(
    () => createForgotPasswordStyles(theme),
    [theme]
  );
  const authStyles = useMemo(() => createAuthStyles(theme), [theme]);
  return {
    theme,
    globalStyles,
    loginStyles,
    signUpStyles,
    forgotPasswordStyles,
    buttonStyles,
    checkboxStyles,
    authStyles,
    isDark,
    toggleTheme,
  };
};

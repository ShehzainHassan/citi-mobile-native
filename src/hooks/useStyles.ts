import { createCardDetailsStyles } from "@/components/ui/Cards/CardDetails/CardDetails.styles";
import { createInputStyles } from "@/components/ui/Input/Input.styles";
import { createAccountScreenStyles } from "@/styles/account.styles";
import { createAuthStyles } from "@/styles/auth.styles";
import { createHomeScreenStyles } from "@/styles/homeScreen.styles";
import { createTabStyles } from "@/styles/tabs.styles";
import { createTransactionReportStyles } from "@/styles/transactionReport.styles";
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
  const transactionReportStyles = useMemo(
    () => createTransactionReportStyles(theme),
    [theme]
  );

  return {
    theme,
    globalStyles,
    authStyles,
    homeScreenStyles,
    tabStyles,
    accountScreenStyles,
    cardDetailStyles,
    inputStyles,
    transactionReportStyles,
    isDark,
    toggleTheme,
  };
};

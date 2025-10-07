import { createAccountScreenStyles } from "@/styles/account.styles";
import { useTheme } from "@/theme";
import { useMemo } from "react";

export const useAccountScreenStyles = () => {
  const { theme } = useTheme();
  return useMemo(() => createAccountScreenStyles(theme), [theme]);
};

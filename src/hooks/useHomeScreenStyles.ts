import { createHomeScreenStyles } from "@/styles/homeScreen.styles";
import { useTheme } from "@/theme";
import { useMemo } from "react";

export const useHomeScreenStyles = () => {
  const { theme } = useTheme();
  return useMemo(() => createHomeScreenStyles(theme), [theme]);
};

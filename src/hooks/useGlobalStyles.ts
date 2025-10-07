import { createGlobalStyles } from "@/styles/global.styles";
import { useTheme } from "@/theme";
import { useMemo } from "react";

export const useGlobalStyles = () => {
  const { theme } = useTheme();
  return useMemo(() => createGlobalStyles(theme), [theme]);
};

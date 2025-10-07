import { createTabStyles } from "@/styles/tabs.styles";
import { useTheme } from "@/theme";
import { useMemo } from "react";

export const useTabStyles = () => {
  const { theme } = useTheme();
  return useMemo(() => createTabStyles(theme), [theme]);
};

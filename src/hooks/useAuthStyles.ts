import { createAuthStyles } from "@/styles/auth.styles";
import { useTheme } from "@/theme";
import { useMemo } from "react";

export const useAuthStyles = () => {
  const { theme } = useTheme();
  return useMemo(() => createAuthStyles(theme), [theme]);
};

import { createInputStyles } from "@/components/ui/Input/Input.styles";
import { useTheme } from "@/theme";
import { useMemo } from "react";

export const useInputStyles = () => {
  const { theme } = useTheme();
  return useMemo(() => createInputStyles(theme), [theme]);
};

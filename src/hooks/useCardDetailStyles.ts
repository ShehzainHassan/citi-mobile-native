import { createCardDetailsStyles } from "@/components/ui/Cards/CardDetails/CardDetails.styles";
import { useTheme } from "@/theme";
import { useMemo } from "react";

export const useCardDetailStyles = () => {
  const { theme } = useTheme();
  return useMemo(() => createCardDetailsStyles(theme), [theme]);
};

import { useMemo } from "react";
import { useTheme } from "@/theme";
import { createTransactionReportStyles } from "@/styles/transactionReport.styles";

export const useTransactionReportStyles = () => {
  const { theme } = useTheme();
  return useMemo(() => createTransactionReportStyles(theme), [theme]);
};

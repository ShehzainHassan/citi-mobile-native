import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
export const createExchangeStyles = (theme: Theme) =>
  StyleSheet.create({
    logo: {
      width: "100%",
      height: 213,
    },
    exchangeContainer: {
      padding: theme.spacing.md,
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.lg,
      shadowColor: theme.colors.primary1,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.07,
      shadowRadius: theme.radius.lg,
      elevation: 4,
    },
    arrowContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    bottomContainer: {
      gap: theme.spacing.xl * 2,
    },
    currencyContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

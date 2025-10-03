import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createCreditCardStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 220,
      padding: theme.spacing.ml,
      paddingHorizontal: theme.spacing.xl,
    },
    titleContainer: {
      gap: theme.spacing.xl,
    },
    subContainer: {
      gap: theme.spacing.ms,
    },
    amount: {
      marginTop: theme.spacing.xs - 2,
      color: theme.colors.neutral6,
    },
    cardNumberContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
    },
    dotsContainer: {
      flexDirection: "row",
      gap: theme.spacing.xs - 2,
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: theme.radius.xs,
      backgroundColor: theme.colors.neutral6,
    },
  });

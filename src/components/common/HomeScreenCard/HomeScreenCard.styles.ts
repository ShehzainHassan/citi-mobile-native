import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createHomeScreenCardStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.ms,
      padding: theme.spacing.ms,
      backgroundColor: theme.colors.neutral6,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.05,
      shadowRadius: 6,
      elevation: 3,
      width: 100,
      height: 100,
      borderRadius: theme.radius.md,
    },
    cardImg: {
      width: 28,
      height: 28,
    },
    cardText: {
      color: theme.colors.textdefault,
      textAlign: "center",
    },
  });

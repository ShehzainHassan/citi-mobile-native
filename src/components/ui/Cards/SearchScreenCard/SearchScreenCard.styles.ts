import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createSearchScreenCardStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: theme.spacing.md,
      padding: theme.spacing.md,
      borderRadius: theme.radius.md,
      backgroundColor: theme.colors.neutral6,
      justifyContent: "space-between",
      height: 110,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.05,
      shadowRadius: 30,
      elevation: 5,
    },
    textContainer: {
      gap: theme.spacing.sm,
    },
    img: {
      width: 100,
      height: "auto",
    },
  });

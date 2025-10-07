import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createSearchScreenCardStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.md,
      elevation: 5,
      flexDirection: "row",
      gap: theme.spacing.md,
      height: 110,
      justifyContent: "space-between",
      padding: theme.spacing.md,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.05,
      shadowRadius: 30,
    },
    img: {
      height: "auto",
      width: 100,
    },
    textContainer: {
      gap: theme.spacing.sm,
    },
  });

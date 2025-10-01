import { StyleSheet } from "react-native";
import { Theme } from ".";

export const createButtonStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      alignItems: "center",
      justifyContent: "center",
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
    secondary: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    text: {
      fontSize: theme.typography.fontSize.base,
      fontWeight: "600",
      color: theme.colors.background,
    },
    textSecondary: {
      color: theme.colors.primary,
    },
    disabled: {
      opacity: 0.6,
    },
  });

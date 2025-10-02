import { StyleSheet } from "react-native";
import { Theme } from "../../../theme";

export const createButtonStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.radius.sm,
      alignItems: "center",
      justifyContent: "center",
    },
    primary: {
      backgroundColor: theme.colors.primary1,
    },
    secondary: {
      backgroundColor: theme.colors.primary4,
    },
    text: {
      fontSize: theme.typography.fontSize.base,
      fontWeight: "600",
      color: theme.colors.neutral6,
    },
    textSecondary: {
      color: theme.colors.neutral1,
    },
    disabled: {
      opacity: 0.6,
    },
  });

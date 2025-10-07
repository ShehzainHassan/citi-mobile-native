import { StyleSheet } from "react-native";
import { Theme } from "../../../theme";

export const createButtonStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      borderRadius: theme.radius.sm,
      justifyContent: "center",
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
    },
    disabled: {
      opacity: 0.6,
    },
    primary: {
      backgroundColor: theme.colors.primary1,
    },
    secondary: {
      backgroundColor: theme.colors.primary4,
    },

    text: {
      color: theme.colors.neutral6,
      fontSize: theme.typography.fontSize.base,
      fontWeight: "600",
    },
  });

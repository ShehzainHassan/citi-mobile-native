import { StyleSheet } from "react-native";
import { Theme } from "../../../theme";

export const createButtonStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      borderRadius: theme.radius.sm,
      justifyContent: "center",
    },
    contentContainer: {
      alignItems: "center",
      flexDirection: "row",
      gap: theme.spacing.xs,
      justifyContent: "center",
    },
    disabled: {
      opacity: 0.6,
    },
    fullWidth: {
      width: "100%",
    },
    ghost: {
      backgroundColor: "transparent",
    },
    large: {
      paddingHorizontal: 32,
      paddingVertical: 16,
    },
    medium: {
      paddingHorizontal: 24,
      paddingVertical: 12,
    },
    outline: {
      backgroundColor: "transparent",
      borderColor: theme.colors.primary1,
      borderWidth: 1,
    },

    primary: {
      backgroundColor: theme.colors.primary1,
    },
    secondary: {
      backgroundColor: theme.colors.primary4,
      color: theme.colors.neutral1,
    },
    small: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },

    text_large: {
      color: theme.colors.neutral6,
      fontSize: 18,
      fontWeight: "600",
    },
    text_medium: {
      color: theme.colors.neutral6,
      fontSize: 16,
      fontWeight: "600",
    },
    text_secondary: {
      color: theme.colors.neutral1,
    },

    text_small: {
      color: theme.colors.neutral6,
      fontSize: 14,
      fontWeight: "600",
    },
  });

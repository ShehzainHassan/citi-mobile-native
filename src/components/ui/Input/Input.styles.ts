import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
export const createInputStyles = (theme: Theme) =>
  StyleSheet.create({
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.md,
      marginBottom: theme.spacing.ms,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.radius.md,
      padding: theme.spacing.ms,
      backgroundColor: theme.colors.neutral6,
    },
    inputLabel: {
      color: theme.colors.textdefault,
    },
    inputFocused: {
      outlineColor: theme.colors.primary1,
      borderColor: theme.colors.primary1,
    },
    inputError: {
      borderColor: "#FF3B30",
    },
  });

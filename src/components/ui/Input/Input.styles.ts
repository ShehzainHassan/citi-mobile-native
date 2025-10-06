import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createInputStyles = (theme: Theme) =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: "column",
      gap: theme.spacing.md,
      marginBottom: theme.spacing.ms,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.line2,
      borderRadius: theme.radius.md,
      padding: theme.spacing.ms,
      backgroundColor: theme.colors.neutral6,
      minHeight: 48,
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
    inputReadOnly: {
      outlineColor: theme.colors.line2,
      borderColor: theme.colors.line2,
    },
    inputWrapper: {
      position: "relative",
      justifyContent: "center",
    },
    rightContainer: {
      position: "absolute",
      right: theme.spacing.ms,
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.xs,
      paddingLeft: theme.spacing.ml,
      borderLeftWidth: 1,
      borderLeftColor: theme.colors.line2,
    },
    rightText: {
      color: theme.colors.neutral4,
    },
    iconContainer: {
      position: "absolute",
      right: theme.spacing.ms,
      padding: theme.spacing.xs,
    },
  });

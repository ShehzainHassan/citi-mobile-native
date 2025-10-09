import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createInputStyles = (theme: Theme) =>
  StyleSheet.create({
    iconContainer: {
      padding: theme.spacing.xs,
      position: "absolute",
      right: theme.spacing.ms,
    },
    input: {
      backgroundColor: theme.colors.neutral6,
      borderColor: theme.colors.line2,
      borderRadius: theme.radius.md,
      borderWidth: 1,
      flex: 1,
      minHeight: 48,
      padding: theme.spacing.ms,
    },
    inputContainer: {
      flexDirection: "column",
      gap: theme.spacing.md,
    },
    inputError: {
      borderColor: "#FF3B30",
    },
    inputFocused: {
      borderColor: theme.colors.primary1,
      outlineColor: theme.colors.primary1,
    },
    inputLabel: {
      color: theme.colors.textdefault,
    },
    inputReadOnly: {
      borderColor: theme.colors.line2,
      outlineColor: theme.colors.line2,
    },
    inputWrapper: {
      flex: 1,
      justifyContent: "center",
      position: "relative",
    },
    rightContainer: {
      alignItems: "center",
      borderLeftColor: theme.colors.line2,
      borderLeftWidth: 1,
      flexDirection: "row",
      gap: theme.spacing.xs,
      paddingLeft: theme.spacing.ml,
      position: "absolute",
      right: theme.spacing.ms,
    },
    rightText: {
      color: theme.colors.neutral4,
    },
  });

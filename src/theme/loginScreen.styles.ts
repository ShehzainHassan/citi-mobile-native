import { StyleSheet } from "react-native";
import { Theme } from ".";

export const createLoginStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.colors.primary,
      paddingTop: theme.spacing.lg,
    },

    biometricButton: {
      width: 64,
      height: 64,
      marginVertical: theme.spacing.md,
    },
    forgotPassword: {
      color: theme.colors.neutral,
      fontSize: theme.typography.fontSize.sm,
      textAlign: "right",
      fontWeight: "500",
      lineHeight: theme.spacing.md,
      marginBottom: theme.spacing.ml * 2,
    },
  });

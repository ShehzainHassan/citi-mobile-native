import { StyleSheet } from "react-native";
import { Theme } from "../theme";

export const createAuthStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.colors.primary1,
      paddingTop: theme.spacing.lg,
    },
    biometricButton: {
      width: 64,
      height: 64,
      marginVertical: theme.spacing.md,
    },
    forgotPassword: {
      color: theme.colors.neutral4,
      fontSize: theme.typography.fontSize.sm,
      textAlign: "right",
      fontWeight: "500",
      lineHeight: theme.spacing.md,
      marginBottom: theme.spacing.ml * 2,
    },
    checkboxContainer: {
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing.ms,
    },
    text: {
      fontSize: theme.typography.fontSize.base,
      lineHeight: theme.spacing.md,
    },
    signUpButton: {
      marginVertical: theme.spacing.xl,
    },
  });

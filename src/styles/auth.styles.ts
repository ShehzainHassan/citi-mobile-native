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
    forgotPasswordContainer: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.lg,
    },
    noPadding: {
      padding: 0,
    },
    subContainer: {
      padding: theme.spacing.md,
      borderRadius: theme.radius.md,
      backgroundColor: theme.colors.neutral6,
      marginVertical: theme.spacing.lg,
    },
    phoneContainer: {
      display: "flex",
      gap: theme.spacing.md,
    },
    sendContainer: {
      display: "flex",
      gap: theme.spacing.lg,
      marginTop: theme.spacing.lg,
    },
    passwordContainer: {
      gap: theme.spacing.sm,
      marginBottom: theme.spacing.lg,
    },
    textInfoContainer: {
      flexDirection: "column",
      gap: theme.spacing.ms - 2,
    },
    textInfo: {
      color: theme.colors.neutral2,
    },
    codeContainer: {
      flexDirection: "row",
      gap: theme.spacing.ms,
      height: 44,
    },
    changePhoneNo: {
      backgroundColor: "transparent",
    },
    changePasswordContainer: {
      display: "flex",
      gap: theme.spacing.lg,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing.xl,
    },
    passwordChangedText: {
      color: theme.colors.neutral1,
    },
  });

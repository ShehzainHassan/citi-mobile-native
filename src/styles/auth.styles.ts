import { StyleSheet } from "react-native";
import { Theme } from "../theme";

export const createAuthStyles = (theme: Theme) =>
  StyleSheet.create({
    biometricButton: {
      height: 64,
      marginVertical: theme.spacing.md,
      width: 64,
    },
    changePasswordContainer: {
      alignItems: "center",
      display: "flex",
      gap: theme.spacing.lg,
      justifyContent: "center",
      marginBottom: theme.spacing.xl,
    },
    changePhoneNo: {
      backgroundColor: "transparent",
    },
    checkboxContainer: {
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing.ms,
    },
    codeContainer: {
      flexDirection: "row",
      gap: theme.spacing.ms,
      height: 44,
      justifyContent: "space-between",
    },
    container: {
      backgroundColor: theme.colors.primary1,
      display: "flex",
      flex: 1,
      paddingTop: theme.spacing.lg,
    },
    forgotPassword: {
      color: theme.colors.neutral4,
      fontSize: theme.typography.fontSize.sm,
      fontWeight: "500",
      lineHeight: theme.spacing.md,
      marginBottom: theme.spacing.ml * 2,
      textAlign: "right",
    },
    forgotPasswordContainer: {
      backgroundColor: theme.colors.surface,
      display: "flex",
      flex: 1,
      padding: theme.spacing.lg,
    },
    headerContainer: {
      paddingBottom: theme.radius.md,
    },
    noPadding: {
      padding: 0,
    },
    passwordContainer: {
      gap: theme.spacing.sm,
      marginBottom: theme.spacing.lg,
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
    signUpButton: {
      marginVertical: theme.spacing.xl,
    },
    subContainer: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.md,
      marginVertical: theme.spacing.lg,
      padding: theme.spacing.md,
    },
    text: {
      fontSize: theme.typography.fontSize.base,
      lineHeight: theme.spacing.md,
    },
    textInfo: {
      color: theme.colors.neutral2,
    },
    textInfoContainer: {
      flexDirection: "column",
      gap: theme.spacing.ms - 2,
    },
  });

import { StyleSheet } from "react-native";
import { Theme } from ".";

export const createForgotPasswordStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.lg,
    },
    forgotPasswordContainer: {
      padding: 0,
    },
    headerText: {
      color: theme.colors.text,
    },
    subContainer: {
      padding: theme.spacing.md,
      borderRadius: theme.spacing.md,
      backgroundColor: theme.colors.background,
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
    textInfo: {
      color: theme.colors.neutral2,
    },
    codeContainer: {
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing.ms,
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
  });

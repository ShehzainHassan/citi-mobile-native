import { StyleSheet } from "react-native";
import { Theme } from "../theme";

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
      color: theme.colors.neutral1,
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

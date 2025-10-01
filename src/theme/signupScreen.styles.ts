import { StyleSheet } from "react-native";
import { Theme } from ".";

export const createSignUpStyles = (theme: Theme) =>
  StyleSheet.create({
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

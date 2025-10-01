import { StyleSheet } from "react-native";
import { Theme } from ".";

export const createAuthStyles = (theme: Theme) =>
  StyleSheet.create({
    footerContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.ms,
    },
  });

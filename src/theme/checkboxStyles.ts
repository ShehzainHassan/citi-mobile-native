import { StyleSheet } from "react-native";
import { Theme } from ".";
export const createCheckboxStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "flex-start",
    },
    box: {
      width: 24,
      height: 24,
      borderWidth: theme.spacing.xs / 4,
      borderRadius: theme.spacing.xs,
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      flex: 1,
      fontWeight: "400",
      lineHeight: theme.spacing.ml,
    },
    checked: {
      width: 10,
      height: 10,
    },
  });

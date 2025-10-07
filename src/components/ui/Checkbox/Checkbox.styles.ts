import { StyleSheet } from "react-native";
import { Theme } from "../../../theme";
export const createCheckboxStyles = (theme: Theme) =>
  StyleSheet.create({
    box: {
      alignItems: "center",
      borderRadius: theme.radius.xs,
      borderWidth: theme.spacing.xs / 4,
      height: 24,
      justifyContent: "center",
      width: 24,
    },
    checked: {
      height: 10,
      width: 10,
    },
    container: {
      alignItems: "flex-start",
      flexDirection: "row",
    },
    label: {
      flex: 1,
      fontWeight: "400",
      lineHeight: theme.spacing.ml,
    },
  });

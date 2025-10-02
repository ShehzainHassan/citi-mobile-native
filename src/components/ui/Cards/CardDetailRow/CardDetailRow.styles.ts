import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createCardDetailRowStyles = (theme: Theme) =>
  StyleSheet.create({
    textContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: theme.spacing.ms,
      borderBottomWidth: 1,
      borderColor: theme.colors.line1,
    },
    label: {
      color: theme.colors.neutral2,
    },
  });

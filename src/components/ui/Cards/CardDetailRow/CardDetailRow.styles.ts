import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createCardDetailRowStyles = (theme: Theme) =>
  StyleSheet.create({
    label: {
      color: theme.colors.neutral2,
    },
    textContainer: {
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: theme.colors.line1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: theme.spacing.ms,
    },
  });

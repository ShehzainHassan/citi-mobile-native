import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
export const createSelectCurrencyStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary1,
      borderRadius: theme.radius.ms,
      padding: theme.spacing.md,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing.ms,
    },
    headerText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#111",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
    },
    text: {
      fontSize: 14,
      color: "#666",
    },
    selectedText: {
      color: "#4B3EFF",
      fontWeight: "600",
    },
  });

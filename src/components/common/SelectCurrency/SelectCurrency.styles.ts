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
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: theme.spacing.ms,
    },
    headerText: {
      color: "#111",
      fontSize: 16,
      fontWeight: "600",
    },
    row: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 12,
    },
    selectedText: {
      color: "#4B3EFF",
      fontWeight: "600",
    },
    text: {
      color: "#666",
      fontSize: 14,
    },
  });

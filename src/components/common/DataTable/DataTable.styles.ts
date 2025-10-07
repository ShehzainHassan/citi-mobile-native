import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
export const createDataTableStyles = (theme: Theme) =>
  StyleSheet.create({
    cellWrapper: {
      justifyContent: "center",
    },
    centerAlign: {
      alignItems: "center",
    },
    dataRow: {
      borderBottomWidth: 1,
      borderColor: theme.colors.line1,
      flexDirection: "row",
      marginBottom: theme.spacing.ms,
      paddingBottom: theme.spacing.ms,
    },
    flex1: {
      flex: 1,
    },
    flex2: {
      flex: 2,
    },
    headerRow: {
      flexDirection: "row",
      flexShrink: 0,
      marginBottom: theme.spacing.ms,
    },
    scrollContainer: {
      flex: 1,
    },
    tableContainer: {
      flex: 1,
      padding: theme.spacing.md,
    },
  });

import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
export const createDataTableStyles = (theme: Theme) =>
  StyleSheet.create({
    tableContainer: {
      flex: 1,
      padding: theme.spacing.md,
    },
    headerRow: {
      flexDirection: "row",
      marginBottom: theme.spacing.ms,
      flexShrink: 0,
    },
    scrollContainer: {
      flex: 1,
    },
    dataRow: {
      flexDirection: "row",
      paddingBottom: theme.spacing.ms,
      marginBottom: theme.spacing.ms,
      borderBottomWidth: 1,
      borderColor: theme.colors.line1,
    },
    cellWrapper: {
      justifyContent: "center",
    },
    flex2: {
      flex: 2,
    },
    flex1: {
      flex: 1,
    },
    centerAlign: {
      alignItems: "center",
    },
  });

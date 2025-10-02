import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createTransactionReportStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary1,
    },
    headerContainer: {
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.primary1,
      paddingBottom: theme.spacing.lg * 3,
    },
    subContainer: {
      borderTopLeftRadius: theme.radius.lg,
      borderTopRightRadius: theme.radius.lg,
    },
    transactionContainer: {
      position: "relative",
      top: -100,
    },
    card: {
      position: "relative",
    },
    graphContainer: {
      width: "100%",
      height: 290,
      backgroundColor: theme.colors.line1,
      borderRadius: theme.radius.lg,
    },
    cardChartContainer: {
      gap: theme.spacing.xl,
    },
    scrollable: {
      maxHeight: 475,
    },
  });

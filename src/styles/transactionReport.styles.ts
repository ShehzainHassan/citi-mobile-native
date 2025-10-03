import { Theme } from "@/theme";
import { Dimensions, StyleSheet } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

export const createTransactionReportStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary1,
      overflowY: "hidden",
    },
    headerContainer: {
      backgroundColor: theme.colors.primary1,
      paddingBottom: theme.spacing.lg * 2,
    },
    subContainer: {
      borderTopLeftRadius: theme.radius.lg,
      borderTopRightRadius: theme.radius.lg,
    },
    transactionContainer: {
      position: "relative",
      top: -50,
    },
    graphContainer: {
      width: "100%",
      height: screenHeight * 0.35,
      backgroundColor: theme.colors.line1,
      borderRadius: theme.radius.lg,
    },
    cardChartContainer: {
      gap: theme.spacing.xl,
    },
    scrollable: {
      maxHeight: screenHeight * 0.55,
    },
  });

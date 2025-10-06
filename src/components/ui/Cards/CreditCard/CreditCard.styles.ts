import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

const MAX_CARD_WIDTH = 500;
const FIXED_VERTICAL_PADDING = 40;
const FIXED_HORIZONTAL_PADDING = 55;

export const createCreditCardStyles = (theme: Theme, width: number) => {
  const isWideScreen = width >= MAX_CARD_WIDTH;

  return StyleSheet.create({
    wrapper: {
      alignItems: "center",
      width: "100%",
    },
    container: {
      width: "100%",
      maxWidth: MAX_CARD_WIDTH,
      aspectRatio: 1.6,
      overflow: "hidden",
      justifyContent: "space-between",
    },
    titleContainer: {
      flex: 1,
      justifyContent: "space-between",
      gap: theme.spacing.lg,
      paddingVertical: isWideScreen ? FIXED_VERTICAL_PADDING : width * 0.08,
      paddingLeft: isWideScreen ? FIXED_HORIZONTAL_PADDING : width * 0.1,
    },
    subContainer: {
      gap: theme.spacing.sm,
    },
    amount: {
      paddingVertical: isWideScreen ? FIXED_VERTICAL_PADDING : width * 0.08,
      paddingLeft: isWideScreen ? FIXED_HORIZONTAL_PADDING : width * 0.1,

      color: theme.colors.neutral6,
    },
    cardNumberContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
      flexWrap: "nowrap",
    },
    dotsContainer: {
      flexDirection: "row",
      gap: theme.spacing.xs,
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: theme.radius.xs,
      backgroundColor: theme.colors.neutral6,
    },
  });
};

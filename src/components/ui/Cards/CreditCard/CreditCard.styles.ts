import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

const MAX_CARD_WIDTH = 500;
const FIXED_VERTICAL_PADDING = 40;
const FIXED_HORIZONTAL_PADDING = 55;

export const createCreditCardStyles = (theme: Theme, width: number) => {
  const isWideScreen = width >= MAX_CARD_WIDTH;

  return StyleSheet.create({
    amount: {
      color: theme.colors.neutral6,
      paddingLeft: isWideScreen ? FIXED_HORIZONTAL_PADDING : width * 0.1,

      paddingVertical: isWideScreen ? FIXED_VERTICAL_PADDING : width * 0.08,
    },
    cardNumberContainer: {
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "nowrap",
      gap: theme.spacing.sm,
    },
    container: {
      aspectRatio: 1.6,
      justifyContent: "space-between",
      maxWidth: MAX_CARD_WIDTH,
      overflow: "hidden",
      width: "100%",
    },
    dot: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.xs,
      height: 5,
      width: 5,
    },
    dotsContainer: {
      flexDirection: "row",
      gap: theme.spacing.xs,
    },
    subContainer: {
      gap: theme.spacing.sm,
    },
    titleContainer: {
      flex: 1,
      gap: theme.spacing.lg,
      justifyContent: "space-between",
      paddingLeft: isWideScreen ? FIXED_HORIZONTAL_PADDING : width * 0.1,
      paddingVertical: isWideScreen ? FIXED_VERTICAL_PADDING : width * 0.08,
    },
    wrapper: {
      alignItems: "center",
      width: "100%",
    },
  });
};

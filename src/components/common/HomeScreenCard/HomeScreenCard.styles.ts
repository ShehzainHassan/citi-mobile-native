import { Theme } from "@/theme";
import { Dimensions, StyleSheet } from "react-native";

export const createHomeScreenCardStyles = (theme: Theme) => {
  const { width: screenWidth } = Dimensions.get("window");
  const cardSize = screenWidth < 600 ? 100 : screenWidth * 0.15;

  return StyleSheet.create({
    cardImg: {
      height: 28,
      width: 28,
    },
    cardText: {
      color: theme.colors.textdefault,
      textAlign: "center",
    },
    container: {
      alignItems: "center",
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.md,
      elevation: 3,
      flex: 1,
      flexDirection: "column",
      gap: theme.spacing.ms,
      height: cardSize,
      justifyContent: "center",
      padding: theme.spacing.ms,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.05,
      shadowRadius: 6,
      width: cardSize,
    },
  });
};

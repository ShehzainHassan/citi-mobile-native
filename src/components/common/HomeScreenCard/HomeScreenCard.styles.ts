import { Theme } from "@/theme";
import { Dimensions, StyleSheet } from "react-native";

export const createHomeScreenCardStyles = (theme: Theme) => {
  const { width: screenWidth } = Dimensions.get("window");
  const cardSize = screenWidth < 600 ? 100 : screenWidth * 0.15;

  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.ms,
      padding: theme.spacing.ms,
      backgroundColor: theme.colors.neutral6,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.05,
      shadowRadius: 6,
      elevation: 3,
      width: cardSize,
      height: cardSize,
      borderRadius: theme.radius.md,
    },
    cardImg: {
      width: 28,
      height: 28,
    },
    cardText: {
      color: theme.colors.textdefault,
      textAlign: "center",
    },
  });
};

import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createCardDetailsStyles = (theme: Theme) =>
  StyleSheet.create({
    selectedCard: {
      flex: 1,
      justifyContent: "space-between",
    },
    cardContainer: {
      marginTop: theme.spacing.lg,
      gap: theme.spacing.ml,
    },
  });

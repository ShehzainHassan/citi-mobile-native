import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
export const createSelectCurrencyModalStyles = (
  theme: Theme,
  modalHeight: number,
  screenWidth: number,
) =>
  StyleSheet.create({
    header: {
      borderBottomWidth: 1,
      borderColor: "#eee",
      padding: theme.spacing.md,
    },
    listContainer: {
      flex: 1,
      paddingBottom: theme.spacing.md,
      paddingHorizontal: theme.spacing.md,
    },
    modalContent: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.spacing.md,
      height: modalHeight,
      overflow: "hidden",
      width: screenWidth,
    },
    modalOverlay: {
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.3)",
      flex: 1,
      justifyContent: "center",
    },
  });

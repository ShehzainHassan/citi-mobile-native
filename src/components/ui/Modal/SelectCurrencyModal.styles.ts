import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
export const createSelectCurrencyModalStyles = (
  theme: Theme,
  modalHeight: number,
  screenWidth: number
) =>
  StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.3)",
    },
    modalContent: {
      width: screenWidth,
      height: modalHeight,
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.spacing.md,
      overflow: "hidden",
    },
    header: {
      padding: theme.spacing.md,
      borderBottomWidth: 1,
      borderColor: "#eee",
    },
    listContainer: {
      flex: 1,
      paddingHorizontal: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },
  });

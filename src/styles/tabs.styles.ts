import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createTabStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.colors.neutral6,
      height: 90,
      width: "100%",
      shadowColor: theme.colors.primary1,
      shadowOffset: { width: 0, height: -5 },
      shadowOpacity: 0.12,
      shadowRadius: 15,
      paddingHorizontal: theme.spacing.lg,
    },
    tab: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    tabSelected: {
      backgroundColor: theme.colors.primary1,
      paddingHorizontal: theme.spacing.ms,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.radius.ml,
    },
    icon: {
      width: 28,
      height: 28,
      resizeMode: "contain",
    },
    label: {
      color: theme.colors.neutral6,
      fontSize: 14,
      fontWeight: "600",
    },
  });

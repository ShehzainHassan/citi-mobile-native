import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createHeaderStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      fontWeight: "600",
      fontSize: theme.typography.fontSize.xl,
      lineHeight: theme.spacing.lgx,
      color: theme.colors.neutral6,
    },
    headerContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.md,
      padding: theme.spacing.lg,
      paddingBottom: 0,
    },
  });

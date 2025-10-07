import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createHeaderStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      color: theme.colors.neutral6,
      fontSize: theme.typography.fontSize.xl,
      fontWeight: "600",
      lineHeight: theme.spacing.lgx,
    },
    headerContainer: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing.md,
      padding: theme.spacing.lg,
      paddingBottom: 0,
    },
  });

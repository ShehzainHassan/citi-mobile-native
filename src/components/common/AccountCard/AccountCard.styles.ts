import { Theme } from "@/theme";
import { Platform, StyleSheet } from "react-native";

export const createAccountCardStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: 12,
      padding: theme.spacing.md,
      borderRadius: theme.radius.md,
      backgroundColor: theme.colors.neutral6,
      ...Platform.select({
        web: {
          boxShadow: "0px 4px 30px rgba(54, 41, 183, 0.07)",
        },
        default: {
          shadowColor: theme.colors.primary1,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.07,
          shadowRadius: 30,
          elevation: 6,
        },
      }),
    },
    subContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    accountSummaryContainer: {
      gap: theme.spacing.sm,
    },
    titleText: {
      color: theme.colors.neutral1,
    },
  });

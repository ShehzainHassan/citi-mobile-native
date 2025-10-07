import { Theme } from "@/theme";
import { Platform, StyleSheet } from "react-native";

export const createAccountCardStyles = (theme: Theme) =>
  StyleSheet.create({
    accountSummaryContainer: {
      gap: theme.spacing.sm
    },
    container: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.md,
      gap: 12,
      padding: theme.spacing.md,
      ...Platform.select({
        web: {
          boxShadow: '0px 4px 30px rgba(54, 41, 183, 0.07)'
        },
        default: {
          shadowColor: theme.colors.primary1,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.07,
          shadowRadius: 30,
          elevation: 6
        }
      })
    },
    subContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

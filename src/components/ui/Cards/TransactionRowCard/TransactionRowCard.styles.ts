import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createTransactionRowCardStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: theme.spacing.lg,
      gap: theme.spacing.md,
    },
    dayText: {
      color: theme.colors.textdefault,
    },
    subTitle: {
      color: theme.colors.neutral3,
    },
    cardContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: theme.spacing.ms,
      borderBottomWidth: 1,
      borderColor: theme.colors.line1,
    },
    iconImgContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      backgroundColor: theme.colors.primary1,
      borderRadius: theme.spacing.sml,
    },
    iconImg: {
      width: 16,
      height: 16,
    },
    iconContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.ms,
    },
    negative: {
      color: theme.colors.semantic1,
    },
  });

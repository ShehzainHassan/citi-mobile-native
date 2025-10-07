import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createTransactionRowCardStyles = (theme: Theme) =>
  StyleSheet.create({
    cardContainer: {
      borderBottomWidth: 1,
      borderColor: theme.colors.line1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: theme.spacing.ms,
    },
    container: {
      gap: theme.spacing.md,
      marginTop: theme.spacing.lg,
    },
    dayText: {
      color: theme.colors.textdefault,
    },
    iconContainer: {
      alignItems: "center",
      flexDirection: "row",
      gap: theme.spacing.ms,
    },
    iconImg: {
      height: 16,
      width: 16,
    },
    iconImgContainer: {
      alignItems: "center",
      backgroundColor: theme.colors.primary1,
      borderRadius: theme.spacing.sml,
      height: 40,
      justifyContent: "center",
      width: 40,
    },
    negative: {
      color: theme.colors.semantic1,
    },
    subTitle: {
      color: theme.colors.neutral3,
    },
  });

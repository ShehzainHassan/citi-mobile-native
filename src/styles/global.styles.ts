import { Fonts } from "@/constants/theme";
import { Platform, StyleSheet } from "react-native";
import { Theme } from "../theme/index";

export const createGlobalStyles = (theme: Theme) =>
  StyleSheet.create({
    // Layout patterns
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.colors.primary1,
      paddingTop: theme.spacing.lg,
    },
    centerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.neutral6,
    },
    paddedContainer: {
      flex: 1,
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.neutral6,
    },
    roundedContainer: {
      display: "flex",
      flex: 1,
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.neutral6,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    header: {
      fontWeight: "600",
      fontSize: theme.typography.fontSize.xl,
      lineHeight: theme.spacing.lgx,
      color: theme.colors.neutral6,
    },
    headerContainer: {
      paddingHorizontal: 0,
    },
    previous: {
      width: 16,
      height: 16,
      resizeMode: "contain",
    },

    // Typography patterns
    heading1: {
      fontSize: theme.typography.fontSize.xxl,
      fontWeight: "400",
      color: theme.colors.neutral6,
    },
    heading2: {
      fontSize: theme.typography.fontSize.xl,
      fontWeight: "600",
      color: theme.colors.neutral1,
    },
    heading3: {
      fontSize: theme.typography.fontSize.base,
      lineHeight: theme.spacing.md,
      fontWeight: "600",
      color: theme.colors.primary1,
    },

    titleContainer: {
      display: "flex",
      gap: theme.spacing.xs,
    },

    title1: {
      fontFamily: Fonts.sans,
      fontSize: theme.typography.fontSize.xxl,
      lineHeight: theme.spacing.lgx,
      fontWeight: "600",
      color: theme.colors.primary1,
    },
    title2: {
      fontSize: theme.typography.fontSize.xl,
      lineHeight: theme.spacing.lgx,
      fontWeight: "600",
      color: theme.colors.neutral1,
    },
    title3: {
      fontSize: theme.typography.fontSize.lg,
      lineHeight: theme.spacing.lg,
      fontWeight: "600",
      color: theme.colors.primary1,
    },
    body1: {
      fontWeight: "500",
      fontSize: theme.typography.fontSize.lg,
      color: theme.colors.neutral6,
      lineHeight: theme.spacing.md,
    },
    body2: {
      fontWeight: "400",
      fontSize: theme.typography.fontSize.lg,
      color: theme.colors.neutral6,
      lineHeight: theme.spacing.lg,
    },
    body3: {
      fontWeight: "500",
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.neutral4,
      lineHeight: theme.spacing.md,
    },
    bodyText: {
      fontWeight: "500",
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.neutral1,
      lineHeight: theme.spacing.ml,
    },
    sublineMedium14: {
      fontWeight: "500",
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.neutral6,
      lineHeight: theme.spacing.md,
    },
    caption1: {
      fontSize: theme.typography.fontSize.sm,
      fontWeight: "600",
      lineHeight: theme.spacing.md,
      color: theme.colors.primary1,
    },
    caption2: {
      fontSize: theme.typography.fontSize.sm,
      fontWeight: "500",
      lineHeight: theme.spacing.md,
      color: theme.colors.neutral1,
    },
    paddedColumn: {
      flex: 1,
      gap: theme.spacing.sm,
      padding: theme.spacing.lg,
    },
    spacedColumn: {
      gap: theme.spacing.ml,
    },
    verticalSpread: {
      flex: 1,
      // flexDirection: "column",
      // backgroundColor: theme.colors.neutral6,
    },
    primary1: {
      color: theme.colors.primary1,
    },
    neutral1: {
      color: theme.colors.neutral1,
    },
    neutral3: {
      color: theme.colors.neutral3,
    },
    neutral6: {
      color: theme.colors.neutral6,
    },

    // Card patterns
    cardContainer: {
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

    // Form patterns
    errorText: {
      color: "#FF3B30",
      fontSize: theme.typography.fontSize.sm,
      marginTop: theme.spacing.xs,
    },

    // Banking specific patterns
    balanceCard: {
      backgroundColor: theme.colors.primary1,
      borderRadius: theme.radius.md,
      padding: theme.spacing.lg,
      marginVertical: theme.spacing.md,
    },
    balanceAmount: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    transactionRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },

    authLogo: {
      width: "100%",
      height: 165,
      resizeMode: "contain",
      marginVertical: theme.spacing.xl,
    },
    flag: {
      width: 40,
      height: 30,
      marginRight: 8,
      borderRadius: 2,
    },
  });

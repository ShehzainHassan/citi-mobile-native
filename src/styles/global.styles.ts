import { StyleSheet } from "react-native";
import { Theme } from "../theme/index";

export const createGlobalStyles = (theme: Theme) =>
  StyleSheet.create({
    // Layout patterns
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.colors.primary,
      paddingTop: theme.spacing.lg,
    },
    centerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    paddedContainer: {
      flex: 1,
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.background,
    },
    roundedContainer: {
      display: "flex",
      flex: 1,
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.background,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    header: {
      fontWeight: "600",
      fontSize: theme.typography.fontSize.xl,
      lineHeight: theme.spacing.lgx,
      color: theme.colors.background,
    },
    headerContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.md,
      padding: theme.spacing.md,
    },
    previous: {
      fontSize: theme.typography.fontSize.xxl,
      fontWeight: "600",
      color: theme.colors.background,
    },

    // Typography patterns
    heading1: {
      fontSize: theme.typography.fontSize.xxl,
      fontWeight: "bold",
      color: theme.colors.neutral1,
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
      color: theme.colors.primary,
    },

    titleContainer: {
      display: "flex",
      gap: theme.spacing.xs,
    },

    title1: {
      fontSize: theme.typography.fontSize.xxl,
      lineHeight: theme.spacing.lgx,
      fontWeight: "600",
      color: theme.colors.primary,
    },
    title3: {
      fontSize: theme.typography.fontSize.lg,
      lineHeight: theme.spacing.lg,
      fontWeight: "600",
      color: theme.colors.primary,
    },
    body1: {
      fontWeight: "500",
      fontSize: theme.typography.fontSize.lg,
      color: theme.colors.background,
      lineHeight: theme.spacing.md,
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

    caption1: {
      fontSize: theme.typography.fontSize.sm,
      fontWeight: "600",
      lineHeight: theme.spacing.md,
      color: theme.colors.primary,
    },
    caption2: {
      fontSize: theme.typography.fontSize.sm,
      fontWeight: "500",
      lineHeight: theme.spacing.md,
      color: theme.colors.neutral1,
    },

    // Card patterns
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      padding: theme.spacing.md,
      marginVertical: theme.spacing.xs,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },

    // Form patterns
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.ml,
      marginBottom: theme.spacing.ms,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.ms,
      backgroundColor: theme.colors.background,
    },
    inputFocused: {
      borderColor: theme.colors.primary,
    },
    inputError: {
      borderColor: "#FF3B30",
    },
    errorText: {
      color: "#FF3B30",
      fontSize: theme.typography.fontSize.sm,
      marginTop: theme.spacing.xs,
    },

    // Banking specific patterns
    balanceCard: {
      backgroundColor: theme.colors.primary,
      borderRadius: 16,
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
      marginVertical: theme.spacing.xl,
    },
  });

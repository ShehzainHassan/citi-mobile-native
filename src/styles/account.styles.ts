import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createAccountScreenStyles = (theme: Theme) =>
  StyleSheet.create({
    accountSection: {},
    button: {
      flex: 1,
    },
    buttonsContainer: {
      flexDirection: "row",
      gap: theme.spacing.md,
      justifyContent: "space-between",
      marginTop: theme.spacing.lg,
      width: "100%",
    },

    card: {
      height: 204,
      resizeMode: "contain",
      width: "100%",
    },
    cardSection: {
      gap: theme.spacing.xl * 2,
    },
    cardsContainer: {
      gap: theme.spacing.lg,
      marginTop: theme.spacing.lg,
    },
    container: {
      backgroundColor: theme.colors.neutral6,
      flex: 1,
      padding: theme.spacing.lg,
    },
    deleteCard: {
      color: theme.colors.semantic1,
      padding: theme.spacing.sml,
      textAlign: "center",
      width: "100%",
    },
    label: {
      color: theme.colors.neutral2,
    },
    profilePic: {
      height: 100,
      resizeMode: "contain",
      width: 100,
    },
    profilePicContainer: {
      alignItems: "center",
      flexDirection: "column",
      gap: theme.spacing.sm,
      justifyContent: "center",
      marginVertical: theme.spacing.lg,
    },
    textContainer: {
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: theme.colors.line1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: theme.spacing.ms,
    },
  });

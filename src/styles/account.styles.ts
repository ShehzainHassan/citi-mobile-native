import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createAccountScreenStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.background,
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.md,
    },
    previous: {
      color: theme.colors.neutral1,
    },
    buttonsContainer: {
      flexDirection: "row",
      gap: theme.spacing.md,
      justifyContent: "space-between",
      marginTop: theme.spacing.lg,
      width: "100%",
    },
    button: {
      flex: 1,
    },

    profilePicContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.sm,
      marginVertical: theme.spacing.lg,
    },
    profilePic: {
      width: 100,
      height: 100,
      resizeMode: "contain",
    },
    accountCardContainer: {
      gap: theme.spacing.ml,
    },
    card: {
      width: "100%",
      height: 204,
      resizeMode: "contain",
    },
    accountSection: {},
    cardSection: {
      gap: theme.spacing.xl * 2,
    },
    cardsContainer: {
      gap: theme.spacing.lg,
    },
  });

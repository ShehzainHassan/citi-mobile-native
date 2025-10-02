import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createHomeScreenStyles = (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: theme.colors.primary1,
    },
    subContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    container: {
      flexDirection: "column",
      gap: theme.spacing.xl,
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing.lg,
    },
    profilePicContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.mlg,
    },
    cardsImg: {
      width: "100%",
      height: 220,
      resizeMode: "contain",
    },
    columnContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.ms,
    },
    rowContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.ms,
    },
    profilePic: {
      width: 50,
      height: 50,
    },
    notificationBell: {
      width: 26,
      height: 28,
    },
  });

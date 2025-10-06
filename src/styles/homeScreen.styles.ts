import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createHomeScreenStyles = (theme: Theme) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: theme.colors.primary1,
    },
    container: {
      flexDirection: "column",
      gap: theme.spacing.xl,
      overflowY: "auto",
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.primary1,
    },
    profilePicContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.mlg,
    },
    columnContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.ms,
    },
    rowContainer: {
      maxWidth: 500,
      width: "100%",
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
};

import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createHomeScreenStyles = (theme: Theme) => {
  return StyleSheet.create({
    columnContainer: {
      alignItems: "center",
      flexDirection: "column",
      gap: theme.spacing.ms,
      justifyContent: "center",
    },
    container: {
      flexDirection: "column",
      gap: theme.spacing.xl,
      overflowY: "auto",
    },
    headerContainer: {
      alignItems: "center",
      backgroundColor: theme.colors.primary1,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: theme.spacing.lg,
    },
    mainContainer: {
      backgroundColor: theme.colors.primary1,
      flex: 1,
      flexDirection: "column",
    },
    notificationBell: {
      height: 28,
      width: 26,
    },
    profilePic: {
      height: 50,
      width: 50,
    },
    profilePicContainer: {
      alignItems: "center",
      flexDirection: "row",
      gap: theme.spacing.mlg,
    },
    rowContainer: {
      alignItems: "center",
      flexDirection: "row",
      gap: theme.spacing.ms,
      justifyContent: "center",
      maxWidth: 500,
      width: "100%",
    },
  });
};

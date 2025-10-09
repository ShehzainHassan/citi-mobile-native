import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createMessageStyles = (theme: Theme) =>
  StyleSheet.create({
    alignLeft: {
      alignItems: "flex-start",
    },
    alignRight: {
      alignItems: "flex-end",
    },
    message: {
      borderRadius: theme.radius.md,
      maxWidth: 250,
      padding: theme.spacing.md,
    },
    receiver: {
      backgroundColor: theme.colors.primary1,
    },
    receiverText: {
      color: theme.colors.neutral6,
    },
    sender: {
      backgroundColor: theme.colors.primary4,
    },
    senderText: {
      color: theme.colors.neutral1,
    },
    wrapper: {
      marginVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      width: "100%",
    },
  });

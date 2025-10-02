import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createAuthFooterStyles = (theme:Theme)=> StyleSheet.create({
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.ms,
  },
});

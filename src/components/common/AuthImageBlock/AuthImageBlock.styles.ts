import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
export const createAuthImageStyles = (theme: Theme) =>
  StyleSheet.create({
    authLogo: {
      width: "100%",
      height: 165,
      resizeMode: "contain",
      marginVertical: theme.spacing.xl,
    },
  });

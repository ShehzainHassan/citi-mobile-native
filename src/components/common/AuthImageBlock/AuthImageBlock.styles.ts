import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
export const createAuthImageStyles = (theme: Theme) =>
  StyleSheet.create({
    authLogo: {
      height: 165,
      marginVertical: theme.spacing.xl,
      resizeMode: "contain",
      width: "100%",
    },
  });

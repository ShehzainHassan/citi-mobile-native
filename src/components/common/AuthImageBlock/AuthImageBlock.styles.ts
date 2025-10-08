import { Theme } from "@/theme";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const createAuthImageStyles = (theme: Theme) =>
  StyleSheet.create({
    authLogo: {
      height: width * 0.4,
      marginVertical: theme.spacing.xl,
      resizeMode: "contain",
      width: "100%",
    },
  });

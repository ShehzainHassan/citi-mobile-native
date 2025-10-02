import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
export const createAuthHeaderStyles = (theme: Theme) =>
  StyleSheet.create({
    titleContainer: {
      display: "flex",
      gap: theme.spacing.xsm,
    },
  });

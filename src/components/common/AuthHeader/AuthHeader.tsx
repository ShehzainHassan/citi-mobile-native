import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import { Text, View } from "react-native";
import { createAuthHeaderStyles } from "./AuthHeader.styles";
import { AuthHeaderProps } from "./AuthHeader.types";

export const AuthHeader = ({ title, subTitle }: AuthHeaderProps) => {
  const { globalStyles } = useStyles();
  const { theme } = useTheme();
  const styles = createAuthHeaderStyles(theme);
  return (
    <View style={styles.titleContainer}>
      <Text style={globalStyles.title1}>{title}</Text>
      <Text style={globalStyles.caption2}>{subTitle}</Text>
    </View>
  );
};

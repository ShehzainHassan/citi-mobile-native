import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import { Image, View } from "react-native";
import { createAuthImageStyles } from "./AuthImageBlock.styles";
import { AuthImageBlockProps } from "./AuthImageBlock.types";

export const AuthImageBlock = ({ source }: AuthImageBlockProps) => {
  const { globalStyles } = useStyles();
  const { theme } = useTheme();
  const styles = createAuthImageStyles(theme);
  return (
    <View style={globalStyles.centerContainer}>
      <Image source={{ uri: source }} style={styles.authLogo} />
    </View>
  );
};

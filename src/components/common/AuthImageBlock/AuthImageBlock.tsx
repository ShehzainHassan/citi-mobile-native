import { useGlobalStyles } from "@/hooks";
import { useTheme } from "@/theme";
import { Image, View } from "react-native";
import { createAuthImageStyles } from "./AuthImageBlock.styles";
import { AuthImageBlockProps } from "./AuthImageBlock.types";

export const AuthImageBlock = ({ source }: AuthImageBlockProps) => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const styles = createAuthImageStyles(theme);

  const imageSource = typeof source === "string" ? { uri: source } : source;

  return (
    <View style={globalStyles.centerContainer}>
      <Image source={imageSource} style={styles.authLogo} />
    </View>
  );
};

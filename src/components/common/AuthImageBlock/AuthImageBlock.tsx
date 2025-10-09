import { useGlobalStyles } from "@/hooks";
import { useTheme } from "@/theme";
import { View } from "react-native";
import { createAuthImageStyles } from "./AuthImageBlock.styles";
import { AuthImageBlockProps } from "./AuthImageBlock.types";
import { ImageWithFallback } from "../ImageWithFallback";

export const AuthImageBlock = ({ source }: AuthImageBlockProps) => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const styles = createAuthImageStyles(theme);

  const imageSource = typeof source === "string" ? { uri: source } : source;

  return (
    <View style={globalStyles.centerContainer}>
      <ImageWithFallback source={imageSource} style={styles.authLogo} />
    </View>
  );
};

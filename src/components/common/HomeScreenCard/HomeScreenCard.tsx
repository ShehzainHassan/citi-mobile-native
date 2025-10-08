import { useGlobalStyles } from "@/hooks";
import { useTheme } from "@/theme";
import { Text, TouchableOpacity } from "react-native";
import { ImageWithFallback } from "../ImageWithFallback";
import { createHomeScreenCardStyles } from "./HomeScreenCard.styles";
import { HomeScreenCardProps } from "./HomeScreenCard.types";

export const HomeScreenCard = ({
  image,
  label,
  onPress,
}: HomeScreenCardProps) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createHomeScreenCardStyles(theme);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      accessibilityLabel={label}
      accessibilityRole="button">
      <ImageWithFallback source={image} style={styles.cardImg} resizeMode="contain" />
      <Text style={[globalStyles.caption2, styles.cardText]}>{label}</Text>
    </TouchableOpacity>
  );
};

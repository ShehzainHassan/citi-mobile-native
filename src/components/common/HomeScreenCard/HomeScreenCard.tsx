import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import { Image, Text, TouchableOpacity } from "react-native";
import { createHomeScreenCardStyles } from "./HomeScreenCard.styles";
import { HomeScreenCardProps } from "./HomeScreenCard.types";

export const HomeScreenCard = ({
  image,
  label,
  onPress,
}: HomeScreenCardProps) => {
  const { theme } = useTheme();
  const { globalStyles } = useStyles();
  const styles = createHomeScreenCardStyles(theme);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      accessibilityLabel={label}
      accessibilityRole="button">
      <Image source={image} style={styles.cardImg} resizeMode="contain" />
      <Text style={[globalStyles.caption2, styles.cardText]}>{label}</Text>
    </TouchableOpacity>
  );
};

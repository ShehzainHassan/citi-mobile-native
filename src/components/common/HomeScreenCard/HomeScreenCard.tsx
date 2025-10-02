import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import { Image, Pressable, Text } from "react-native";
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
    <Pressable
      style={styles.container}
      onPress={onPress}
      android_ripple={{ color: "rgba(0,0,0,0.1)" }}
      accessibilityLabel={label}
      accessibilityRole="button">
      <Image source={image} style={styles.cardImg} resizeMode="contain" />
      <Text style={[globalStyles.caption2, styles.cardText]}>{label}</Text>
    </Pressable>
  );
};

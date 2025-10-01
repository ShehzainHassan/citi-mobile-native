import { useStyles } from "@/hooks/useStyles";
import { Image, ImageSourcePropType, Text, Pressable } from "react-native";

export interface HomeScreenCardProps {
  image: ImageSourcePropType;
  label: string;
  onPress?: () => void;
}

export const HomeScreenCard = ({
  image,
  label,
  onPress,
}: HomeScreenCardProps) => {
  const { globalStyles, homeCardStyles } = useStyles();

  return (
    <Pressable
      style={homeCardStyles.container}
      onPress={onPress}
      android_ripple={{ color: "rgba(0,0,0,0.1)" }}>
      <Image source={image} style={homeCardStyles.cardImg} />
      <Text style={[globalStyles.caption2, homeCardStyles.cardText]}>
        {label}
      </Text>
    </Pressable>
  );
};

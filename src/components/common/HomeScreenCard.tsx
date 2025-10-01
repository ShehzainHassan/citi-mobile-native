import { useStyles } from "@/hooks/useStyles";
import { Image, ImageSourcePropType, Text, View } from "react-native";

export interface HomeScreenCardProps {
  image: ImageSourcePropType;
  label: string;
}

export const HomeScreenCard = ({ image, label }: HomeScreenCardProps) => {
  const { globalStyles, homeCardStyles } = useStyles();
  return (
    <View style={homeCardStyles.container}>
      <Image source={image} style={homeCardStyles.cardImg} />
      <Text style={[globalStyles.caption, homeCardStyles.cardText]}>
        {label}
      </Text>
    </View>
  );
};

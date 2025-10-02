import { ImageSourcePropType } from "react-native";

export interface HomeScreenCardProps {
  image: ImageSourcePropType;
  label: string;
  onPress?: () => void;
}

import { ImageSourcePropType } from "react-native";

export interface SearchScreenCardProps {
  title: string;
  subtitle: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
}

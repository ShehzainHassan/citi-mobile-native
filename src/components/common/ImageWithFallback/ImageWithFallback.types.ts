import { ImageSource } from "expo-image";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

export interface FallbackImageProps {
  source: ImageSource | ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  [key: string]: unknown;
}

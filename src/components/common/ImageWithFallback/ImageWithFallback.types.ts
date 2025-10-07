import { ImageSource } from "expo-image";
import { StyleProp, ViewStyle } from "react-native";

export interface FallbackImageProps {
  source: ImageSource;
  style?: StyleProp<ViewStyle>;
  [key: string]: unknown;
}

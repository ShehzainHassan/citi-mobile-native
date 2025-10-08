import { ImageProps, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from "react-native";

export type ImageSource = 
  | ImageSourcePropType 
  | string 
  | number 
  | ImageSourcePropType[] 
  | React.ComponentType<any>;

export type ContentFit = 'contain' | 'cover' | 'fill' | 'scale-down' | 'none';

export interface FallbackImageProps extends Omit<ImageProps, 'source' | 'style'> {
  source: ImageSource;
  fallbackSource?: ImageSource;
  style?: StyleProp<ViewStyle>;
  resizeMode?: ImageStyle['resizeMode'];
  contentFit?: ContentFit;
  transition?: number;
}

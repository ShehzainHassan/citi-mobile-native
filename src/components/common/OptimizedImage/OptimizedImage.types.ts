import { ImageProps, ImageSourcePropType, StyleProp } from 'react-native';
import FastImage, { ImageStyle } from 'react-native-fast-image';

export type OptimizedImageProps = {
  source: ImageSourcePropType;
  fallback?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  resizeMode?: keyof typeof FastImage.resizeMode;
  priority?: keyof typeof FastImage.priority;
} & Omit<ImageProps, 'source'>;

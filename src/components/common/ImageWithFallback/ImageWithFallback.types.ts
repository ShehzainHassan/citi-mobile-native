import {
  ImageProps,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from 'react-native';

export type ContentFit = 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';

import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';

export type ImageSource =
  | ImageSourcePropType
  | ComponentType<SvgProps>
  | React.ReactElement;

export interface ImageWithFallbackProps extends Omit<ImageProps, 'source'> {
  source: ImageSource;
  fallbackSource?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  svgWidth?: number;
  svgHeight?: number;
  contentFit?: ContentFit;
  transition?: number;
  onPress?: () => void;
}

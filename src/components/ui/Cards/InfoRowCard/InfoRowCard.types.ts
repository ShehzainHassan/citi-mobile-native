import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';

export type IconSource = ImageSourcePropType | ComponentType<SvgProps>;

export interface InfoRowCardProps {
  label?: string;
  title: string;
  subtitle?: string;
  amount: string;
  icon: IconSource;
  style?: StyleProp<ViewStyle>;
  amountStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconBackgroundColor?: string;
  noBorder?: boolean;
  centeredItems?: boolean;
}

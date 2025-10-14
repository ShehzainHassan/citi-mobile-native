import { ComponentType } from 'react';
import { ImageSourcePropType } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type ChooseTransferVariant = 'primary' | 'secondary';

export interface ChooseTransferProps {
  image: ImageSourcePropType | ComponentType<SvgProps>;
  text: string;
  variant?: ChooseTransferVariant;
  selected?: boolean;
  onSelect?: () => void;
}

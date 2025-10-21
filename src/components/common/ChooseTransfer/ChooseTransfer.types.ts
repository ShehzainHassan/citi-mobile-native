import { ImageSourcePropType } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type ChooseTransferVariant = 'primary' | 'secondary';

export interface ChooseTransferProps {
  image: React.FC<SvgProps> | ImageSourcePropType;
  text: string;
  variant?: ChooseTransferVariant;
  selected?: boolean;
  onSelect?: () => void;
}

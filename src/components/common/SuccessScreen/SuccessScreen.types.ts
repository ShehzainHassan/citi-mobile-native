import { JSX } from 'react';
import { ImageSourcePropType } from 'react-native';

export interface SuccessScreenProps {
  headerText?: string;
  onBack?: () => void;
  title: string;
  subtitle: string | JSX.Element;
  source: ImageSourcePropType;
  btnText: string;
  onPress: () => void;
}

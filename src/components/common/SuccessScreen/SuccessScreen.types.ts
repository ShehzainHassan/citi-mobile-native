import { ImageSourcePropType } from 'react-native';

export interface SuccessScreenProps {
  headerText?: string;
  onBack?: () => void;
  title: string;
  subtitle: string;
  source: ImageSourcePropType;
  btnText: string;
  onPress: () => void;
}

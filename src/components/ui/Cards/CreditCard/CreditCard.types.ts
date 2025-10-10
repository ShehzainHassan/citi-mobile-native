import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export interface CreditCardProps {
  name: string;
  cardType: string;
  cardNumber: string;
  amount: string;
  backgroundImage: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

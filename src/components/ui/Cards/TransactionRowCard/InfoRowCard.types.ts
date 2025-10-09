import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface InfoRowCardProps {
  label?: string;
  title: string;
  subtitle?: string;
  amount: string;
  icon: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  amountStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconBackgroundColor?: string;
}

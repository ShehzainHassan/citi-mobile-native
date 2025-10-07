import { StyleProp, TextInputProps, TextStyle } from "react-native";

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  style?: StyleProp<TextStyle>;
  rightText?: string | undefined;
  rightPlaceholder?: string | undefined;
  rightIcon?: React.ReactNode;
  onRightPress?: () => void;
  readOnly?: boolean;
}

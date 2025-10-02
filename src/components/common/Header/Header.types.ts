import { StyleProp, ViewStyle } from "react-native";

export interface HeaderProps {
  title: string;
  variant?: "primary" | "secondary";
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

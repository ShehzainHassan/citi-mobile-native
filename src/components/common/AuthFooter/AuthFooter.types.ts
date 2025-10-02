import { StyleProp, ViewStyle } from "react-native";

export interface AuthFooterProps {
  label: string;
  actionText: string;
  onActionPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

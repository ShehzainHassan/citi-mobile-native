import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  textStyle?: StyleProp<TextStyle>;
}

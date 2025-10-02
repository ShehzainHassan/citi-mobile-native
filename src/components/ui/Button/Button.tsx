import { useTheme } from "@/theme";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./Button.types";
import { createButtonStyles } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  disabled = false,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const buttonStyles = createButtonStyles(theme);
  return (
    <TouchableOpacity
      style={[
        buttonStyles.container,
        buttonStyles[variant],
        disabled && buttonStyles.disabled,
        style,
      ]}
      disabled={disabled}
      {...props}>
      <Text
        style={[
          buttonStyles.text,
          variant === "secondary" && buttonStyles.textSecondary,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

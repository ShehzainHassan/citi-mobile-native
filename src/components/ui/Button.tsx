import { useStyles } from "@/hooks/useStyles";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  disabled = false,
  style,
  ...props
}) => {
  const { buttonStyles } = useStyles();

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

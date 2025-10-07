import { useTheme } from "@/theme";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./Button.types";
import { createButtonStyles } from "./Button.styles";
import { useStyles } from "@/hooks/useStyles";

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  disabled = false,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const { globalStyles } = useStyles();
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
      {...props}
    >
      <Text
        style={[
          buttonStyles.text,
          variant === "secondary" && globalStyles.neutral1,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

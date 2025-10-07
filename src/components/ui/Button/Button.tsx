import { useTheme } from "@/theme";
import * as Haptics from "expo-haptics";
import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createButtonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  style,
  onPress,
  ...props
}) => {
  const { theme } = useTheme();
  const buttonStyles = createButtonStyles(theme);

  const isDisabled = disabled || loading;

  const handlePress = async (e: GestureResponderEvent) => {
    if (!isDisabled && onPress) {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress(e);
    }
  };

  return (
    <TouchableOpacity
      style={[
        buttonStyles.container,
        buttonStyles[variant],
        buttonStyles[size],
        fullWidth && buttonStyles.fullWidth,
        isDisabled && buttonStyles.disabled,
        style,
      ]}
      disabled={isDisabled}
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      {...props}>
      <View style={buttonStyles.contentContainer}>
        {loading ? (
          <ActivityIndicator size="small" accessibilityLabel="Loading" />
        ) : (
          <>
            {icon && iconPosition === "left" && <View>{icon}</View>}
            <Text
              style={[
                buttonStyles[`text_${size}`],
                variant === "secondary" && buttonStyles.text_secondary,
              ]}>
              {title}
            </Text>

            {icon && iconPosition === "right" && <View>{icon}</View>}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

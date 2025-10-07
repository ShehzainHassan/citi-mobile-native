import { useGlobalStyles } from "@/hooks";
import { useTheme } from "@/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useMemo, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { createInputStyles } from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  label,
  error,
  style,
  secureTextEntry,
  rightText,
  rightPlaceholder,
  rightIcon,
  onRightPress,
  readOnly = false,
  required = true,
  ...props
}) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const inputStyles = createInputStyles(theme);

  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPasswordField = !!secureTextEntry;

  const shakeValue = useSharedValue(0);

  useEffect(() => {
    if (error) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      shakeValue.value = withSequence(
        withTiming(-8, { duration: 50 }),
        withTiming(8, { duration: 50 }),
        withTiming(-8, { duration: 50 }),
        withTiming(8, { duration: 50 }),
        withTiming(0, { duration: 50 })
      );
    }
  }, [error]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeValue.value }],
  }));

  const handlePasswordToggle = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsPasswordVisible((prev) => !prev);
  };

  const inputStyle = useMemo(
    () => [
      inputStyles.input,
      globalStyles.body3,
      style,
      { color: theme.colors.neutral1 },
      error ? inputStyles.inputError : null,
      readOnly
        ? inputStyles.inputReadOnly
        : isFocused
          ? inputStyles.inputFocused
          : null,
    ],
    [
      inputStyles,
      globalStyles,
      style,
      theme.colors.neutral1,
      error,
      readOnly,
      isFocused,
    ]
  );

  return (
    <View style={inputStyles.inputContainer}>
      {label && (
        <Text
          style={[globalStyles.caption1, inputStyles.inputLabel]}
          accessibilityRole="text">
          {label}
          {required && <Text style={{ color: theme.colors.error }}> *</Text>}
        </Text>
      )}

      <Animated.View style={[inputStyles.inputWrapper, animatedStyle]}>
        <TextInput
          {...props}
          editable={!readOnly}
          secureTextEntry={isPasswordField && !isPasswordVisible}
          onFocus={() => !readOnly && setIsFocused(true)}
          onBlur={() => !readOnly && setIsFocused(false)}
          style={inputStyle}
          placeholderTextColor={theme.colors.neutral4}
          accessibilityLabel={label || props.placeholder}
          accessibilityState={{ disabled: readOnly }}
          accessibilityHint={
            error
              ? `${error}. ${props.accessibilityHint || ""}`
              : props.accessibilityHint
          }
        />

        {(rightText || rightPlaceholder || rightIcon) && (
          <TouchableOpacity
            onPress={onRightPress}
            style={inputStyles.rightContainer}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={
              rightText || rightPlaceholder || "Right action"
            }>
            <Text
              style={[
                globalStyles.body3,
                inputStyles.rightText,
                {
                  color: rightText
                    ? theme.colors.neutral1
                    : theme.colors.neutral4,
                },
              ]}>
              {rightText || rightPlaceholder}
            </Text>
            {rightIcon}
          </TouchableOpacity>
        )}

        {isPasswordField && !readOnly && (
          <TouchableOpacity
            onPress={handlePasswordToggle}
            style={inputStyles.iconContainer}
            accessibilityRole="button"
            accessibilityLabel={
              isPasswordVisible ? "Hide password" : "Show password"
            }
            accessibilityHint="Toggles password visibility">
            <MaterialIcons
              name={isPasswordVisible ? "visibility-off" : "visibility"}
              size={20}
              color={theme.colors.neutral4}
            />
          </TouchableOpacity>
        )}
      </Animated.View>

      {error && (
        <View
          accessibilityLiveRegion="polite"
          accessibilityRole="alert"
          style={{ marginTop: 4 }}>
          <Text style={globalStyles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;

import React, { useEffect, useMemo, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import { createInputStyles } from './Input.styles';
import { InputProps } from './Input.types';
import MaterialIcons from '@react-native-vector-icons/material-icons';

const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

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
  showRightBorder = true,
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
      shakeValue.value = withSequence(
        withTiming(-8, { duration: 50 }),
        withTiming(8, { duration: 50 }),
        withTiming(-8, { duration: 50 }),
        withTiming(8, { duration: 50 }),
        withTiming(0, { duration: 50 }),
      );
      ReactNativeHapticFeedback.trigger('notificationError', hapticOptions);
    }
  }, [error]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeValue.value }],
  }));

  const handlePasswordToggle = () => {
    setIsPasswordVisible(prev => !prev);
    ReactNativeHapticFeedback.trigger('selection', hapticOptions);
  };

  const handleRightPress = () => {
    onRightPress?.();
    ReactNativeHapticFeedback.trigger('selection', hapticOptions);
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
    ],
  );

  return (
    <View style={inputStyles.inputContainer}>
      {label && (
        <Text style={[globalStyles.caption1, inputStyles.inputLabel]}>
          {label}
          {required && <Text style={{ color: theme.colors.error }}> *</Text>}
        </Text>
      )}

      <Animated.View style={[inputStyles.inputWrapper, animatedStyle]}>
        <TextInput
          {...props}
          editable={!readOnly}
          pointerEvents={readOnly ? 'none' : 'auto'}
          secureTextEntry={isPasswordField && !isPasswordVisible}
          onFocus={() => {
            if (readOnly) {
              handleRightPress();
            } else {
              setIsFocused(true);
            }
          }}
          onBlur={() => !readOnly && setIsFocused(false)}
          style={inputStyle}
          placeholderTextColor={theme.colors.neutral4}
        />

        {(rightText || rightPlaceholder || rightIcon) && (
          <TouchableOpacity
            onPress={handleRightPress}
            style={[
              inputStyles.rightContainer,
              !showRightBorder && { borderLeftWidth: 0 },
            ]}
            activeOpacity={0.7}
          >
            <Text
              style={[
                globalStyles.body3,
                inputStyles.rightText,
                {
                  color: rightText
                    ? theme.colors.neutral1
                    : theme.colors.neutral4,
                },
              ]}
            >
              {rightText || rightPlaceholder}
            </Text>
            {rightIcon}
          </TouchableOpacity>
        )}

        {isPasswordField && !readOnly && (
          <TouchableOpacity
            onPress={handlePasswordToggle}
            style={inputStyles.iconContainer}
            activeOpacity={0.7}
          >
            <MaterialIcons
              name={isPasswordVisible ? 'visibility-off' : 'visibility'}
              size={20}
              color={theme.colors.neutral4}
            />
          </TouchableOpacity>
        )}
      </Animated.View>

      {error && (
        <View style={inputStyles.errorContainer}>
          <Text style={globalStyles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;

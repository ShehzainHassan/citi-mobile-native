import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
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
  readOnly = false,
  ...props
}) => {
  const { theme } = useTheme();
  const { globalStyles } = useStyles();
  const inputStyles = createInputStyles(theme);

  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordField = !!secureTextEntry;

  const inputStyle = [
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
  ];

  return (
    <View style={inputStyles.inputContainer}>
      {label && (
        <Text style={[globalStyles.caption1, inputStyles.inputLabel]}>
          {label}
        </Text>
      )}
      <View style={inputStyles.inputWrapper}>
        <TextInput
          {...props}
          editable={!readOnly}
          secureTextEntry={isPasswordField && !isPasswordVisible}
          onFocus={() => !readOnly && setIsFocused(true)}
          onBlur={() => !readOnly && setIsFocused(false)}
          style={inputStyle}
          placeholderTextColor={theme.colors.neutral4}
        />

        {(rightText || rightPlaceholder || rightIcon) && (
          <TouchableOpacity
            onPress={props.onRightPress}
            style={inputStyles.rightContainer}
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
            onPress={() => setIsPasswordVisible((prev) => !prev)}
            style={inputStyles.iconContainer}
          >
            <MaterialIcons
              name={isPasswordVisible ? "visibility-off" : "visibility"}
              size={20}
              color={theme.colors.neutral4}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={globalStyles.errorText}>{error}</Text>}
    </View>
  );
};

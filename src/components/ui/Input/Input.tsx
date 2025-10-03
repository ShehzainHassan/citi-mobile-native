import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { createInputStyles } from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  label,
  error,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const { globalStyles } = useStyles();
  const inputStyles = createInputStyles(theme);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[inputStyles.inputContainer]}>
      {label && (
        <Text style={[globalStyles.caption1, inputStyles.inputLabel]}>
          {label}
        </Text>
      )}
      <TextInput
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          inputStyles.input,
          globalStyles.body3,
          style,
          { color: theme.colors.neutral1 },
          isFocused ? inputStyles.inputFocused : null,
          error ? inputStyles.inputError : null,
        ]}
        placeholderTextColor={theme.colors.neutral4}
      />
      {error && <Text style={globalStyles.errorText}>{error}</Text>}
    </View>
  );
};

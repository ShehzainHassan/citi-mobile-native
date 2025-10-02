import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import React from "react";
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

  return (
    <View style={[inputStyles.inputContainer]}>
      {label && (
        <Text style={[globalStyles.caption1, inputStyles.inputLabel]}>
          {label}
        </Text>
      )}
      <TextInput
        {...props}
        style={[
          inputStyles.input,
          globalStyles.body3,
          style,
          error ? inputStyles.inputError : {},
        ]}
      />

      {error && <Text style={globalStyles.errorText}>{error}</Text>}
    </View>
  );
};

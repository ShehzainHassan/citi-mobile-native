import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import React, { useState } from "react";
import { Image, Pressable, View } from "react-native";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked: checkedProp = false,
  onChange,
}) => {
  const { theme } = useTheme();
  const { checkboxStyles } = useStyles();
  const [checked, setChecked] = useState(checkedProp);

  const toggleCheckbox = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <Pressable
      onPress={toggleCheckbox}
      style={checkboxStyles.container}
      android_ripple={null}>
      <View
        style={[
          checkboxStyles.box,
          {
            borderColor: checked ? theme.colors.primary : theme.colors.border,
          },
        ]}>
        {checked && (
          <Image
            source={require("../../assets/icons/tick.svg")}
            style={checkboxStyles.checked}
            resizeMode="contain"
          />
        )}
      </View>
    </Pressable>
  );
};

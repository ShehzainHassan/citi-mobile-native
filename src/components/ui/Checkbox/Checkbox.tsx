import { useTheme } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { createCheckboxStyles } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = ({
  checked: checkedProp = false,
  onChange,
}) => {
  const { theme } = useTheme();
  const checkboxStyles = createCheckboxStyles(theme);
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
      android_ripple={null}
    >
      <View
        style={[
          checkboxStyles.box,
          {
            borderColor: checked ? theme.colors.primary1 : theme.colors.border,
          },
        ]}
      >
        {checked && (
          <MaterialIcons
            name="check"
            size={checkboxStyles.checked.width}
            color={theme.colors.primary1}
          />
        )}
      </View>
    </Pressable>
  );
};

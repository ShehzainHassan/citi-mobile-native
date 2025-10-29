import React, { useState } from 'react';
import { useTheme } from '@/theme';
import { CardDetailRow } from '@/components/ui';
import { SettingsRowProps } from './SettingsRow.types';
import { useGlobalStyles } from '@/hooks';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';

export const SettingsRow: React.FC<SettingsRowProps> = ({
  label,
  onPress,
  showChevron = true,
  showToggle = false,
  initialToggleValue = false,
  onToggleChange,
}) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const [isToggled, setIsToggled] = useState(initialToggleValue);

  const handleToggle = () => {
    const newValue = !isToggled;
    setIsToggled(newValue);
    onToggleChange?.(newValue);
  };

  const renderValue = () => {
    if (showToggle) {
      return (
        <TouchableOpacity onPress={handleToggle}>
          <MaterialIcons
            name={isToggled ? 'toggle-on' : 'toggle-off'}
            size={32}
            color={isToggled ? theme.colors.primary1 : theme.colors.neutral5}
          />
        </TouchableOpacity>
      );
    }

    if (showChevron) {
      return (
        <MaterialIcons
          name="chevron-right"
          size={24}
          color={theme.colors.neutral5}
        />
      );
    }

    return null;
  };

  return (
    <CardDetailRow
      label={label}
      value={renderValue()}
      labelStyle={globalStyles.neutral1}
      {...(onPress ? { onPress } : {})}
    />
  );
};

export default SettingsRow;

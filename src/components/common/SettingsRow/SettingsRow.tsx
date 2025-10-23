import React from 'react';
import { useTheme } from '@/theme';
import { CardDetailRow } from '@/components/ui';
import { SettingsRowProps } from './SettingsRow.types';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useGlobalStyles } from '@/hooks';

export const SettingsRow: React.FC<SettingsRowProps> = ({
  label,
  onPress,
  showChevron = true,
}) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  return (
    <CardDetailRow
      label={label}
      value={
        showChevron && (
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={theme.colors.neutral5}
          />
        )
      }
      labelStyle={globalStyles.neutral1}
      {...(onPress ? { onPress } : {})}
    />
  );
};

export default SettingsRow;

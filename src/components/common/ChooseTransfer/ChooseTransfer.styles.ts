import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';
import { ChooseTransferVariant } from './ChooseTransfer.types';

export const createTransferStyles = (
  theme: Theme,
  variant: ChooseTransferVariant,
  selected: boolean,
) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      gap: 8,
      backgroundColor: selected
        ? variant === 'primary'
          ? theme.colors.primary1
          : theme.colors.semantic3
        : theme.colors.neutral5,
      borderRadius: theme.radius.md,
      width: 120,
      height: 100,
      padding: theme.spacing.md,
      justifyContent: 'center',
    },
  });

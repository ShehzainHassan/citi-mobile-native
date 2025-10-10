import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createCardSelectorStyles = (theme: Theme) =>
  StyleSheet.create({
    balance: {
      marginTop: theme.spacing.sm,
      paddingLeft: theme.spacing.sm,
      color: theme.colors.neutral3,
    },
  });

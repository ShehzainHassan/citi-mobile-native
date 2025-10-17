import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createAccountCardStyles = (theme: Theme) =>
  StyleSheet.create({
    accountSummaryContainer: {
      gap: theme.spacing.sm,
    },
  });

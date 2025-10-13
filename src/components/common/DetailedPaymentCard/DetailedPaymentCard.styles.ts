import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createDetailedPaymentCardStyles = (theme: Theme) =>
  StyleSheet.create({
    dottedBorder: {
      alignItems: 'center',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderStyle: 'dashed',
      borderColor: theme.colors.border,
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.ms,
    },
  });

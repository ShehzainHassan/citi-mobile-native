import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createHeaderStyles = (
  theme: Theme,
  variant: 'primary' | 'secondary',
) =>
  StyleSheet.create({
    safeAreaContainer: {
      backgroundColor:
        variant === 'primary' ? theme.colors.neutral6 : theme.colors.primary1,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.lg,
      paddingBottom: 0,
    },
    backButton: {
      padding: theme.spacing.sml,
    },
    headerText: {
      fontSize: theme.typography.fontSize.xl,
      fontWeight: '600',
      lineHeight: theme.spacing.lgx,
    },
  });

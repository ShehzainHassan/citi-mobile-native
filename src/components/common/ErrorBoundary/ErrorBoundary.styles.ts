import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const errorBoundaryStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.lg,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: theme.spacing.ms,
      color: theme.colors.error,
    },
    message: {
      fontSize: 16,
      color: theme.colors.neutral1,
      marginBottom: theme.spacing.lg,
      textAlign: 'center',
    },
    button: {
      backgroundColor: theme.colors.primary1,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.ml,
      borderRadius: 6,
    },
    buttonText: {
      color: theme.colors.neutral6,
      fontWeight: '600',
      fontSize: 14,
    },
  });

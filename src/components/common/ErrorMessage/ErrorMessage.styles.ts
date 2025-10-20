import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const errorMessageStyles = (theme: Theme) =>
  StyleSheet.create({
    errorContainer: {
      padding: theme.spacing.md,
      marginVertical: theme.spacing.ms,
      marginHorizontal: theme.spacing.md,
      borderRadius: theme.radius.sm,
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.error,
      borderWidth: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    errorHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
    },
    errorText: {
      color: theme.colors.error,
      marginTop: theme.spacing.sm,
      marginBottom: theme.spacing.ms,
    },

    retryButton: {
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      backgroundColor: theme.colors.error,
      borderRadius: theme.radius.ms,
      alignSelf: 'flex-start',
      marginTop: theme.spacing.xs,
    },

    retryText: {
      color: theme.colors.neutral6,
    },

    debugToggle: {
      marginTop: theme.spacing.ms,
      color: theme.colors.textdefault,
      textDecorationLine: 'underline',
    },

    debugDetails: {
      marginTop: theme.spacing.sm,
      color: theme.colors.neutral1,
      fontFamily: 'Courier',
    },
  });

import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createInputStyles = (theme: Theme) =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'column',
      width: '100%',
    },
    inputWrapper: {
      justifyContent: 'center',
      position: 'relative',
    },
    input: {
      backgroundColor: theme.colors.neutral6,
      borderColor: theme.colors.line2,
      borderRadius: theme.radius.md,
      borderWidth: 1,
      minHeight: 48,
      padding: theme.spacing.ms,
    },
    inputError: {
      borderColor: theme.colors.error,
    },
    inputFocused: {
      borderColor: theme.colors.primary1,
    },
    inputLabel: {
      color: theme.colors.textdefault,
      marginBottom: 8,
    },
    inputReadOnly: {
      borderColor: theme.colors.line2,
    },
    rightContainer: {
      alignItems: 'center',
      borderLeftColor: theme.colors.line2,
      borderLeftWidth: 1,
      flexDirection: 'row',
      paddingLeft: theme.spacing.ml,
      position: 'absolute',
      right: theme.spacing.ms,
    },
    rightText: {
      color: theme.colors.neutral4,
    },
    iconContainer: {
      padding: theme.spacing.xs,
      position: 'absolute',
      right: theme.spacing.ms,
    },
    errorContainer: {
      marginTop: theme.spacing.xs,
    },
    noLeftBorder: {
      borderLeftWidth: 0,
    },
  });

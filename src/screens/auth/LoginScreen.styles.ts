import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';

export const createLoginStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.lg,
    },
    header: {
      alignItems: 'center',
      marginTop: theme.spacing.xl * 2,
      marginBottom: theme.spacing.xl,
    },
    logo: {
      width: 120,
      height: 60,
      marginBottom: theme.spacing.md,
    },
    title: {
      fontSize: theme.typography.fontSize.xxl,
      fontWeight: 'bold',
      color: theme.colors.text,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.text,
      textAlign: 'center',
      opacity: 0.7,
      marginTop: theme.spacing.xs,
    },
    form: {
      flex: 1,
      justifyContent: 'center',
    },
    inputContainer: {
      marginBottom: theme.spacing.md,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 8,
      padding: theme.spacing.md,
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.text,
      backgroundColor: theme.colors.surface,
    },
    inputFocused: {
      borderColor: theme.colors.primary,
    },
    loginButton: {
      marginTop: theme.spacing.lg,
    },
    biometricButton: {
      marginTop: theme.spacing.md,
    },
    footer: {
      alignItems: 'center',
      paddingBottom: theme.spacing.lg,
    },
    forgotPassword: {
      color: theme.colors.primary,
      fontSize: theme.typography.fontSize.sm,
      textDecorationLine: 'underline',
    },
  });

import { StyleSheet } from 'react-native';
import { Theme } from './index';

export const createGlobalStyles = (theme: Theme) =>
  StyleSheet.create({
    // Layout patterns
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    paddedContainer: {
      flex: 1,
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.background,
    },
    
    // Typography patterns
    heading1: {
      fontSize: theme.typography.fontSize.xxl,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    heading2: {
      fontSize: theme.typography.fontSize.xl,
      fontWeight: '600',
      color: theme.colors.text,
    },
    bodyText: {
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.text,
      lineHeight: 20,
    },
    caption: {
      fontSize: theme.typography.fontSize.sm,
      color: theme.colors.text,
      opacity: 0.7,
    },
    
    // Card patterns
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      padding: theme.spacing.md,
      marginVertical: theme.spacing.xs,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    
    // Form patterns
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
    inputError: {
      borderColor: '#FF3B30',
    },
    errorText: {
      color: '#FF3B30',
      fontSize: theme.typography.fontSize.sm,
      marginTop: theme.spacing.xs,
    },
    
    // Banking specific patterns
    balanceCard: {
      backgroundColor: theme.colors.primary,
      borderRadius: 16,
      padding: theme.spacing.lg,
      marginVertical: theme.spacing.md,
    },
    balanceAmount: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    transactionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
  });

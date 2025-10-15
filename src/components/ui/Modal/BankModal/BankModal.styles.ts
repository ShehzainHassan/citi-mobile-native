import { StyleSheet } from 'react-native';
import { Theme } from '@/theme';

export const createBankModalStyles = (theme: Theme) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
    },
    modalContainer: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.md,
      padding: theme.spacing.md,
      marginHorizontal: theme.spacing.lg,
      maxHeight: '70%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    headerText: {
      flex: 1,
      textAlign: 'center',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.radius.md,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.lg,
    },
    searchInput: {
      flex: 1,
      marginLeft: theme.spacing.xs,
      color: theme.colors.textdefault,
      fontSize: 14,
      padding: 0,
    },
    scrollArea: {
      flexGrow: 0,
    },
    bankRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      paddingBottom: theme.spacing.ms,
      borderBottomColor: theme.colors.line1,
      marginBottom: theme.spacing.lg,
    },
  });

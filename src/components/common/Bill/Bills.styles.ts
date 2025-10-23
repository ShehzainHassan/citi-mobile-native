import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createBillStyles = (theme: Theme) =>
  StyleSheet.create({
    billContainer: {
      shadowColor: theme.colors.primary1,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.07,
      shadowRadius: 30,
      elevation: 8,
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.md,
      padding: theme.spacing.md,
      marginTop: theme.spacing.xl,
    },
    cardContainer: {
      borderBottomWidth: 0,
      borderRadius: theme.radius.md,
      paddingBottom: 0,
      paddingTop: theme.spacing.ms,
    },
    textContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingVertical: theme.spacing.ms,
      marginTop: theme.spacing.ms,
    },
    totalText: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 24,
      color: theme.colors.neutral1,
    },
    totalAmount: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 24,
    },
  });

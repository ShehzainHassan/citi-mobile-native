import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createTabStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.colors.neutral6,
      flexDirection: 'row',
      height: 90,
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.lg,
      shadowColor: theme.colors.primary1,
      shadowOffset: { width: 0, height: -5 },
      shadowOpacity: 0.12,
      shadowRadius: 15,
      width: '100%',
    },
    icon: {
      height: 28,
      resizeMode: 'contain',
      width: 28,
    },
    label: {
      color: theme.colors.textOnPrimary,
      fontSize: 14,
      fontWeight: '600',
    },
    tab: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: 8,
      padding: theme.spacing.md,
    },
    tabSelected: {
      backgroundColor: theme.colors.primary1,
      borderRadius: theme.radius.ml,
      paddingHorizontal: theme.spacing.ms,
      paddingVertical: theme.spacing.sm,
    },
  });

import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createAuthFooterStyles = (theme: Theme) =>
  StyleSheet.create({
    footerContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      gap: theme.spacing.ms,
      justifyContent: 'center',
      marginBottom: theme.spacing.ml,
    },
  });

import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createBeneficiaryDirectoryStyles = (theme: Theme) =>
  StyleSheet.create({
    scroll: {
      maxHeight: 120,
      marginBottom: theme.spacing.xl,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.ms,
    },
  });

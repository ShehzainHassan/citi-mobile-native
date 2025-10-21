import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createBeneficiaryDirectoryStyles = (theme: Theme) =>
  StyleSheet.create({
    scroll: {
      marginBottom: theme.spacing.xl,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.ms,
      marginVertical: 2,
    },
    beneficiaryContainer: {
      gap: theme.spacing.ms,
    },
  });

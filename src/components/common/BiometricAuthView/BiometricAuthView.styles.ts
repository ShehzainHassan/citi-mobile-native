import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createBiometricAuthViewStyles = (theme: Theme) =>
  StyleSheet.create({
    biometric: {
      marginTop: theme.spacing.lg * -1,
    },
  });

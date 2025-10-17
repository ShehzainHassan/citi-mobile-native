import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createOtpStyles = (theme: Theme) =>
  StyleSheet.create({
    marginTop: {
      marginTop: theme.spacing.ml,
    },
  });

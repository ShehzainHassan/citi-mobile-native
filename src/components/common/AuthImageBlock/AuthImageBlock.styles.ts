import { Theme } from '@/theme';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const createAuthImageStyles = (theme: Theme) =>
  StyleSheet.create({
    authLogo: {
      width: width * 0.5,
      height: width * 0.5,
      maxWidth: 300,
      maxHeight: 300,
      marginVertical: theme.spacing.xl,
      resizeMode: 'contain',
    },
  });

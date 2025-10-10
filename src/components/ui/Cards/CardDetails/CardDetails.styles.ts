import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createCardDetailsStyles = (theme: Theme) =>
  StyleSheet.create({
    cardContainer: {
      gap: theme.spacing.ml,
      marginTop: theme.spacing.lg,
    },
    selectedCard: {
      flex: 1,
    },
  });

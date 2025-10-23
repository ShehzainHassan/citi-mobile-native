import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createCardDetailsStyles = (theme: Theme) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    scrollContent: {
      padding: theme.spacing.md,
    },
    selectedCard: {
      flex: 1,
    },
    bottomAction: {
      padding: theme.spacing.md,
      alignItems: 'center',
    },
    button: {
      alignSelf: 'flex-end',
    },
    cardsGap: {
      marginBottom: theme.spacing.ml,
    },
  });

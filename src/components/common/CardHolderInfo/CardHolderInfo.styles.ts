import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createCardHolderInfoStyles = (theme: Theme) =>
  StyleSheet.create({
    profilePic: {
      width: 40,
      height: 40,
    },
    subContainer: {
      flexDirection: 'row',
      gap: theme.spacing.ms,
      alignItems: 'center',
      paddingBottom: theme.spacing.ms,
    },
    subContainerBorder: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.line1,
    },
    container: {
      paddingVertical: theme.spacing.lg,
    },
  });

import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createBaseModalStyles = (
  theme: Theme,
  modalHeight: number,
  screenWidth: number,
) =>
  StyleSheet.create({
    center: {
      flex: 1,
      textAlign: 'center',
    },
    content: {
      flex: 1,
    },
    header: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.ms,
    },
    headerText: {
      flex: 1,
      textAlign: 'center',
    },
    modalContent: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.md,
      height: modalHeight,
      padding: theme.spacing.md,
      marginHorizontal: theme.spacing.lg,
      alignSelf: 'center',
      width: screenWidth - 40,
    },

    modalOverlay: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      flex: 1,
      justifyContent: 'center',
    },
    row: {
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: theme.spacing.md,
    },
  });

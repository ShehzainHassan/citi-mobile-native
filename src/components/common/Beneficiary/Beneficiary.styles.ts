import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createBeneficiaryStyles = (theme: Theme) =>
  StyleSheet.create({
    addBeneficiary: {
      width: 24,
      height: 24,
    },
    profilePic: {
      borderRadius: theme.radius.lg,
      width: theme.radius.lg * 2,
      height: theme.radius.lg * 2,
    },
    profilePicContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.ms,
    },
    container: {
      width: 100,
      height: 120,
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary4,
      borderRadius: theme.radius.lg,
      width: theme.radius.lg * 2,
      height: theme.radius.lg * 2,
    },
    selectedContainer: {
      backgroundColor: theme.colors.primary1,
    },
    selectedText: {
      color: theme.colors.neutral6,
    },
    touchable: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

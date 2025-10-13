import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createTransactionRowCardStyles = (theme: Theme) =>
  StyleSheet.create({
    amountText: {
      flexShrink: 0,
      textAlign: 'right',
    },
    border: {
      borderBottomWidth: 1,
      borderColor: theme.colors.line1,
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: theme.spacing.ms,
      width: '100%',
    },
    container: {
      gap: theme.spacing.md,
      marginTop: theme.spacing.lg,
    },
    dayText: {
      color: theme.colors.textdefault,
    },
    iconContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: theme.spacing.ms,
    },
    iconImg: {
      width: '100%',
      height: 24,
    },
    iconImgContainer: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary1,
      borderRadius: theme.spacing.sml,
      height: 40,
      justifyContent: 'center',
      width: 40,
    },
    subTitle: {
      color: theme.colors.neutral3,
      width: 200,
    },
    textContainer: {
      gap: theme.spacing.xs,
      justifyContent: 'space-between',
    },
  });

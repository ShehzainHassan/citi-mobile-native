import { Theme } from '@/theme';
import { Dimensions, StyleSheet } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export const createTransactionReportStyles = (theme: Theme) =>
  StyleSheet.create({
    cardChartContainer: {
      gap: theme.spacing.xl,
    },
    container: {
      backgroundColor: theme.colors.primary1,
      flex: 1,
      overflowY: 'hidden',
    },
    graphContainer: {
      backgroundColor: theme.colors.line1,
      borderRadius: theme.radius.lg,
      height: screenHeight * 0.35,
      width: '100%',
    },
    headerContainer: {
      backgroundColor: theme.colors.primary1,
      paddingBottom: theme.spacing.lg * 4,
    },
    scrollable: {
      maxHeight: screenHeight * 0.55,
    },
    subContainer: {
      borderTopLeftRadius: theme.radius.lg,
      borderTopRightRadius: theme.radius.lg,
    },
    transactionContainer: {
      position: 'relative',
      top: -100,
    },
  });

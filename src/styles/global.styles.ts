import { Fonts } from '@/constants/theme';
import { Platform, StyleSheet } from 'react-native';
import { Theme } from '../theme/index';

export const createGlobalStyles = (theme: Theme) =>
  StyleSheet.create({
    centerContainer: {
      alignItems: 'center',
      backgroundColor: theme.colors.neutral6,
      display: 'flex',
      justifyContent: 'center',
      marginVertical: theme.spacing.xl,
    },

    container: {
      backgroundColor: theme.colors.primary1,
      display: 'flex',
      flex: 1,
      paddingTop: theme.spacing.lg,
    },
    paddedContainer: {
      backgroundColor: theme.colors.neutral6,
      padding: theme.spacing.lg,
    },
    roundedContainer: {
      backgroundColor: theme.colors.neutral6,
      borderTopLeftRadius: theme.radius.lg,
      borderTopRightRadius: theme.radius.lg,
      display: 'flex',
      padding: theme.spacing.lg,
      flex: 1,
    },
    header: {
      color: theme.colors.neutral6,
      fontSize: theme.typography.fontSize.xl,
      fontWeight: '600',
      lineHeight: theme.spacing.lgx,
    },
    noHorizontalPadding: {
      paddingHorizontal: 0,
      marginHorizontal: 0,
    },
    noVerticalPadding: {
      paddingVertical: 0,
    },
    noPadding: {
      padding: 0,
    },
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.primary1,
    },
    scrollContent: {
      flexGrow: 1,
      backgroundColor: theme.colors.primary1,
    },
    scrollContentSecondary: {
      flexGrow: 1,
      backgroundColor: theme.colors.neutral6,
    },

    previous: {
      height: 16,
      resizeMode: 'contain',
      width: 16,
    },
    negativePrice: {
      color: theme.colors.semantic1,
    },

    scrollWrapper: {
      maxHeight: 120,
      paddingVertical: 8,
      marginHorizontal: -16,
    },
    scrollContainer: {
      gap: theme.spacing.md,
      paddingHorizontal: theme.spacing.md,
      alignItems: 'center',
    },

    // Typography patterns
    heading1: {
      color: theme.colors.neutral6,
      fontSize: theme.typography.fontSize.xxl,
      fontWeight: '400',
    },
    heading2: {
      color: theme.colors.neutral1,
      fontSize: theme.typography.fontSize.xl,
      fontWeight: '600',
    },
    heading3: {
      color: theme.colors.primary1,
      fontSize: theme.typography.fontSize.base,
      fontWeight: '600',
      lineHeight: theme.spacing.md,
    },
    imgLogo: {
      width: '100%',
      maxHeight: 250,
    },
    titleContainer: {
      gap: theme.spacing.xs,
    },
    transparentBackground: {
      backgroundColor: 'transparent',
    },
    title1: {
      color: theme.colors.primary1,
      fontFamily: Fonts.sans,
      fontSize: theme.typography.fontSize.xxl,
      fontWeight: '600',
      lineHeight: theme.spacing.lgx,
    },
    title2: {
      color: theme.colors.neutral1,
      fontSize: theme.typography.fontSize.xl,
      fontWeight: '600',
      lineHeight: theme.spacing.lgx,
    },
    title3: {
      color: theme.colors.primary1,
      fontSize: theme.typography.fontSize.lg,
      fontWeight: '600',
      lineHeight: theme.spacing.lg,
    },
    body1: {
      color: theme.colors.neutral6,
      fontSize: theme.typography.fontSize.lg,
      fontWeight: '500',
      lineHeight: theme.spacing.md,
    },
    body2: {
      color: theme.colors.neutral6,
      fontSize: theme.typography.fontSize.lg,
      fontWeight: '400',
      lineHeight: theme.spacing.lg,
    },
    body3: {
      color: theme.colors.neutral4,
      fontSize: theme.typography.fontSize.base,
      fontWeight: '500',
      lineHeight: theme.spacing.md,
    },
    bodyText: {
      color: theme.colors.neutral1,
      fontSize: theme.typography.fontSize.base,
      fontWeight: '500',
      lineHeight: theme.spacing.ml,
    },
    sublineMedium14: {
      color: theme.colors.textOnPrimary,
      fontSize: theme.typography.fontSize.base,
      fontWeight: '500',
      lineHeight: theme.spacing.md,
    },
    caption1: {
      color: theme.colors.primary1,
      fontSize: theme.typography.fontSize.sm,
      fontWeight: '600',
      lineHeight: theme.spacing.md,
    },
    caption2: {
      color: theme.colors.neutral1,
      fontSize: theme.typography.fontSize.sm,
      fontWeight: '500',
      lineHeight: theme.spacing.md,
    },
    marginVerticalMd: {
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.lg,
    },
    mediumSpacedContainer: {
      marginBottom: theme.spacing.md,
    },
    rowWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    amountWrapper: {
      marginBottom: 12,
      width: '30%',
    },
    paddedColumn: {
      flex: 1,
      gap: theme.spacing.sm,
      padding: theme.spacing.lg,
    },
    largeSpacedColumn: {
      gap: theme.spacing.lg,
    },
    spacedColumn: {
      gap: theme.spacing.ml,
    },
    mediumSpacedColumn: {
      gap: theme.spacing.md,
    },
    verticalSpread: {
      backgroundColor: theme.colors.neutral6,
      flex: 1,
      flexDirection: 'column',
    },
    amountBtn: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.md,
      elevation: 2,
      padding: theme.spacing.md,
      shadowColor: theme.colors.neutral1,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
    },
    rowContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    primary1: {
      color: theme.colors.primary1,
    },
    neutral1: {
      color: theme.colors.neutral1,
    },
    neutral3: {
      color: theme.colors.neutral3,
    },
    neutral6: {
      color: theme.colors.neutral6,
    },
    semantic1: {
      color: theme.colors.semantic1,
    },
    textDefault: {
      color: theme.colors.textdefault,
    },
    textOnPrimary: {
      color: theme.colors.textOnPrimary,
    },
    fillAll: {
      flex: 1,
    },

    inputRow: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      gap: theme.spacing.md,
      padding: theme.spacing.lg,
    },
    centerText: {
      textAlign: 'center',
    },

    cardContainer: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.md,
      gap: 12,
      padding: theme.spacing.md,
      ...Platform.select({
        web: {
          boxShadow: '0px 4px 30px rgba(54, 41, 183, 0.07)',
        },
        default: {
          shadowColor: theme.colors.primary1,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.07,
          shadowRadius: 30,
          elevation: 6,
        },
      }),
    },

    // Form patterns
    errorText: {
      color: theme.colors.error,
      fontSize: theme.typography.fontSize.sm,
      marginTop: theme.spacing.xs,
    },

    // Banking specific patterns
    balanceCard: {
      backgroundColor: theme.colors.primary1,
      borderRadius: theme.radius.md,
      marginVertical: theme.spacing.md,
      padding: theme.spacing.lg,
    },
    balanceAmount: {
      color: theme.colors.neutral6,
      fontSize: 32,
      fontWeight: 'bold',
    },
    transactionRow: {
      alignItems: 'center',
      borderBottomColor: theme.colors.border,
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: theme.spacing.md,
    },

    authLogoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxHeight: 250,
    },

    authLogo: {
      maxWidth: '75%',
      maxHeight: 200,
      aspectRatio: 213 / 165,
      marginVertical: theme.spacing.lg,
    },
    successImage: {
      width: '100%',
      maxHeight: 250,
      marginBottom: theme.spacing.lg,
    },
    flag: {
      borderRadius: 2,
      height: 30,
      marginRight: 8,
      width: 40,
    },
    imgWrapper: {
      position: 'relative',
      alignItems: 'center',
      width: '100%',
      top: -80,
    },
    profilePic: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },
  });

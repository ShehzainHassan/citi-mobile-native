import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme';
export const createCheckboxStyles = (theme: Theme) =>
  StyleSheet.create({
    box: {
      alignItems: 'center',
      borderRadius: theme.radius.xs,
      borderWidth: theme.spacing.xs / 4,
      height: 24,
      justifyContent: 'center',
      width: 24,
    },
    checkboxContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: theme.spacing.ms,
    },
    checked: {
      height: 16,
      width: 16,
    },
    container: {
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    label: {
      flex: 1,
      fontWeight: '400',
      lineHeight: theme.spacing.ml,
    },
    text: {
      flexShrink: 1,
    },
  });

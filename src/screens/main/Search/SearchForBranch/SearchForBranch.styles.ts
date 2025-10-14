import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createSearchBranchStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.neutral6,
    },
    map: {
      flex: 1,
    },
    header: {
      marginBottom: theme.spacing.md,
    },
    sheetContent: {
      flex: 1,
      paddingHorizontal: theme.spacing.md,
      paddingTop: theme.spacing.sm,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.primary4,
      borderRadius: theme.radius.ms,
      paddingHorizontal: theme.spacing.ms,
      paddingVertical: theme.spacing.sm,
      marginBottom: theme.spacing.md,
    },
    input: {
      flex: 1,
      marginLeft: theme.spacing.sm,
      color: theme.colors.neutral1,
      fontSize: 15,
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.md,
      borderBottomWidth: 0.5,
      borderBottomColor: theme.colors.neutral5,
    },
    iconCircle: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.colors.primary4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemTextContainer: {
      flex: 1,
      marginLeft: theme.spacing.sm,
    },
    bankName: {
      fontSize: 15,
      color: theme.colors.neutral1,
    },
    distance: {
      fontSize: 13,
      color: theme.colors.textdefault,
    },
  });

export const getGreyMapStyle = (theme: Theme) => [
  { elementType: 'geometry', stylers: [{ color: theme.colors.neutral4 }] },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: theme.colors.neutral1 }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: theme.colors.neutral4 }],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: theme.colors.neutral4 }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: theme.colors.neutral1 }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: theme.colors.neutral2 }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{ color: theme.colors.neutral2 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: theme.colors.neutral3 }],
  },
  { featureType: 'transit.line', stylers: [{ visibility: 'off' }] },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: theme.colors.neutral4 }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: theme.colors.neutral2 }],
  },
];

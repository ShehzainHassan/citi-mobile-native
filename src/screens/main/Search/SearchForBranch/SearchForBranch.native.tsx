import React, { useMemo, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from '@/components';
import { MainTabParamList } from '@/navigation/types';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { createSearchBranchStyles } from './SearchForBranch.styles';
import { useTheme } from '@/theme';

export const SearchForBranch: React.FC = () => {
  const allBankLocations = [
    {
      id: '1',
      name: 'Bank 1656 Union Street',
      lat: 37.7749,
      lng: -122.4194,
      distance: '50 m',
    },
    {
      id: '2',
      name: 'Bank Secaucus',
      lat: 37.7849,
      lng: -122.4094,
      distance: '1.2 km',
    },
    {
      id: '3',
      name: 'Bank 1657 Riverside Drive',
      lat: 37.7649,
      lng: -122.4294,
      distance: '5.3 km',
    },
    {
      id: '4',
      name: 'Bank Market Street',
      lat: 37.775,
      lng: -122.418,
      distance: '7.8 km',
    },
    {
      id: '5',
      name: 'Bank Golden Gate',
      lat: 37.808,
      lng: -122.475,
      distance: '10.5 km',
    },
  ];

  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '60%'], []);
  const { theme } = useTheme();
  const styles = createSearchBranchStyles(theme);

  const [search, setSearch] = useState('');

  const filteredBanks = allBankLocations.filter(bank =>
    bank.name.toLowerCase().includes(search.toLowerCase()),
  );

  const greyMapStyle = [
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
    {
      featureType: 'transit.line',
      stylers: [{ visibility: 'off' }],
    },
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

  return (
    <View style={styles.container}>
      <Header title="Branch" onPress={() => navigation.navigate('Search')} />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={greyMapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {filteredBanks.map(location => (
            <Marker
              key={location.id}
              coordinate={{ latitude: location.lat, longitude: location.lng }}
              title={location.name}
              description={`Distance: ${location.distance}`}
              pinColor={theme.colors.primary1}
            />
          ))}
        </MapView>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        handleIndicatorStyle={{ backgroundColor: theme.colors.neutral4 }}
        backgroundStyle={{ backgroundColor: theme.colors.neutral6 }}
      >
        <View style={styles.sheetContent}>
          <View style={styles.searchBar}>
            <MaterialIcons
              name="search"
              size={20}
              color={theme.colors.textdefault}
            />
            <TextInput
              placeholder="Bank"
              style={styles.input}
              placeholderTextColor={theme.colors.textdefault}
              value={search}
              onChangeText={setSearch}
            />
            {search.length > 0 && (
              <TouchableOpacity onPress={() => setSearch('')}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={theme.colors.textdefault}
                />
              </TouchableOpacity>
            )}
          </View>
          <BottomSheetScrollView showsVerticalScrollIndicator={false}>
            {filteredBanks.map(item => (
              <TouchableOpacity key={item.id} style={styles.listItem}>
                <View style={styles.iconCircle}>
                  <MaterialIcons
                    name="location-on"
                    size={22}
                    color={theme.colors.primary1}
                  />
                </View>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.bankName}>{item.name}</Text>
                </View>
                <Text style={styles.distance}>{item.distance}</Text>
              </TouchableOpacity>
            ))}
          </BottomSheetScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};

import React, { useMemo, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from '@/components';
import { MainTabParamList } from '@/navigation/types';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Region,
  MapMarker,
} from 'react-native-maps';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import {
  createSearchBranchStyles,
  getGreyMapStyle,
} from './SearchForBranch.styles';
import { useTheme } from '@/theme';
import { BANK_LOCATIONS } from '@/constants';
import { BankLocation } from '@/types';

export const SearchForBranch: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const mapRef = useRef<MapView>(null);
  const markerRefs = useRef<{ [key: string]: MapMarker | null }>({});
  const snapPoints = useMemo(() => ['25%', '60%'], []);
  const { theme } = useTheme();
  const styles = createSearchBranchStyles(theme);

  const [search, setSearch] = useState('');
  const [selectedBankId, setSelectedBankId] = useState<number | null>(null);

  const filteredBanks = BANK_LOCATIONS.filter(bank =>
    bank.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelectBank = (bank: BankLocation) => {
    setSelectedBankId(bank.id);

    const region: Region = {
      latitude: bank.lat,
      longitude: bank.lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    mapRef.current?.animateToRegion(region, 1000);

    setTimeout(() => {
      markerRefs.current[bank.id]?.showCallout();
    }, 700);
  };

  return (
    <View style={styles.container}>
      <Header title="Branch" onPress={() => navigation.navigate('Search')} />
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={getGreyMapStyle(theme)}
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
              ref={ref => {
                markerRefs.current[location.id] = ref;
              }}
              coordinate={{ latitude: location.lat, longitude: location.lng }}
              title={location.name}
              description={`Distance: ${location.distance}`}
              pinColor={
                selectedBankId === location.id
                  ? theme.colors.primary1
                  : theme.colors.semantic1
              }
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
        <View
          style={{
            paddingHorizontal: theme.spacing.md,
            paddingTop: theme.spacing.sm,
          }}
        >
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
        </View>

        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          {filteredBanks.map(item => {
            const isSelected = selectedBankId === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.listItem,
                  isSelected && {
                    backgroundColor: theme.colors.neutral5,
                  },
                ]}
                onPress={() => handleSelectBank(item)}
              >
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
            );
          })}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

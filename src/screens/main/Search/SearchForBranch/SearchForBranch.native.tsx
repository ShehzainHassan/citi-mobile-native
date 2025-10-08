import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export const SearchForBranch: React.FC = () => {
  const bankLocations = [
    {
      id: "1",
      name: "Bank 1656 Union Street",
      lat: 37.7749,
      lng: -122.4194,
      distance: "50 m",
    },
    {
      id: "2",
      name: "Bank Secaucus",
      lat: 37.7849,
      lng: -122.4094,
      distance: "1.2 km",
    },
    {
      id: "3",
      name: "Bank 1657 Riverside Drive",
      lat: 37.7649,
      lng: -122.4294,
      distance: "5.3 km",
    },
  ];

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {bankLocations.map((location) => (
        <Marker
          key={location.id}
          coordinate={{ latitude: location.lat, longitude: location.lng }}
          title={location.name}
          description={`Distance: ${location.distance}`}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default SearchForBranch;

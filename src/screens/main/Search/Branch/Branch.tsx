// import BottomSheet from "@gorhom/bottom-sheet";
// import React, { useMemo, useRef } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

// const isWeb = Platform.OS === "web";

// const bankLocations = [
//   {
//     id: "1",
//     name: "Bank 1656 Union Street",
//     lat: 37.7749,
//     lng: -122.4194,
//     distance: "50 m",
//   },
//   {
//     id: "2",
//     name: "Bank Secaucus",
//     lat: 37.7849,
//     lng: -122.4094,
//     distance: "1.2 km",
//   },
//   {
//     id: "3",
//     name: "Bank 1657 Riverside Drive",
//     lat: 37.7649,
//     lng: -122.4294,
//     distance: "5.3 km",
//   },
//   {
//     id: "4",
//     name: "Bank Rutherford",
//     lat: 37.7759,
//     lng: -122.4184,
//     distance: "70 m",
//   },
//   {
//     id: "5",
//     name: "Bank 1656 Union Street",
//     lat: 37.7769,
//     lng: -122.4174,
//     distance: "30 m",
//   },
// ];

// const userLocation = { lat: 37.7749, lng: -122.4194 };

// export const SearchForBranch: React.FC = () => {
//   const bottomSheetRef = useRef<BottomSheet>(null);
//   const snapPoints = useMemo(() => ["25%", "50%"], []);

//   const renderBankItem = ({ item }: { item: (typeof bankLocations)[0] }) => (
//     <View style={styles.bankItem}>
//       <Text style={styles.bankName}>{item.name}</Text>
//       <Text style={styles.bankDistance}>{item.distance}</Text>
//     </View>
//   );

//   if (isWeb) {
//     return (
//       <View style={styles.webFallback}>
//         <Text style={styles.webMessage}>
//           Map view is only supported on Android and iOS devices.
//         </Text>
//       </View>
//     );
//   }
//   console.log("BRANCH");
//   return (
//     <MapView
//       provider={PROVIDER_GOOGLE}
//       initialRegion={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//       style={styles.nativeMap}
//     />

//     // <View style={{ flex: 1 }}>
//     //   <MapView style={StyleSheet.absoluteFillObject} />
//     //   {/* <MapView
//     //     style={StyleSheet.absoluteFillObject}
//     //     initialRegion={{
//     //       latitude: userLocation.lat,
//     //       longitude: userLocation.lng,
//     //       latitudeDelta: 0.01,
//     //       longitudeDelta: 0.01,
//     //     }}
//     //     provider={Platform.OS === "android" ? undefined : undefined}>
//     //     {bankLocations.map((bank) => (
//     //       <Marker
//     //         key={bank.id}
//     //         coordinate={{ latitude: bank.lat, longitude: bank.lng }}
//     //         title={bank.name}
//     //         description={bank.distance}
//     //         pinColor="blue"
//     //       />
//     //     ))}

//     //     <Marker
//     //       coordinate={{
//     //         latitude: userLocation.lat,
//     //         longitude: userLocation.lng,
//     //       }}
//     //       title="You are here"
//     //       pinColor="red"
//     //     />
//     //   </MapView> */}

//     //   {/* <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
//     //     <View style={styles.sheetContent}>
//     //       <TextInput
//     //         placeholder="Search for a bank branch..."
//     //         style={styles.searchInput}
//     //         placeholderTextColor="#999"
//     //       />
//     //       <FlatList
//     //         data={bankLocations}
//     //         keyExtractor={(item) => item.id}
//     //         renderItem={renderBankItem}
//     //       />
//     //     </View>
//     //   </BottomSheet> */}
//     // </View>
//   );
// };

// const styles = StyleSheet.create({
//   bankDistance: {
//     color: "#666",
//     fontSize: 14,
//   },
//   bankItem: {
//     borderBottomColor: "#eee",
//     borderBottomWidth: 1,
//     paddingVertical: 10,
//   },
//   bankName: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   container: {
//     flex: 1,
//   },
//   nativeMap: {
//     height: 500,
//     width: 500,
//   },
//   searchInput: {
//     borderColor: "#ccc",
//     borderRadius: 8,
//     borderWidth: 1,
//     height: 40,
//     marginBottom: 12,
//     paddingHorizontal: 12,
//   },
//   sheetContent: {
//     backgroundColor: "#fff",
//     flex: 1,
//     padding: 16,
//   },
//   webFallback: {
//     alignItems: "center",
//     backgroundCoalor: "#f9f9f9",
//     flex: 1,
//     justifyContent: "center",
//     padding: 24,
//   },
//   webMessage: {
//     color: "#333",
//     fontSize: 16,
//     textAlign: "center",
//   },
// });

// export default SearchForBranch;

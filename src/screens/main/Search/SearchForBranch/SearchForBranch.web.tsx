import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const SearchForBranch: React.FC = () => {
  return (
    <View style={styles.webFallback}>
      <Text style={styles.webMessage}>
        Map view is only supported on Android and iOS devices.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  webFallback: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    flex: 1,
    justifyContent: "center",
  },
  webMessage: {
    color: "#333",
    fontSize: 16,
    padding: 20,
    textAlign: "center",
  },
});

export default SearchForBranch;

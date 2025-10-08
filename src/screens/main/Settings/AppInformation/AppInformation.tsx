import { CardDetailRow, CardDetails, Header } from "@/components";
import { useGlobalStyles } from "@/hooks";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

export const AppInformation = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title="App information"
        onPress={() => navigation.navigate("Settings")}
      />
      <View style={globalStyles.paddedColumn}>
        <Text
          style={[
            globalStyles.title2,
            globalStyles.centerContainer,
            globalStyles.transparentBackground,
          ]}
        >
          Citibank E-mobile Banking
        </Text>
        <CardDetails>
          <CardDetailRow
            label="Date of manufacture"
            value="October 2025"
            labelStyle={[globalStyles.neutral1]}
          />
          <CardDetailRow
            label="Version"
            value="9.0.2"
            labelStyle={[globalStyles.neutral1]}
          />
          <CardDetailRow
            label="Language"
            value="English"
            labelStyle={[globalStyles.neutral1]}
          />
        </CardDetails>
      </View>
    </View>
  );
};

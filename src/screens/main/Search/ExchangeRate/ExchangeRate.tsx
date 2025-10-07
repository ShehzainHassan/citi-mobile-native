import { DataTable, Header } from "@/components";
import { EXCHANGE_RATE_TABLE } from "@/constants";
import { useStyles } from "@/hooks/useStyles";
import { MainTabParamList } from "@/navigation/types";
import { getFlagUrl } from "@/utils";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, View } from "react-native";

export const ExchangeRate = () => {
  const { globalStyles } = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title="Exchange rate"
        onPress={() => navigation.navigate("Search")}
      />
      <DataTable
        columns={EXCHANGE_RATE_TABLE.columns}
        rows={EXCHANGE_RATE_TABLE.rows.map((row) => [
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: getFlagUrl(row.countryCode) }}
              style={globalStyles.flag}
              resizeMode="contain"
            />
            <Text style={[globalStyles.body1, globalStyles.neutral1]}>
              {row.countryName}
            </Text>
          </View>,
          row.buy,
          row.sell,
        ])}
      />
    </View>
  );
};

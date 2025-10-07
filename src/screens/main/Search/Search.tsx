import { Images } from "@/assets/images";
import { Header, SearchScreenCard, Tabs } from "@/components";
import { useStyles } from "@/hooks/useStyles";
import { MainTabWithSearchParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native";

export const Search = () => {
  const { globalStyles } = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithSearchParamList>>();

  return (
    <View style={[globalStyles.verticalSpread]}>
      <Header title="Search" onPress={() => navigation.navigate("Home")} />
      <View style={[globalStyles.verticalSpread]}>
        <View style={[globalStyles.paddedColumn, globalStyles.spacedColumn]}>
          <SearchScreenCard
            title="Branch"
            subtitle="Search for branch"
            imageSource={Images.branch}
            onPress={() => navigation.navigate("SearchForBranch")}
          />
          <SearchScreenCard
            title="Interest rate"
            subtitle="Search for interest rate"
            imageSource={Images.interestRate}
            onPress={() => navigation.navigate("InterestRate")}
          />
          <SearchScreenCard
            title="Exchange rate"
            subtitle="Search for exchange rate"
            imageSource={Images.exchangeRate}
            onPress={() => navigation.navigate("ExchangeRate")}
          />
          <SearchScreenCard
            title="Exchange"
            subtitle="Exchange amount of money"
            imageSource={Images.exchange}
            onPress={() => navigation.navigate("Exchange")}
          />
        </View>
        <Tabs />
      </View>
    </View>
  );
};

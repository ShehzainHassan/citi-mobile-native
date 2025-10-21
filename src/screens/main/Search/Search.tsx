import { Images } from '@/assets/images';
import { Header, SearchScreenCard, Tabs } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabWithSearchParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Search = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithSearchParamList>>();

  return (
    <SafeAreaView
      style={[globalStyles.safeArea, globalStyles.verticalSpread]}
      edges={['top', 'bottom']}
    >
      <Header title="Search" onPress={() => navigation.navigate('Home')} />
      <View style={globalStyles.verticalSpread}>
        <View style={[globalStyles.paddedColumn, globalStyles.spacedColumn]}>
          <SearchScreenCard
            title="Branch"
            subtitle="Search for branch"
            imageSource={Images.branch}
            onPress={() => navigation.navigate('SearchForBranch')}
          />
          <SearchScreenCard
            title="Interest rate"
            subtitle="Search for interest rate"
            imageSource={Images.interestRate}
            onPress={() => navigation.navigate('InterestRate')}
          />
          <SearchScreenCard
            title="Exchange rate"
            subtitle="Search for exchange rate"
            imageSource={Images.exchangeRate}
            onPress={() => navigation.navigate('ExchangeRate' as never)}
          />
          <SearchScreenCard
            title="Exchange"
            subtitle="Exchange amount of money"
            imageSource={Images.exchange}
            onPress={() => navigation.navigate('Exchange' as never)}
          />
        </View>
        <Tabs />
      </View>
    </SafeAreaView>
  );
};

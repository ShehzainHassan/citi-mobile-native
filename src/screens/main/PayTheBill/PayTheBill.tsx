import { Images } from '@/assets/images';
import { Header, SearchScreenCard } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabWithSearchParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';

export const PayTheBill = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithSearchParamList>>();

  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title="Pay the bill"
        onPress={() => navigation.navigate('Home')}
      />
      <View style={globalStyles.verticalSpread}>
        <View style={[globalStyles.paddedColumn, globalStyles.spacedColumn]}>
          <SearchScreenCard
            title="Electric bill"
            subtitle="Pay electric bill this month"
            imageSource={Images.branch}
            onPress={() =>
              navigation.navigate('PaymentHistory', {
                selectedType: 'Electric',
              })
            }
          />

          <SearchScreenCard
            title="Water bill"
            subtitle="Pay water bill this month"
            imageSource={Images.interestRate}
            onPress={() =>
              navigation.navigate('PaymentHistory', { selectedType: 'Water' })
            }
          />

          <SearchScreenCard
            title="Mobile bill"
            subtitle="Pay mobile bill this month"
            imageSource={Images.exchangeRate}
            onPress={() =>
              navigation.navigate('PaymentHistory', { selectedType: 'Mobile' })
            }
          />

          <SearchScreenCard
            title="Internet bill"
            subtitle="Pay internet bill this month"
            imageSource={Images.exchange}
            onPress={() =>
              navigation.navigate('PaymentHistory', {
                selectedType: 'Internet',
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

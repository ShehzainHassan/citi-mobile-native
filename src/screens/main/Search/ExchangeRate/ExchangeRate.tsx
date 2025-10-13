import { DataTable, Header, ImageWithFallback } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { exchangeRateTable } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { getFlagUrl } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

export const ExchangeRate = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title="Exchange rate"
        onPress={() => navigation.navigate('Search')}
      />
      <DataTable
        columns={exchangeRateTable.columns}
        rows={exchangeRateTable.rows.map(row => [
          <View key={row.countryCode} style={globalStyles.rowContainer}>
            <ImageWithFallback
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

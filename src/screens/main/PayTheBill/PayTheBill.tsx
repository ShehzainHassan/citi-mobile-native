import { Header, SearchScreenCard } from '@/components';
import { BILL_CARDS_CONFIG } from '@/config';
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
          {BILL_CARDS_CONFIG.map((card, index) => (
            <SearchScreenCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              imageSource={card.image}
              onPress={() => navigation.navigate(card.route, card.params)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

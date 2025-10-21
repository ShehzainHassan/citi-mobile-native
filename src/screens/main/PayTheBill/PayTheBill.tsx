import { Header, SearchScreenCard } from '@/components';
import { BILL_CARDS_CONFIG } from '@/config';
import { useGlobalStyles } from '@/hooks';
import { MainTabWithSearchParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PayTheBill = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithSearchParamList>>();

  return (
    <SafeAreaView
      style={[globalStyles.safeArea, globalStyles.verticalSpread]}
      edges={['top', 'bottom']}
    >
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
    </SafeAreaView>
  );
};

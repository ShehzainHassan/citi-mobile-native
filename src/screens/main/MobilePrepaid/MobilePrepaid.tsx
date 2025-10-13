import { CardSelectorModal, Header, Input } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';

export const MobilePrepaid = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title="Mobile prepaid"
        onPress={() => navigation.navigate('Home')}
      />
      <View style={[globalStyles.paddedColumn]}>
        <CardSelectorModal
          value={selectedCard}
          onChange={setSelectedCard}
          showBalance={true}
        />
        <Input label="Phone number" placeholder="Phone number" />
      </View>
    </View>
  );
};

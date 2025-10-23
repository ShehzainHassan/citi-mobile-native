import { Button, ChooseCard, Header } from '@/components';
import { useAccountScreenStyles, useGlobalStyles } from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { MainTabParamList } from '@/navigation/types';
import { Card } from '@/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CardsScreen = () => {
  const globalStyles = useGlobalStyles();
  const accountScreenStyles = useAccountScreenStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { t } = useTranslation();

  const handleTabPress = useCallback(() => {
    navigation.navigate('Accounts');
  }, [navigation]);

  const handleCardSelect = useCallback(
    (card: Card) => {
      navigation.navigate('CardDetails', { card });
    },
    [navigation],
  );

  return (
    <SafeAreaView
      style={[globalStyles.safeArea, globalStyles.verticalSpread]}
      edges={['top', 'bottom']}
    >
      <Header
        title={t(TranslationKeys.accounts.titleDefault)}
        onPress={() => navigation.navigate('Home')}
      />

      <ScrollView style={globalStyles.paddedColumn}>
        <View style={accountScreenStyles.buttonsContainer}>
          <Button
            title={t(TranslationKeys.accounts.tabAccount)}
            variant="secondary"
            style={accountScreenStyles.button}
            onPress={handleTabPress}
          />
          <Button
            title={t(TranslationKeys.accounts.tabCard)}
            variant="primary"
            style={accountScreenStyles.button}
          />
        </View>

        <ChooseCard onCardPress={handleCardSelect} />
      </ScrollView>
    </SafeAreaView>
  );
};

import { CardDetailRow, CardDetails, Header } from '@/components';
import { useAppSelector, useCardDetailStyles, useGlobalStyles } from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { MainTabParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { currencySymbolsMap, maskCardNumber } from '@/utils';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CardDetailsScreen = () => {
  const globalStyles = useGlobalStyles();
  const cardDetailStyles = useCardDetailStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { t } = useTranslation();
  const route = useRoute<RouteProp<MainTabParamList, 'CardDetails'>>();
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;
  const { card } = route.params;

  const cardDetails = useMemo(
    () => [
      {
        label: t(TranslationKeys.accounts.cardDetails.name),
        value: card.cardholderName,
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.cardNumber),
        value: maskCardNumber(card.cardNumber.toString()),
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.validFrom),
        value: card.validFrom || '-',
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.goodThru),
        value: card.goodThru || '-',
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.availableBalance),
        value: `${symbol}${card.balance.toLocaleString()}`,
      },
    ],
    [card, t, symbol],
  );

  return (
    <SafeAreaView
      style={[globalStyles.safeArea, globalStyles.verticalSpread]}
      edges={['top', 'bottom']}
    >
      <Header
        title={t(TranslationKeys.accounts.titleCard)}
        onPress={() => navigation.goBack()}
      />

      <View style={[cardDetailStyles.screenContainer]}>
        <ScrollView contentContainerStyle={cardDetailStyles.scrollContent}>
          <CardDetails>
            {cardDetails.map(({ label, value }, index) => (
              <View key={index} style={cardDetailStyles.cardsGap}>
                <CardDetailRow label={label} value={value} />
              </View>
            ))}
          </CardDetails>
        </ScrollView>

        <View style={cardDetailStyles.bottomAction}>
          <Text
            style={[
              globalStyles.body1,
              globalStyles.semantic1,
              globalStyles.centerText,
            ]}
          >
            {t(TranslationKeys.accounts.deleteCard)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

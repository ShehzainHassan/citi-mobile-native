import { Images } from '@/assets/images';
import {
  AccountCard,
  Button,
  CardDetailRow,
  CardDetails,
  ChooseCard,
  Header,
  OptimizedImage,
} from '@/components';
import {
  useAccountScreenStyles,
  useAppSelector,
  useCardDetailStyles,
  useGlobalStyles,
  useUserAccounts,
} from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { MainTabParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { Card } from '@/types';
import { currencySymbolsMap, maskCardNumber } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TabType = 'Account' | 'Card';

export const Accounts = () => {
  const globalStyles = useGlobalStyles();
  const accountScreenStyles = useAccountScreenStyles();
  const cardDetailStyles = useCardDetailStyles();
  const [selectedTab, setSelectedTab] = useState<TabType>('Account');
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { t } = useTranslation();
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;
  const { data: accounts } = useUserAccounts();
  const title = selectedCard
    ? t(TranslationKeys.accounts.titleCard)
    : t(TranslationKeys.accounts.titleDefault);

  const handleHeaderPress = useCallback(() => {
    if (!selectedCard) {
      navigation.navigate('Home');
    } else {
      setSelectedCard(null);
    }
  }, [selectedCard]);

  const handleTabPress = useCallback((tab: TabType) => {
    setSelectedTab(tab);
  }, []);

  const handleCardSelect = useCallback((card: Card) => {
    setSelectedCard(card);
  }, []);

  const cardDetails = useMemo(() => {
    if (!selectedCard) return [];

    return [
      {
        label: t(TranslationKeys.accounts.cardDetails.name),
        value: selectedCard.cardholderName,
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.cardNumber),
        value: maskCardNumber(selectedCard.cardNumber.toString()),
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.validFrom),
        value: selectedCard.validFrom || '-',
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.goodThru),
        value: selectedCard.goodThru || '-',
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.availableBalance),
        value: `${symbol}${selectedCard.balance.toLocaleString()}`,
      },
    ];
  }, [selectedCard, t, symbol]);

  return (
    <SafeAreaView
      style={[globalStyles.safeArea, globalStyles.verticalSpread]}
      edges={['top', 'bottom']}
    >
      <Header title={title} onPress={handleHeaderPress} />

      <ScrollView style={globalStyles.paddedColumn}>
        {!selectedCard && (
          <View style={accountScreenStyles.buttonsContainer}>
            {(['Account', 'Card'] as TabType[]).map(tab => (
              <Button
                key={tab}
                title={
                  tab === 'Account'
                    ? t(TranslationKeys.accounts.tabAccount)
                    : t(TranslationKeys.accounts.tabCard)
                }
                variant={selectedTab === tab ? 'primary' : 'secondary'}
                style={accountScreenStyles.button}
                onPress={() => handleTabPress(tab)}
              />
            ))}
          </View>
        )}

        {selectedTab === 'Account' && !selectedCard && (
          <View style={accountScreenStyles.accountSection}>
            <View style={accountScreenStyles.profilePicContainer}>
              <OptimizedImage
                source={Images.profilePic}
                style={accountScreenStyles.profilePic}
                accessibilityLabel={t(TranslationKeys.accounts.profilePicAlt)}
              />
              <Text style={globalStyles.title3}>
                {t(TranslationKeys.accounts.profileName)}
              </Text>
            </View>
            <View style={globalStyles.spacedColumn}>
              {accounts &&
                accounts.map((account, index) => (
                  <AccountCard
                    key={index}
                    accountName={account.title}
                    accountNumber={account.accNo.toString()}
                    subText1={account.subText1}
                    subText1Value={`${symbol}${account.balance.toLocaleString()}`}
                    subText2={account.subText2}
                    subText2Value={account.branch}
                  />
                ))}
            </View>
          </View>
        )}

        {selectedTab === 'Card' && !selectedCard && (
          <ChooseCard onCardPress={handleCardSelect} />
        )}

        {selectedCard && (
          <View style={cardDetailStyles.selectedCard}>
            <CardDetails>
              {cardDetails.map(({ label, value }, index) => (
                <CardDetailRow key={index} label={label} value={value} />
              ))}
            </CardDetails>
            <Text style={[globalStyles.body1, accountScreenStyles.deleteCard]}>
              {t(TranslationKeys.accounts.deleteCard)}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

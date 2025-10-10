import { Images } from '@/assets/images';
import {
  AccountCard,
  Button,
  CardDetailRow,
  CardDetails,
  ChooseCard,
  Header,
  ImageWithFallback,
} from '@/components';
import { Card } from '@/components/common/ChooseCard/ChooseCard.types';
import {
  useAccountScreenStyles,
  useCardDetailStyles,
  useGlobalStyles,
} from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { cards } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

type TabType = 'Account' | 'Card';

export const Accounts = () => {
  const globalStyles = useGlobalStyles();
  const accountScreenStyles = useAccountScreenStyles();
  const cardDetailStyles = useCardDetailStyles();

  const [selectedTab, setSelectedTab] = useState<TabType>('Account');
  const [selectedCardType, setSelectedCardType] = useState<Card | null>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { t } = useTranslation();

  const title = selectedCardType
    ? t(TranslationKeys.accounts.titleCard)
    : t(TranslationKeys.accounts.titleDefault);

  const handleHeaderPress = useCallback(() => {
    if (!selectedCardType) {
      navigation.navigate('Home');
    } else {
      setSelectedCardType(null);
    }
  }, [selectedCardType]);

  const handleTabPress = useCallback((tab: TabType) => {
    setSelectedTab(tab);
  }, []);

  const handleCardSelect = useCallback((type: Card) => {
    setSelectedCardType(type);
  }, []);

  const cardDetails = useMemo(
    () => [
      {
        label: t(TranslationKeys.accounts.cardDetails.name),
        value: t(TranslationKeys.accounts.profileName),
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.cardNumber),
        value: '**** **** 9018',
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.validFrom),
        value: '10/15',
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.goodThru),
        value: '10/20',
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.availableBalance),
        value: '$10,000',
      },
    ],
    [t],
  );

  return (
    <View style={globalStyles.verticalSpread}>
      <Header title={title} onPress={handleHeaderPress} />

      <View style={globalStyles.paddedColumn}>
        {!selectedCardType && (
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

        {selectedTab === 'Account' && !selectedCardType && (
          <View style={accountScreenStyles.accountSection}>
            <View style={accountScreenStyles.profilePicContainer}>
              <ImageWithFallback
                source={Images.profilePic}
                style={accountScreenStyles.profilePic}
                accessibilityLabel={t(TranslationKeys.accounts.profilePicAlt)}
              />
              <Text style={globalStyles.title3}>
                {t(TranslationKeys.accounts.profileName)}
              </Text>
            </View>
            <View style={globalStyles.spacedColumn}>
              {Array.from({ length: 3 }).map((_, idx) => (
                <AccountCard key={idx} />
              ))}
            </View>
          </View>
        )}

        {selectedTab === 'Card' && !selectedCardType && (
          <ChooseCard
            cards={cards.map(card => ({
              ...card,
              type: card.type as Card['type'],
            }))}
            onAddCard={() => console.log('')}
            onCardPress={(type: Card) => handleCardSelect(type)}
          />
        )}

        {selectedCardType && (
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
      </View>
    </View>
  );
};

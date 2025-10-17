import { Images } from '@/assets/images';
import {
  CreditCard,
  HomeScreenCard,
  ImageWithFallback,
  Tabs,
} from '@/components';
import {
  useGlobalStyles,
  useHomeScreen,
  useHomeScreenStyles,
  useAppSelector,
} from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { AuthStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootState } from '@/store';
import { currencySymbolsMap } from '@/utils';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const globalStyles = useGlobalStyles();
  const homeScreenStyles = useHomeScreenStyles();

  const { t } = useTranslation();
  const { cardGrid, handleCardPress } = useHomeScreen();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['bottom']}>
      <View style={homeScreenStyles.mainContainer}>
        <View style={homeScreenStyles.headerContainer}>
          <View style={homeScreenStyles.profilePicContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <ImageWithFallback
                source={Images.profilePic}
                style={homeScreenStyles.profilePic}
                accessibilityLabel={t(TranslationKeys.homeScreen.profilePicAlt)}
              />
            </TouchableOpacity>
            <Text style={globalStyles.body1}>
              {t(TranslationKeys.homeScreen.greeting, { name: 'John' })}
            </Text>
          </View>
          <ImageWithFallback
            source={Images.notification}
            style={homeScreenStyles.notificationBell}
            accessibilityLabel={t(TranslationKeys.homeScreen.notificationAlt)}
          />
        </View>

        <View
          style={[globalStyles.roundedContainer, homeScreenStyles.container]}
        >
          <CreditCard
            name="John Smith"
            cardType="Amazon Platinium"
            cardNumber="475612349018"
            amount={`${symbol}3,469.52`}
            backgroundImage={Images.cards}
          />

          <View style={homeScreenStyles.columnContainer}>
            {cardGrid.map((row, rowIndex) => (
              <View
                key={`row-${rowIndex}`}
                style={homeScreenStyles.rowContainer}
              >
                {row.map(card => (
                  <HomeScreenCard
                    key={card.id}
                    image={card.image}
                    label={card.label}
                    onPress={() => handleCardPress(card)}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>
        <Tabs />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

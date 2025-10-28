import { Images } from '@/assets/images';
import { CreditCard, HomeScreenCard, OptimizedImage, Tabs } from '@/components';
import {
  useAppSelector,
  useAuth,
  useGlobalStyles,
  useHomeScreen,
  useHomeScreenStyles,
  usePrimaryCard,
} from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { AuthStackParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { currencySymbolsMap } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
  const { data } = usePrimaryCard();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['top', 'bottom']}>
      <ScrollView style={homeScreenStyles.mainContainer}>
        <View style={homeScreenStyles.headerContainer}>
          <View style={homeScreenStyles.profilePicContainer}>
            <TouchableOpacity onPress={handleLogout}>
              <OptimizedImage
                source={Images.profilePic}
                style={homeScreenStyles.profilePic}
                accessibilityLabel={t(TranslationKeys.homeScreen.profilePicAlt)}
              />
            </TouchableOpacity>
            <Text style={[globalStyles.body1, globalStyles.textOnPrimary]}>
              {t(TranslationKeys.homeScreen.greeting, { name: 'John' })}
            </Text>
          </View>
          <OptimizedImage
            source={Images.notification}
            style={homeScreenStyles.notificationBell}
            accessibilityLabel={t(TranslationKeys.homeScreen.notificationAlt)}
          />
        </View>

        <View
          style={[globalStyles.roundedContainer, homeScreenStyles.container]}
        >
          {data && (
            <CreditCard
              name={data.cardholderName}
              cardType={data.cardLabel ?? ''}
              cardNumber={data.cardNumber}
              amount={`${symbol}${data.balance}`}
              backgroundImage={Images.cards}
            />
          )}

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
      </ScrollView>
      <Tabs />
    </SafeAreaView>
  );
};

export default HomeScreen;

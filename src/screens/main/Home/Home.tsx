import { Images } from '@/assets/images';
import {
  CreditCard,
  ErrorMessage,
  HomeScreenCard,
  OptimizedImage,
  Tabs,
} from '@/components';
import {
  useAppSelector,
  useGlobalStyles,
  useHomeScreen,
  useHomeScreenStyles,
  useToast,
} from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { AuthStackParamList } from '@/navigation/types';
import { authService } from '@/services';
import { RootState } from '@/store';
import { clearAuth } from '@/store/slices/authSlice/authSlice';
import { currencySymbolsMap } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

export const HomeScreen = () => {
  const globalStyles = useGlobalStyles();
  const homeScreenStyles = useHomeScreenStyles();
  const { success, error: showToastError } = useToast();

  const { t } = useTranslation();
  const { cardGrid, handleCardPress } = useHomeScreen();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const dispatch = useDispatch();

  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  const [logoutError, setLogoutError] = useState<Error | null>(null);

  const handleLogout = async () => {
    try {
      await authService.signOut();
      dispatch(clearAuth());
      success('Signed out', 'Hope to see you again!');
      navigation.navigate('SignIn');
      setLogoutError(null);
    } catch (err: unknown) {
      const parsedError =
        err instanceof Error ? err : new Error('Unexpected error');
      showToastError('Logout Failed', parsedError.message);
      setLogoutError(parsedError);
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['top', 'bottom']}>
      <View style={homeScreenStyles.mainContainer}>
        <View style={homeScreenStyles.headerContainer}>
          <View style={homeScreenStyles.profilePicContainer}>
            <TouchableOpacity onPress={handleLogout}>
              <OptimizedImage
                source={Images.profilePic}
                style={homeScreenStyles.profilePic}
                accessibilityLabel={t(TranslationKeys.homeScreen.profilePicAlt)}
              />
            </TouchableOpacity>
            <Text style={globalStyles.body1}>
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

          {logoutError && (
            <ErrorMessage error={logoutError} onRetry={handleLogout} />
          )}
        </View>

        <Tabs />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

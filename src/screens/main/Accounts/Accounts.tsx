import { Images } from '@/assets/images';
import { AccountCard, Button, Header, OptimizedImage } from '@/components';
import {
  useAccountScreenStyles,
  useAppSelector,
  useGlobalStyles,
  useUserAccounts,
} from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { MainTabParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { currencySymbolsMap } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AccountsScreen = () => {
  const globalStyles = useGlobalStyles();
  const accountScreenStyles = useAccountScreenStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { t } = useTranslation();
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;
  const { data: accounts } = useUserAccounts();

  const handleTabPress = useCallback(() => {
    navigation.navigate('Cards');
  }, [navigation]);

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
            variant="primary"
            style={accountScreenStyles.button}
          />
          <Button
            title={t(TranslationKeys.accounts.tabCard)}
            variant="secondary"
            style={accountScreenStyles.button}
            onPress={handleTabPress}
          />
        </View>

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
            {accounts?.map((account, index) => (
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
      </ScrollView>
    </SafeAreaView>
  );
};

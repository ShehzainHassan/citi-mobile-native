import { Images } from '@/assets/images';
import {
  Button,
  ChooseCard,
  Header,
  Input,
  OptimizedImage,
  SuccessScreen,
} from '@/components';
import { BaseModal } from '@/components/ui/Modal';
import { createCardSelectorStyles } from '@/components/ui/Modal/CardSelectorModal/CardSelectorModal.styles';
import { useAppSelector, useGlobalStyles } from '@/hooks';
import { timeDeposits } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { useTheme } from '@/theme';
import { currencySymbolsMap, sanitizeAmount } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Add = () => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  const cardSelectorStyles = createCardSelectorStyles(theme);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [timeDeposit, setTimeDeposit] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [showCardScreen, setShowCardScreen] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [card, setCard] = useState('');
  const [amount, setAmount] = useState('');

  if (showSuccessScreen) {
    return (
      <SuccessScreen
        source={Images.withdrawBanner}
        title="Save online successfully!"
        subtitle="Congratulations! You have save money online successfully!"
        btnText="Confirm"
        onPress={() => navigation.navigate('Home')}
      />
    );
  }

  if (showCardScreen) {
    return (
      <ChooseCard
        headerText="Choose card"
        onBack={() => setShowCardScreen(false)}
        onCardPress={c => {
          setCard(`Account ${c.cardNumber}`);
          setShowCardScreen(false);
        }}
      />
    );
  }

  const handleAmountChange = (text: string) => {
    const numericPart = text.replace(/[^0-9]/g, '');
    if (numericPart) {
      setAmount(`${symbol}${numericPart}`);
    } else {
      setAmount('');
    }
  };

  return (
    <SafeAreaView style={globalStyles.verticalSpread} edges={['top', 'bottom']}>
      <KeyboardAwareScrollView
        contentContainerStyle={globalStyles.scrollContentSecondary}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
        extraScrollHeight={Platform.OS === 'ios' ? 80 : 0}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Add" onPress={() => navigation.navigate('SaveOnline')} />
        <View style={globalStyles.paddedColumn}>
          <OptimizedImage
            source={Images.withdrawBanner}
            style={[globalStyles.imgLogo]}
          />
          <View style={[globalStyles.cardContainer]}>
            <TouchableOpacity
              onPress={() => setShowCardScreen(true)}
              style={globalStyles.mediumSpacedContainer}
            >
              <Input
                value={card}
                readOnly
                placeholder="Choose account / card"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View>
                <Input
                  value={timeDeposit}
                  readOnly={true}
                  placeholder="Choose time deposit"
                  style={
                    !timeDeposit
                      ? globalStyles.mediumSpacedContainer
                      : undefined
                  }
                />
                {timeDeposit && (
                  <Text
                    style={[cardSelectorStyles.balance, globalStyles.primary1]}
                  >
                    Interest rate {interestRate} / {timeDeposit}
                  </Text>
                )}
              </View>
            </TouchableOpacity>

            <View>
              <Input
                value={amount}
                placeholder={`Amount (At least ${symbol}1000)`}
                style={globalStyles.mediumSpacedContainer}
                keyboardType="number-pad"
                onChangeText={handleAmountChange}
              />
            </View>

            <Button
              title="Verify"
              disabled={
                !card ||
                !timeDeposit ||
                !amount ||
                amount === `${symbol}` ||
                sanitizeAmount(amount) < 1000
              }
              onPress={() => setShowSuccessScreen(true)}
            />
          </View>
        </View>

        <BaseModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          header="Choose time deposit"
          contents={timeDeposits}
          selectedItem={`${timeDeposit} (Interest rate ${interestRate})`}
          onSelect={value => {
            const match = value.match(
              /(\d+\smonths).*\((Interest rate\s[\d.]+%)\)/,
            );
            if (match) {
              setTimeDeposit(match[1]);
              setInterestRate(match[2].replace('Interest rate ', ''));
            }
            setModalVisible(false);
          }}
          alignCenter
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

import { Images } from '@/assets/images';
import {
  AmountSelector,
  Button,
  CardSelectorModal,
  Header,
  ImageWithFallback,
  PhoneNumberInput,
  SuccessScreen,
} from '@/components';
import { useAppSelector, useAuthStyles, useGlobalStyles } from '@/hooks';
import { useAmountSelector } from '@/hooks/useAmountSelector';
import { MainTabParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { currencySymbolsMap } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Withdraw = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  const amounts = [
    `${symbol}10`,
    `${symbol}50`,
    `${symbol}100`,
    `${symbol}150`,
    `${symbol}200`,
    'Other',
  ];

  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [phone, setPhone] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    selectedAmount,
    customAmount,
    handleAmountPress,
    handleCustomAmountChange,
    reset: resetAmount,
  } = useAmountSelector();

  const resetForm = () => {
    setSelectedCard(null);
    setPhone('');
    setIsSuccess(false);
    resetAmount();
  };

  const isVerifyDisabled =
    !selectedCard ||
    !phone ||
    !selectedAmount ||
    (selectedAmount === 'Other' && customAmount === '$ ');

  const handleVerify = () => {
    if (!isVerifyDisabled) {
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    return (
      <SuccessScreen
        title="Successful Withdrawal"
        subtitle="You have successfully withdrawn money! Please check the balance in the card management section."
        btnText="Confirm"
        source={Images.withdrawBanner}
        onPress={() => {
          resetForm();
          navigation.navigate('Home');
        }}
      />
    );
  }

  return (
    <View style={globalStyles.verticalSpread}>
      <Header title="Withdraw" onPress={() => navigation.navigate('Home')} />
      <ImageWithFallback
        contentFit="contain"
        source={Images.withdrawBanner}
        style={[globalStyles.imgLogo, styles.imageContainer]}
      />

      <View style={[globalStyles.paddedColumn, styles.spacedContainer]}>
        <View>
          <View style={authStyles.inputContainer}>
            <CardSelectorModal
              value={selectedCard}
              onChange={setSelectedCard}
              showBalance
            />
            <PhoneNumberInput
              placeholder="Phone number"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <Text
            style={[
              globalStyles.caption1,
              globalStyles.textDefault,
              globalStyles.marginVerticalMd,
            ]}
          >
            Choose amount
          </Text>

          <AmountSelector
            amounts={amounts}
            selectedAmount={selectedAmount}
            customAmount={customAmount}
            onAmountPress={handleAmountPress}
            onCustomAmountChange={handleCustomAmountChange}
          />
        </View>

        <Button
          title="Verify"
          disabled={isVerifyDisabled}
          onPress={handleVerify}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 56,
    marginTop: 40,
  },
  spacedContainer: {
    justifyContent: 'space-between',
  },
});

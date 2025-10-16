import {
  AmountSelector,
  BeneficiaryDirectory,
  Button,
  CardSelectorModal,
  Header,
  PhoneNumberInput,
  SuccessScreen,
} from '@/components';
import { useAppSelector, useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { currencySymbolsMap, maskCardNumber } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useAmountSelector } from '@/hooks/useAmountSelector';
import { Images } from '@/assets/images';
import { RootState } from '@/store';

export const MobilePrepaid = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<string | null>(
    null,
  );
  const [phone, setPhone] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  const {
    selectedAmount,
    customAmount,
    handleAmountPress,
    handleCustomAmountChange,
    reset: resetAmount,
  } = useAmountSelector();

  const amounts = [`${symbol}10`, `${symbol}20`, 'Other'];

  const handleConfirm = () => {
    navigation.navigate('MobilePrepaidConfirm', {
      fromCard: maskCardNumber(selectedCard!),
      toPhone: phone,
      amount: selectedAmount === 'Other' ? customAmount : selectedAmount!,
    });
  };

  const resetForm = () => {
    setSelectedCard(null);
    setSelectedBeneficiary(null);
    setPhone('');
    setIsSuccess(false);
    resetAmount();
  };

  const isConfirmDisabled =
    !selectedCard ||
    !phone ||
    !selectedAmount ||
    !selectedBeneficiary ||
    (selectedAmount === 'Other' && customAmount === '$ ');

  if (isSuccess) {
    return (
      <SuccessScreen
        title="Mobile Prepaid Success"
        subtitle="Your mobile prepaid transaction was successful."
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
      <Header
        title="Mobile prepaid"
        onPress={() => navigation.navigate('Home')}
      />

      <View style={[globalStyles.paddedColumn, globalStyles.largeSpacedColumn]}>
        <CardSelectorModal
          value={selectedCard}
          onChange={setSelectedCard}
          showBalance
        />

        <View style={globalStyles.verticalSpread}>
          <BeneficiaryDirectory
            title="Directory"
            subtitle="Find beneficiary"
            selectedBeneficiary={selectedBeneficiary}
            onSelect={setSelectedBeneficiary}
          />

          <PhoneNumberInput
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
          />

          <Text
            style={[
              globalStyles.caption1,
              globalStyles.textDefault,
              styles.amountContainer,
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

          <Button
            title="Confirm"
            disabled={isConfirmDisabled}
            onPress={handleConfirm}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amountContainer: {
    marginVertical: 16,
  },
});

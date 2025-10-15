import {
  Button,
  CardSelectorModal,
  Header,
  Input,
  BeneficiaryDirectory,
} from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { maskCardNumber } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MobilePrepaid = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<string | null>(
    null,
  );
  const [phone, setPhone] = useState<string>('');
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('$');

  const amounts = ['$10', '$20', 'Other'];

  const handlePhoneChange = (text: string) => {
    const numericPart = text.replace(/[^0-9]/g, '');
    setPhone(`+${numericPart}`);
  };

  const handleCustomAmountChange = (text: string) => {
    const numericPart = text.replace(/[^0-9]/g, '');
    setCustomAmount(`$${numericPart}`);
  };

  const handleAmountPress = (amt: string) => {
    setSelectedAmount(amt);
  };

  const handleConfirm = () => {
    navigation.navigate('MobilePrepaidConfirm', {
      fromCard: maskCardNumber(selectedCard!),
      toPhone: phone,
      amount:
        selectedAmount === 'Other' ? customAmount : (selectedAmount as string),
    });
  };

  const isConfirmDisabled =
    !selectedCard ||
    !phone ||
    !selectedAmount ||
    !selectedBeneficiary ||
    (selectedAmount === 'Other' && customAmount === '$');

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

          <Input
            label="Phone number"
            placeholder="Phone number"
            keyboardType="number-pad"
            value={phone}
            onChangeText={handlePhoneChange}
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

          {selectedAmount === 'Other' && (
            <Input
              placeholder="Enter amount"
              keyboardType="numeric"
              value={customAmount}
              onChangeText={handleCustomAmountChange}
              style={styles.input}
            />
          )}

          <View style={styles.spacedContainer}>
            <View style={[globalStyles.amountContainer]}>
              {amounts.map((amt, index) => (
                <View key={index} style={globalStyles.amountWrapper}>
                  <Button
                    title={amt}
                    onPress={() => handleAmountPress(amt)}
                    variant={selectedAmount === amt ? 'primary' : 'secondary'}
                    style={selectedAmount !== amt && globalStyles.amountBtn}
                    textStyle={
                      selectedAmount !== amt && globalStyles.textDefault
                    }
                  />
                </View>
              ))}
            </View>

            <Button
              title="Confirm"
              disabled={isConfirmDisabled}
              onPress={handleConfirm}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amountContainer: {
    marginVertical: 16,
  },
  spacedContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 16,
  },
});

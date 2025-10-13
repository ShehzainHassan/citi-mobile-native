import { Images } from '@/assets/images';
import {
  Beneficiary,
  Button,
  CardSelectorModal,
  Header,
  Input,
} from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { maskCardNumber } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const MobilePrepaid = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const amounts = ['$10', '$20', 'Other'];
  const [customAmount, setCustomAmount] = useState<string>('$');

  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const handleAmountPress = (amt: string) => {
    setSelectedAmount(amt);
  };
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<string | null>(
    null,
  );
  const [phone, setPhone] = useState<string>('');
  const handlePhoneChange = (text: string) => {
    const numericPart = text.replace(/[^0-9]/g, '');
    setPhone(`+${numericPart}`);
  };
  const handleCustomAmountChange = (text: string) => {
    const numericPart = text.replace(/[^0-9]/g, '');
    setCustomAmount(`$${numericPart}`);
  };
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
          showBalance={true}
        />
        <View style={globalStyles.verticalSpread}>
          <View style={globalStyles.amountContainer}>
            <Text style={[globalStyles.caption1, globalStyles.neutral3]}>
              Directory
            </Text>
            <Text style={[globalStyles.caption1]}>Find beneficiary</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.beneficiaryContainer}
            showsHorizontalScrollIndicator={false}
            style={styles.beneficiaryScroll}
          >
            <Beneficiary
              isNew={true}
              onPress={() => setSelectedBeneficiary(null)}
              selected={selectedBeneficiary === null}
            />
            <Beneficiary
              isNew={false}
              image={Images.profilePic1}
              name="Emma"
              onPress={() => setSelectedBeneficiary('Emma')}
              selected={selectedBeneficiary === 'Emma'}
            />
            <Beneficiary
              isNew={false}
              image={Images.profilePic2}
              name="John"
              onPress={() => setSelectedBeneficiary('John')}
              selected={selectedBeneficiary === 'John'}
            />
            <Beneficiary
              isNew={false}
              image={Images.profilePic2}
              name="James"
              onPress={() => setSelectedBeneficiary('James')}
              selected={selectedBeneficiary === 'James'}
            />
          </ScrollView>

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
              disabled={
                !selectedCard ||
                !phone ||
                !selectedAmount ||
                !selectedBeneficiary ||
                (selectedAmount === 'Other' && customAmount === '$')
              }
              onPress={() =>
                navigation.navigate('MobilePrepaidConfirm', {
                  fromCard: maskCardNumber(selectedCard!),
                  toPhone: phone,
                  amount:
                    selectedAmount === 'Other' ? customAmount : selectedAmount!,
                })
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  beneficiaryScroll: {
    maxHeight: 140,
    marginBottom: 24,
  },
  beneficiaryContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
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

import { Images } from '@/assets/images';
import {
  Button,
  Header,
  ImageWithFallback,
  Input,
  SuccessScreen,
} from '@/components';
import { BaseModal } from '@/components/ui/Modal';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { cards } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { Theme, useTheme } from '@/theme';
import { formatCards } from '@/utils';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Withdraw = () => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const styles = createWithdrawStyles(theme);
  const authStyles = useAuthStyles();
  const amounts = ['$10', '$50', '$100', '$150', '$200', 'Other'];

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('$ ');
  const [phone, setPhone] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  const handleSelectCard = (code: string) => {
    setSelectedCard(code);
    setModalVisible(false);
  };

  const handleAmountPress = (amt: string) => {
    setSelectedAmount(amt);
    if (amt !== 'Other') setCustomAmount('');
  };

  const handleCustomAmountChange = (text: string) => {
    const numericPart = text.replace(/[^0-9]/g, '');
    setCustomAmount(`$ ${numericPart}`);
  };
  const resetForm = () => {
    setSelectedCard(null);
    setSelectedAmount(null);
    setCustomAmount('$ ');
    setPhone('');
    setIsSuccess(false);
  };
  const isVerifyDisabled =
    !selectedCard ||
    !phone ||
    phone === '$ ' ||
    !selectedAmount ||
    (selectedAmount === 'Other' && customAmount === '$ ');

  const handleVerify = () => {
    if (!isVerifyDisabled) {
      setIsSuccess(true);
    }
  };
  const handlePhoneChange = (text: string) => {
    const numericPart = text.replace(/[^0-9]/g, '');
    setPhone(`+${numericPart}`);
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
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.7}
            >
              <Input
                placeholder="Choose account / card"
                value={selectedCard || ''}
                readOnly={true}
                onRightPress={() => setModalVisible(true)}
                rightIcon={
                  <MaterialIcons
                    name="expand-more"
                    size={24}
                    color={theme.colors.neutral4}
                  />
                }
              />
            </TouchableOpacity>

            {selectedCard !== null && (
              <Text style={[globalStyles.caption1, styles.balance]}>
                Available balance: 10,000$
              </Text>
            )}
            <Input
              placeholder="Phone number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={handlePhoneChange}
            />
          </View>

          <Text
            style={[
              globalStyles.caption1,
              globalStyles.textDefault,
              styles.amountLabel,
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

          <View style={styles.amountContainer}>
            {amounts.map((amt, index) => (
              <View key={index} style={styles.amountWrapper}>
                <Button
                  title={amt}
                  variant={selectedAmount === amt ? 'primary' : 'secondary'}
                  onPress={() => handleAmountPress(amt)}
                  style={selectedAmount !== amt && styles.amountBtn}
                  textStyle={selectedAmount !== amt && globalStyles.textDefault}
                />
              </View>
            ))}
          </View>
        </View>

        <Button
          title="Verify"
          disabled={isVerifyDisabled}
          onPress={handleVerify}
        />
      </View>

      <BaseModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        header="Choose account"
        contents={formatCards(cards)}
        selectedItem={selectedCard}
        onSelect={handleSelectCard}
        alignCenter={true}
      />
    </View>
  );
};

const createWithdrawStyles = (theme: Theme) =>
  StyleSheet.create({
    amountBtn: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.md,
      elevation: 2,
      padding: theme.spacing.md,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
    },
    amountContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    amountLabel: {
      marginBottom: 16,
      marginTop: 24,
    },
    amountWrapper: {
      marginBottom: 12,
      width: '30%',
    },
    balance: {
      marginTop: theme.spacing.sm,
      paddingLeft: theme.spacing.ms,
    },
    imageContainer: {
      marginBottom: 56,
      marginTop: 40,
    },
    input: {
      marginBottom: theme.spacing.md,
    },
    spacedContainer: {
      justifyContent: 'space-between',
    },
    subContainer: {
      gap: theme.spacing.lg,
    },
    centerText: {
      textAlign: 'center',
    },
    successContainer: {
      alignItems: 'center',
      backgroundColor: theme.colors.neutral6,
      flex: 1,
      padding: theme.spacing.lg,
    },
  });

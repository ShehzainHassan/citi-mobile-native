import { Images } from '@/assets/images';
import {
  Button,
  CreditCard,
  Header,
  ImageWithFallback,
  Input,
  SuccessScreen,
} from '@/components';
import { createCardSelectorStyles } from '@/components/common/CardSelector/CardSelector.styles';
import { BaseModal } from '@/components/ui/Modal';
import { useAccountScreenStyles, useGlobalStyles } from '@/hooks';
import { timeDeposits } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { useTheme } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { prependDollar, sanitizeAmount } from '@/utils';

export const Add = () => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const accountScreenStyles = useAccountScreenStyles();
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
      <View style={globalStyles.verticalSpread}>
        <Header title="Choose card" onPress={() => setShowCardScreen(false)} />
        <View
          style={[
            globalStyles.paddedColumn,
            accountScreenStyles.cardsContainer,
          ]}
        >
          <CreditCard
            name="John Smith"
            cardType="Amazon Platinium"
            cardNumber="475612349018"
            amount="$3.469.52"
            backgroundImage={Images.visaCard}
            style={{ margin: -20 }}
            onPress={() => {
              setCard('Account 1900 8988 5456');
              setShowCardScreen(false);
            }}
          />
          <CreditCard
            name="John Smith"
            cardType="Amazon Platinium"
            cardNumber="475612349018"
            amount="$3.469.52"
            backgroundImage={Images.masterCard}
            style={{ margin: -20 }}
            onPress={() => {
              setCard('Account 1900 8988 5456');
              setShowCardScreen(false);
            }}
          />
          <Button title="Add card" />
        </View>
      </View>
    );
  }

  return (
    <View style={globalStyles.verticalSpread}>
      <Header title="Add" onPress={() => navigation.navigate('SaveOnline')} />
      <View style={globalStyles.paddedColumn}>
        <ImageWithFallback
          contentFit="contain"
          source={Images.withdrawBanner}
          style={[globalStyles.imgLogo]}
        />
        <View style={[globalStyles.cardContainer]}>
          <TouchableOpacity onPress={() => setShowCardScreen(true)}>
            <View>
              <Input
                value={card}
                placeholder="Choose account / card"
                readOnly={true}
                style={!card ? globalStyles.mediumSpacedContainer : undefined}
              />
              {card !== '' && (
                <Text
                  style={[cardSelectorStyles.balance, globalStyles.primary1]}
                >
                  Available balance: 10,000$
                </Text>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View>
              <Input
                value={timeDeposit}
                readOnly={true}
                placeholder="Choose time deposit"
                style={
                  !timeDeposit ? globalStyles.mediumSpacedContainer : undefined
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
              placeholder="Amount (At least $1000)"
              style={globalStyles.mediumSpacedContainer}
              keyboardType="number-pad"
              onFocus={() => {
                setAmount(prev => (prev ? prev : '$ '));
              }}
              onChangeText={text => {
                setAmount(prependDollar(text));
              }}
            />
          </View>

          <Button
            title="Verify"
            disabled={
              !card ||
              !timeDeposit ||
              !amount ||
              amount === '$ ' ||
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
    </View>
  );
};

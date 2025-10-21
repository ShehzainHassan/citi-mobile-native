import { Images } from '@/assets/images';
import { Bill, CreditCard, Header } from '@/components';
import {
  useAppSelector,
  useGlobalStyles,
  useTransactionReportStyles,
} from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { currencySymbolsMap } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CreditCardScreen = () => {
  const globalStyles = useGlobalStyles();
  const transactionReportStyles = useTransactionReportStyles();
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  return (
    <SafeAreaView
      style={transactionReportStyles.container}
      edges={['top', 'bottom']}
    >
      <Header
        title="Credit Card"
        variant="secondary"
        onPress={() => navigation.navigate('Home')}
        style={styles.header}
      />
      <View style={globalStyles.roundedContainer}>
        <CreditCard
          name="John Smith"
          cardType="Amazon Platinium"
          cardNumber="475612349018"
          amount={`${symbol}3,469.52`}
          backgroundImage={Images.cards}
          onPress={() => navigation.navigate('CreditCardDetails')}
        />
        <Bill />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: 24,
  },
});

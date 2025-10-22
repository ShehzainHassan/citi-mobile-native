import { Images } from '@/assets/images';
import { Bill, CreditCard, Header } from '@/components';
import {
  useAppSelector,
  useGlobalStyles,
  usePrimaryCard,
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
  const { data } = usePrimaryCard();
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
        {data && (
          <CreditCard
            name={data.cardholderName}
            cardType={data.cardLabel ?? ''}
            cardNumber={data.cardNumber}
            amount={`${symbol}${data.balance}`}
            backgroundImage={Images.cards}
            onPress={() => navigation.navigate('CreditCardDetails')}
          />
        )}
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

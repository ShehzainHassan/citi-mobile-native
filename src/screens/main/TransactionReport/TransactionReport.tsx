import { Images } from '@/assets/images';
import {
  CreditCard,
  Header,
  InfoRowCard,
  MonthlyBalanceChart,
} from '@/components';
import {
  useAppSelector,
  useGlobalStyles,
  useTransactionReportStyles,
} from '@/hooks';
import { transactions } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { currencySymbolsMap } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';

export const TransactionReport = () => {
  const globalStyles = useGlobalStyles();
  const transactionReportStyles = useTransactionReportStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  return (
    <View style={transactionReportStyles.container}>
      <Header
        title="Transaction report"
        variant="secondary"
        onPress={() => navigation.navigate('Home')}
        style={transactionReportStyles.headerContainer}
      />

      <View
        style={[
          globalStyles.roundedContainer,
          transactionReportStyles.subContainer,
        ]}
      >
        <View style={transactionReportStyles.transactionContainer}>
          <View style={transactionReportStyles.cardChartContainer}>
            <CreditCard
              name="John Smith"
              cardType="Amazon Platinium"
              cardNumber="475612349018"
              amount={`${symbol}3,469.52`}
              backgroundImage={Images.cards}
            />
            <ScrollView
              style={transactionReportStyles.scrollable}
              showsVerticalScrollIndicator={false}
            >
              <MonthlyBalanceChart />
              {transactions.map(t => {
                const isNegative =
                  typeof t.price === 'string' && t.price.trim().startsWith('-');

                const sign = t.price.startsWith('-')
                  ? '-'
                  : t.price.startsWith('+')
                  ? '+'
                  : '';
                const amount = t.price.replace(/[^0-9.]/g, '');

                const formattedPrice = `${sign} ${symbol}${amount}`;

                return (
                  <InfoRowCard
                    key={t.title}
                    label={t.day}
                    title={t.title}
                    subtitle={t.subtitle}
                    icon={t.icon}
                    amount={formattedPrice}
                    amountStyle={
                      isNegative ? globalStyles.negativePrice : undefined
                    }
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

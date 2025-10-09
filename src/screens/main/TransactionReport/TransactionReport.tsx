import { Images } from '@/assets/images';
import {
  CreditCard,
  Header,
  InfoRowCard,
  MonthlyBalanceChart,
} from '@/components';
import { useGlobalStyles, useTransactionReportStyles } from '@/hooks';
import { transactions } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';

export const TransactionReport = () => {
  const globalStyles = useGlobalStyles();
  const transactionReportStyles = useTransactionReportStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

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
              amount="$3.469.52"
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

                return (
                  <InfoRowCard
                    key={t.title}
                    label={t.day}
                    title={t.title}
                    subtitle={t.subtitle}
                    icon={t.icon}
                    amount={t.price}
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

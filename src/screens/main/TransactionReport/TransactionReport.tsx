import { Images } from "@/assets/images";
import {
  CreditCard,
  Header,
  MonthlyBalanceChart,
  TransactionRowCard,
} from "@/components";
import { useGlobalStyles, useTransactionReportStyles } from "@/hooks";
import { transactions } from "@/mocks";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, View } from "react-native";

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
        onPress={() => navigation.navigate("Home")}
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
              {transactions.map((t) => (
                <TransactionRowCard
                  key={t.title}
                  day={t.day}
                  title={t.title}
                  subtitle={t.subtitle}
                  icon={t.icon}
                  price={t.price}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

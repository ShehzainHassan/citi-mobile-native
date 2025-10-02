import { Images } from "@/assets/images";
import { Header, MonthlyBalanceChart, TransactionRowCard } from "@/components";
import { transactions } from "@/constants";
import { useStyles } from "@/hooks/useStyles";
import { useTranslation } from "react-i18next";
import { Image, ScrollView, View } from "react-native";

export const TransactionReport = () => {
  const { t } = useTranslation();
  const { transactionReportStyles, homeScreenStyles, globalStyles } =
    useStyles();
  return (
    <View style={[transactionReportStyles.container]}>
      <Header
        title="Transaction report"
        variant="secondary"
        style={[transactionReportStyles.headerContainer]}
      />

      <View
        style={[
          globalStyles.roundedContainer,
          transactionReportStyles.subContainer,
        ]}>
        <View style={[transactionReportStyles.transactionContainer]}>
          <View style={[transactionReportStyles.cardChartContainer]}>
            <Image
              source={Images.cards}
              style={[homeScreenStyles.cardsImg]}
              accessibilityLabel={t("cardsAlt")}
            />
            <ScrollView
              style={transactionReportStyles.scrollable}
              showsVerticalScrollIndicator={false}>
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

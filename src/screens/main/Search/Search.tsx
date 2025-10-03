import { Images } from "@/assets/images";
import { DataTable, Header, SearchScreenCard, Tabs } from "@/components";
import { Exchange } from "@/components/common/Exchange/Exchange";
import { EXCHANGE_RATE_TABLE, INTEREST_RATE_TABLE } from "@/constants";
import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import { getFlagUrl } from "@/utils";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const Search = () => {
  const { theme } = useTheme();
  const { globalStyles } = useStyles();

  const [activeView, setActiveView] = useState<
    "default" | "interest" | "exchange" | "exchange-rate"
  >("default");

  const renderInterestRateTable = () => (
    <DataTable
      columns={INTEREST_RATE_TABLE.columns}
      rows={INTEREST_RATE_TABLE.rows}
      highlightColumnIndex={2}
      highlightStyle={{ color: theme.colors.primary1 }}
    />
  );

  const renderExchangeRateTable = () => (
    <DataTable
      columns={EXCHANGE_RATE_TABLE.columns}
      rows={EXCHANGE_RATE_TABLE.rows.map((row) => [
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: getFlagUrl(row.countryCode) }}
            style={[globalStyles.flag]}
            resizeMode="contain"
          />
          <Text style={[globalStyles.body1, globalStyles.neutral1]}>
            {row.countryName}
          </Text>
        </View>,
        row.buy,
        row.sell,
      ])}
    />
  );

  const renderExchangeSection = () => <Exchange />;

  const renderHeader = () => {
    const title =
      activeView === "interest"
        ? "Interest rate"
        : activeView === "exchange"
          ? "Exchange rate"
          : activeView === "exchange-rate"
            ? "Exchange"
            : "Search";

    return (
      <TouchableOpacity onPress={() => setActiveView("default")}>
        <Header title={title} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[globalStyles.verticalSpread]}>
      {renderHeader()}
      <View style={[globalStyles.verticalSpread]}>
        {activeView === "default" ? (
          <>
            <View
              style={[globalStyles.paddedColumn, globalStyles.spacedColumn]}>
              <SearchScreenCard
                title="Branch"
                subtitle="Search for branch"
                imageSource={Images.branch}
              />
              <SearchScreenCard
                title="Interest rate"
                subtitle="Search for interest rate"
                imageSource={Images.interestRate}
                onPress={() => setActiveView("interest")}
              />
              <SearchScreenCard
                title="Exchange rate"
                subtitle="Search for exchange rate"
                imageSource={Images.exchangeRate}
                onPress={() => setActiveView("exchange")}
              />
              <SearchScreenCard
                title="Exchange"
                subtitle="Exchange amount of money"
                imageSource={Images.exchange}
                onPress={() => setActiveView("exchange-rate")}
              />
            </View>
            <Tabs />
          </>
        ) : activeView === "interest" ? (
          renderInterestRateTable()
        ) : activeView === "exchange" ? (
          renderExchangeRateTable()
        ) : (
          renderExchangeSection()
        )}
      </View>
    </View>
  );
};

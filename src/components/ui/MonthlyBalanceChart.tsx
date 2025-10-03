import { barData } from "@/constants";
import { useStyles } from "@/hooks/useStyles";
import { StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export const MonthlyBalanceChart = () => {
  const { globalStyles } = useStyles();

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.caption1, styles.balance]}>Balance</Text>
      <Text style={styles.balanceText}>
        1000 <Text style={[globalStyles.caption1, styles.currency]}>USD</Text>
      </Text>
      <BarChart
        stackData={barData}
        barWidth={6}
        spacing={35}
        yAxisThickness={0}
        hideRules={true}
        showValuesAsTopLabel={false}
        hideYAxisText={true}
        xAxisThickness={0}
        xAxisLabelTextStyle={{
          fontSize: 12,
          fontWeight: "600",
          lineHeight: 16,
          marginLeft: -10,
          color: "#CACACA",
        }}
        initialSpacing={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    margin: 16,
    shadowColor: "#3629B7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 30,
    elevation: 5,
  },
  balance: {
    marginBottom: 8,
    color: "#343434",
  },
  balanceText: {
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 28,
    color: "#3629B7",
  },
  currency: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    color: "#979797",
  },
});

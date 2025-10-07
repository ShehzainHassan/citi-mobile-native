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
  balance: {
    color: "#343434",
    marginBottom: 8,
  },
  balanceText: {
    color: "#3629B7",
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 28,
  },
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    elevation: 5,
    margin: 16,
    padding: 20,
    shadowColor: "#3629B7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 30,
  },
  currency: {
    color: "#979797",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
});

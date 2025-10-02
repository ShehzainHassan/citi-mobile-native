import { barData } from "@/constants";
import { StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export const MonthlyBalanceChart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Balance</Text>
      <Text style={styles.balanceText}>
        1000 <Text style={styles.currency}>USD</Text>
      </Text>
      <BarChart
        stackData={barData}
        barWidth={6}
        spacing={35}
        barBorderRadius={6}
        yAxisThickness={0}
        hideRules={true}
        showValuesAsTopLabel={true}
        hideYAxisText={true}
        xAxisThickness={0}
        xAxisLabelTextStyle={{
          fontSize: 12,
          marginLeft: -10,
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
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  balanceText: {
    fontSize: 24,
    color: "#3629B7",
    marginBottom: 20,
  },
  currency: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    color: "#979797",
  },
});

import { useStyles } from "@/hooks/useStyles";
import { Text, View } from "react-native";

export const AccountCard = () => {
  const { globalStyles, accountCardStyles } = useStyles();
  return (
    <View style={[accountCardStyles.container]}>
      <View style={[accountCardStyles.subContainer]}>
        <Text style={[globalStyles.title3, accountCardStyles.titleText]}>
          Account 1
        </Text>
        <Text style={[globalStyles.title3, accountCardStyles.titleText]}>
          1900 8988 1234
        </Text>
      </View>
      <View style={[accountCardStyles.accountSummaryContainer]}>
        <View style={[accountCardStyles.subContainer]}>
          <Text style={[globalStyles.caption2]}>Available balance</Text>
          <Text style={[globalStyles.caption1]}>$20,000</Text>
        </View>
        <View style={[accountCardStyles.subContainer]}>
          <Text style={[globalStyles.caption2]}>Branch</Text>
          <Text style={[globalStyles.caption1]}>New York</Text>
        </View>
      </View>
    </View>
  );
};

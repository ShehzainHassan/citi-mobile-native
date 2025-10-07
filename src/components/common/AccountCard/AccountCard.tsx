import { useGlobalStyles } from "@/hooks";
import { useTheme } from "@/theme";
import { Text, View } from "react-native";
import { createAccountCardStyles } from "./AccountCard.styles";
import { AccountCardProps } from "./AccountCard.types";

export const AccountCard = ({
  accountName = "Account 1",
  accountNumber = "1900 8988 1234",
  availableBalance = "$20,000",
  branch = "New York",
}: AccountCardProps) => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const styles = createAccountCardStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={[globalStyles.title3, globalStyles.neutral1]}>
          {accountName}
        </Text>
        <Text style={[globalStyles.title3, globalStyles.neutral1]}>
          {accountNumber}
        </Text>
      </View>
      <View style={styles.accountSummaryContainer}>
        <View style={styles.subContainer}>
          <Text style={globalStyles.caption2}>Available balance</Text>
          <Text style={globalStyles.caption1}>{availableBalance}</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={globalStyles.caption2}>Branch</Text>
          <Text style={globalStyles.caption1}>{branch}</Text>
        </View>
      </View>
    </View>
  );
};

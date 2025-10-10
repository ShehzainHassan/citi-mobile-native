import { useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import { Text, View } from 'react-native';
import { createAccountCardStyles } from './AccountCard.styles';
import { AccountCardProps } from './AccountCard.types';

export const AccountCard = ({
  accountName = 'Account 1',
  accountNumber = '1900 8988 1234',
  subText1 = 'Available balance',
  subText1Value = '$20,000',
  subText2 = 'Branch',
  subText2Value = 'New York',
  subText3,
  subText3Value,
  subText4,
  subText4Value,
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
        {subText1 && (
          <View style={styles.subContainer}>
            <Text style={globalStyles.caption2}>{subText1}</Text>
            <Text style={globalStyles.caption1}>{subText1Value}</Text>
          </View>
        )}
        {subText2 && (
          <View style={styles.subContainer}>
            <Text style={globalStyles.caption2}>{subText2}</Text>
            <Text style={globalStyles.caption1}>{subText2Value}</Text>
          </View>
        )}
        {subText3 && (
          <View style={styles.subContainer}>
            <Text style={globalStyles.caption2}>{subText3}</Text>
            <Text style={globalStyles.caption1}>{subText3Value}</Text>
          </View>
        )}

        {subText4 && (
          <View style={styles.subContainer}>
            <Text style={globalStyles.caption2}>{subText4}</Text>
            <Text style={globalStyles.caption1}>{subText4Value}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

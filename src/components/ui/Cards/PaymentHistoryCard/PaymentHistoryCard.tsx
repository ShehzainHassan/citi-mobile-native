import { useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import { Text, View } from 'react-native';
import { createPaymentHistoryCardStyles } from './PaymentHistoryCard.styles';
import { PaymentCardProps } from './PaymentHistoryCard.types';

export const PaymentHistoryCard = ({
  title = 'title',
  date = 'date',
  status,
  company,
  amount = '$0',
}: PaymentCardProps) => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const styles = createPaymentHistoryCardStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={[globalStyles.title3, globalStyles.neutral1]}>
          {title}
        </Text>
        <Text style={[globalStyles.caption1, globalStyles.textDefault]}>
          {date}
        </Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.subContainer}>
          <View style={styles.statusContainer}>
            <Text style={[globalStyles.caption2, globalStyles.textDefault]}>
              Status
            </Text>
            <Text
              style={[
                globalStyles.caption1,
                status === 'Unsuccessfully'
                  ? globalStyles.semantic1
                  : undefined,
              ]}
            >
              {status}
            </Text>
          </View>
          {company && (
            <View style={styles.statusContainer}>
              <Text style={[globalStyles.caption2, globalStyles.textDefault]}>
                Company
              </Text>
              <Text style={[globalStyles.caption1, globalStyles.primary1]}>
                {company}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.amountContainer}>
          <Text style={[globalStyles.caption2, globalStyles.textDefault]}>
            Amount
          </Text>
          <Text style={[globalStyles.caption2, globalStyles.primary1]}>
            {amount}
          </Text>
        </View>
      </View>
    </View>
  );
};

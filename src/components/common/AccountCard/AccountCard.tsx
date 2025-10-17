import { useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import { Text, View } from 'react-native';
import { createAccountCardStyles } from './AccountCard.styles';
import { AccountCardProps } from './AccountCard.types';

export const AccountCard = ({
  accountName,
  accountNumber,
  subText1,
  subText1Value,
  subText2,
  subText2Value,
  subText3,
  subText3Value,
  subText4,
  subText4Value,
}: AccountCardProps) => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const styles = createAccountCardStyles(theme);

  const subTextPairs = [
    { label: subText1, value: subText1Value },
    { label: subText2, value: subText2Value },
    { label: subText3, value: subText3Value },
    { label: subText4, value: subText4Value },
  ].filter(({ label }) => !!label);

  if (!accountName && !accountNumber && subTextPairs.length === 0) return null;

  return (
    <View style={globalStyles.cardContainer}>
      <View style={globalStyles.rowWrap}>
        {!!accountName && (
          <Text style={[globalStyles.title3, globalStyles.neutral1]}>
            {accountName}
          </Text>
        )}
        {!!accountNumber && (
          <Text style={[globalStyles.title3, globalStyles.neutral1]}>
            {accountNumber}
          </Text>
        )}
      </View>

      {subTextPairs.length > 0 && (
        <View style={styles.accountSummaryContainer}>
          {subTextPairs.map(({ label, value }, index) => (
            <View key={`subtext-${index}`} style={globalStyles.rowWrap}>
              <Text style={globalStyles.caption2}>{label}</Text>
              <Text style={globalStyles.caption1}>{value}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

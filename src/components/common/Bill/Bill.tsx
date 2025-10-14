import { InfoRowCard } from '@/components/ui';
import { useAppSelector, useGlobalStyles } from '@/hooks';
import { bills } from '@/mocks';
import { useTheme } from '@/theme';
import { Text, View } from 'react-native';
import { createBillStyles } from './Bills.styles';
import { RootState } from '@/store';
import { currencySymbolsMap } from '@/utils';

export const Bill = () => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createBillStyles(theme);

  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  console.log('Selected Currency = ', selectedCurrency);
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  const total = bills.reduce((sum, t) => {
    const value = parseFloat(t.amount.replace(/[^0-9.-]+/g, ''));
    return sum + value;
  }, 0);

  return (
    <View style={styles.billContainer}>
      {bills.map(item => (
        <InfoRowCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          amount={
            parseFloat(item.amount.replace(/[^0-9.-]+/g, '')) < 0
              ? `-${symbol}${Math.abs(
                  parseFloat(item.amount.replace(/[^0-9.-]+/g, '')),
                )}`
              : `${symbol}${parseFloat(item.amount.replace(/[^0-9.-]+/g, ''))}`
          }
          subtitle={item.subtitle}
          amountStyle={globalStyles.negativePrice}
          style={styles.cardContainer}
          iconBackgroundColor={theme.colors.semantic4}
          centeredItems={true}
        />
      ))}

      <View style={styles.textContainer}>
        <Text style={styles.totalText}>TOTAL</Text>
        <Text style={[styles.totalAmount, globalStyles.semantic1]}>
          {total < 0 ? `-${symbol}${Math.abs(total)}` : `${symbol}${total}`}
        </Text>
      </View>
    </View>
  );
};

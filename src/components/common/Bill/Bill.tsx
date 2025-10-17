import { InfoRowCard } from '@/components/ui';
import { useAppSelector, useGlobalStyles } from '@/hooks';
import { bills } from '@/mocks';
import { useTheme } from '@/theme';
import { Text, View } from 'react-native';
import { createBillStyles } from './Bills.styles';
import { RootState } from '@/store';
import { currencySymbolsMap, parseCurrencyAmount } from '@/utils';

export const Bill = () => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createBillStyles(theme);

  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  const total = bills.reduce(
    (sum, t) => sum + parseCurrencyAmount(t.amount),
    0,
  );

  return (
    <View style={styles.billContainer}>
      {bills.map(item => {
        const value = parseCurrencyAmount(item.amount);
        const formattedAmount =
          value < 0 ? `-${symbol}${Math.abs(value)}` : `${symbol}${value}`;

        return (
          <InfoRowCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            amount={formattedAmount}
            subtitle={item.subtitle}
            amountStyle={globalStyles.negativePrice}
            style={styles.cardContainer}
            iconBackgroundColor={theme.colors.semantic4}
            centeredItems={true}
          />
        );
      })}

      <View style={styles.textContainer}>
        <Text style={styles.totalText}>TOTAL</Text>
        <Text style={[styles.totalAmount, globalStyles.semantic1]}>
          {total < 0 ? `-${symbol}${Math.abs(total)}` : `${symbol}${total}`}
        </Text>
      </View>
    </View>
  );
};

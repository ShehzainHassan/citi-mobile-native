import { Images } from '@/assets/images';
import { ErrorMessage, Header, OptimizedImage } from '@/components';
import { Button, CurrencyModal, Input } from '@/components/ui';
import { useConversionRate, useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { Theme, useTheme } from '@/theme';
import { APIError } from '@/types';
import { handleAPIError } from '@/utils';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Exchange = () => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createStyles(theme);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeField, setActiveField] = useState<'from' | 'to'>('from');
  const [exchangeError, setExchangeError] = useState<APIError | null>(null);

  const {
    data: exchangeRate,
    isFetching: loadingExchange,
    refetch: fetchRate,
  } = useConversionRate(fromCurrency, toCurrency);

  const handleSelectCurrency = (label: string) => {
    const code = label.split(' ')[0];
    if (activeField === 'from') setFromCurrency(code ?? '');
    else setToCurrency(code ?? '');
    setToAmount('');
    setModalVisible(false);
  };

  const handleExchange = async () => {
    if (!fromCurrency || !toCurrency || !fromAmount.trim()) return;

    try {
      const { data: rate } = await fetchRate();
      if (rate) {
        const converted = (parseFloat(fromAmount) * rate).toFixed(2);
        setToAmount(converted);
        setExchangeError(null);
      } else {
        setToAmount('');
      }
    } catch (err: unknown) {
      const parsedError = handleAPIError(err);
      setExchangeError(parsedError);
      setToAmount('');
    }
  };

  const isExchangeEnabled =
    fromAmount.trim() !== '' && fromCurrency && toCurrency && !loadingExchange;

  return (
    <View style={globalStyles.verticalSpread}>
      <Header title="Exchange" onPress={() => navigation.navigate('Search')} />
      <OptimizedImage
        source={Images.exchangeRateLogo}
        style={[globalStyles.paddedColumn, globalStyles.imgLogo]}
      />

      <View style={[globalStyles.cardContainer, styles.margin]}>
        <Input
          label="From"
          placeholder="Amount"
          keyboardType="number-pad"
          value={fromAmount}
          onChangeText={setFromAmount}
          rightText={fromCurrency}
          rightPlaceholder="USD"
          onRightPress={() => {
            setActiveField('from');
            setModalVisible(true);
          }}
          rightIcon={
            <MaterialIcons
              name="unfold-more"
              size={20}
              color={theme.colors.neutral2}
            />
          }
        />

        <View style={styles.arrowContainer}>
          <MaterialIcons name="arrow-downward" size={24} color="red" />
          <MaterialIcons name="arrow-upward" size={24} color="green" />
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.inputContainer}>
            <Input
              label="To"
              placeholder="Amount"
              keyboardType="number-pad"
              value={toAmount}
              required={false}
              onChangeText={setToAmount}
              rightText={toCurrency}
              rightPlaceholder="USD"
              onRightPress={() => {
                setActiveField('to');
                setModalVisible(true);
              }}
              readOnly
              rightIcon={
                <MaterialIcons
                  name="unfold-more"
                  size={20}
                  color={theme.colors.neutral2}
                />
              }
            />

            {exchangeRate && (
              <View style={styles.currencyContainer}>
                <Text style={[globalStyles.body3, globalStyles.primary1]}>
                  Currency rate
                </Text>
                <Text style={[globalStyles.body3, globalStyles.neutral1]}>
                  1 {fromCurrency} = {exchangeRate.toFixed(2)} {toCurrency}
                </Text>
              </View>
            )}
          </View>

          <Button
            title={loadingExchange ? 'Converting...' : 'Exchange'}
            disabled={!isExchangeEnabled}
            onPress={handleExchange}
            loading={loadingExchange}
          />
          {exchangeError && (
            <ErrorMessage error={exchangeError} onRetry={handleExchange} />
          )}
        </View>
      </View>

      <CurrencyModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        selectedCurrency={activeField === 'from' ? fromCurrency : toCurrency}
        onSelect={handleSelectCurrency}
      />
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    arrowContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    inputContainer: {
      gap: theme.spacing.sm,
    },
    bottomContainer: {
      gap: theme.spacing.xl,
    },
    currencyContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    margin: {
      margin: theme.spacing.lg,
    },
  });

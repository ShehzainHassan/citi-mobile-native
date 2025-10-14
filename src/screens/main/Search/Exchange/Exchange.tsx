import { Images } from '@/assets/images';
import { Header, ImageWithFallback } from '@/components';
import { Button, Input } from '@/components/ui';
import { BaseModal } from '@/components/ui/Modal';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { getConversionRate, getCurrencySymbols } from '@/services';
import { Theme, useTheme } from '@/theme';
import { formatCurrencyLabel } from '@/utils';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Exchange = () => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createStyles(theme);

  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeField, setActiveField] = useState<'from' | 'to'>('from');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [currencyMap, setCurrencyMap] = useState<Record<string, string>>({});
  const [cache, setCache] = useState<Record<string, number>>({});
  const [loadingSymbols, setLoadingSymbols] = useState(false);
  const [loadingExchange, setLoadingExchange] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  useEffect(() => {
    const loadSymbols = async () => {
      try {
        setLoadingSymbols(true);
        const symbols = (await getCurrencySymbols()) as Record<string, string>;
        setCurrencyMap(symbols || {});
        const formatted = Object.entries(symbols || {}).map(([code, name]) =>
          formatCurrencyLabel(code, name),
        );
        setCurrencyOptions(formatted);
      } catch (err) {
        console.error('Failed to load currency symbols:', err);
      } finally {
        setLoadingSymbols(false);
      }
    };
    loadSymbols();
  }, []);

  const handleSelectCurrency = (label: string) => {
    const code = label.split(' ')[0];
    if (activeField === 'from') setFromCurrency(code ?? '');
    else setToCurrency(code ?? '');
    setExchangeRate(null);
    setToAmount('');
    setModalVisible(false);
  };

  const handleExchange = async () => {
    if (!fromCurrency || !toCurrency || !fromAmount.trim()) return;
    const cacheKey = `${fromCurrency}_${toCurrency}`;
    try {
      setLoadingExchange(true);
      let rate = cache[cacheKey];
      if (!rate) {
        rate = await getConversionRate(fromCurrency, toCurrency);
        setCache(prev => ({ ...prev, [cacheKey]: rate }));
      }
      if (rate) {
        setExchangeRate(rate);
        const converted = (parseFloat(fromAmount) * rate).toFixed(2);
        setToAmount(converted);
      } else {
        setExchangeRate(null);
        setToAmount('');
      }
    } catch (error) {
      console.error('Failed to fetch exchange rate:', error);
      setExchangeRate(null);
      setToAmount('');
    } finally {
      setLoadingExchange(false);
    }
  };

  const isExchangeEnabled =
    fromAmount.trim() !== '' && fromCurrency && toCurrency && !loadingExchange;

  const getSelectedLabel = (code: string) =>
    currencyMap[code] ? formatCurrencyLabel(code, currencyMap[code]) : null;

  return (
    <View style={globalStyles.verticalSpread}>
      <Header title="Exchange" onPress={() => navigation.navigate('Search')} />
      <ImageWithFallback
        source={Images.exchangeRateLogo}
        style={[globalStyles.paddedColumn, globalStyles.imgLogo]}
      />

      <View style={[globalStyles.cardContainer, styles.margin]}>
        <Input
          label="From"
          placeholder="Amount"
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
          {isExchangeEnabled && exchangeRate ? (
            <View>
              <Input
                label="To"
                placeholder="Amount"
                value={toAmount}
                onChangeText={setToAmount}
                rightText={toCurrency}
                rightPlaceholder="USD"
                onRightPress={() => {
                  setActiveField('to');
                  setModalVisible(true);
                }}
                required={false}
                rightIcon={
                  <MaterialIcons
                    name="unfold-more"
                    size={20}
                    color={theme.colors.neutral2}
                  />
                }
              />
              <View style={styles.currencyContainer}>
                <Text style={[globalStyles.body3, globalStyles.primary1]}>
                  Currency rate
                </Text>
                <Text style={[globalStyles.body3, globalStyles.neutral1]}>
                  1 {fromCurrency} = {exchangeRate.toFixed(2)} {toCurrency}
                </Text>
              </View>
            </View>
          ) : (
            <Input
              label="To"
              placeholder="Amount"
              value={toAmount}
              onChangeText={setToAmount}
              rightText={toCurrency}
              required={false}
              rightPlaceholder="USD"
              onRightPress={() => {
                setActiveField('to');
                setModalVisible(true);
              }}
              readOnly={true}
              rightIcon={
                <MaterialIcons
                  name="unfold-more"
                  size={20}
                  color={theme.colors.neutral2}
                />
              }
            />
          )}

          <Button
            title={loadingExchange ? 'Converting...' : 'Exchange'}
            disabled={!isExchangeEnabled}
            onPress={handleExchange}
            loading={loadingExchange}
          />
        </View>
      </View>

      <BaseModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        header="Select Currency"
        contents={loadingSymbols ? ['Loading currencies...'] : currencyOptions}
        selectedItem={
          activeField === 'from'
            ? getSelectedLabel(fromCurrency)
            : getSelectedLabel(toCurrency)
        }
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
      marginBottom: theme.spacing.sm,
      marginTop: theme.spacing.lg,
    },
    bottomContainer: {
      gap: theme.spacing.xl * 2,
    },

    currencyContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.ms,
    },
    margin: {
      margin: theme.spacing.lg,
    },
  });

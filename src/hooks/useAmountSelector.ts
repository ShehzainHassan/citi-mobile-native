import { useState } from 'react';
import { useAppSelector } from './redux';
import { RootState } from '@/store';
import { currencySymbolsMap, extractNumbers } from '@/utils';

export const useAmountSelector = () => {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  const [customAmount, setCustomAmount] = useState<string>('');

  const handleAmountPress = (amt: string) => {
    setSelectedAmount(amt);
    if (amt !== 'Other') setCustomAmount('');
  };

  const handleCustomAmountChange = (text: string) => {
    if (text.trim() === '' || text === symbol || text === `${symbol} `) {
      setCustomAmount('');
      return;
    }

    if (!text.startsWith(symbol)) {
      const numericPart = extractNumbers(text);
      setCustomAmount(`${symbol} ${numericPart}`);
      return;
    }

    const numericPart = extractNumbers(text.slice(symbol.length));
    setCustomAmount(`${symbol} ${numericPart}`);
  };

  return {
    selectedAmount,
    customAmount,
    handleAmountPress,
    handleCustomAmountChange,
    reset: () => {
      setSelectedAmount(null);
      setCustomAmount('');
    },
  };
};

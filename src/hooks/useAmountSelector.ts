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

  const [customAmount, setCustomAmount] = useState<string>(`${symbol} `);

  const handleAmountPress = (amt: string) => {
    setSelectedAmount(amt);
    if (amt !== 'Other') setCustomAmount(`${symbol} `);
  };

  const handleCustomAmountChange = (text: string) => {
    const numericPart = extractNumbers(text);
    setCustomAmount(`${symbol} ${numericPart}`);
  };

  return {
    selectedAmount,
    customAmount,
    handleAmountPress,
    handleCustomAmountChange,
    reset: () => {
      setSelectedAmount(null);
      setCustomAmount(`${symbol} `);
    },
  };
};

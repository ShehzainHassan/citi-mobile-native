import { fixerAPI } from '@/api';
import { formatCurrencyLabel } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export const useCurrencySymbols = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['currency-symbols'],
    queryFn: fixerAPI.getCurrencySymbols,
    staleTime: 24 * 60 * 60 * 1000,
  });
  const currencyMap = data || {};
  const currencyOptions = Object.entries(currencyMap).map(([code, name]) =>
    formatCurrencyLabel(code, name),
  );

  const getSelectedLabel = (code: string) =>
    currencyMap[code] ? formatCurrencyLabel(code, currencyMap[code]) : null;
  return {
    currencyOptions,
    currencyMap,
    loadingSymbols: isLoading,
    refreshSymbols: refetch,
    getSelectedLabel,
  };
};

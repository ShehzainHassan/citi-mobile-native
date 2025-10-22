import { fixerAPI } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '.';

export const useConversionRate = (from: string, to: string) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.FIXER.CONVERSION_RATE, from, to],
    queryFn: () => fixerAPI.getConversionRate(from, to),
    enabled: false,
  });
};

import { fixerAPI } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useConversionRate = (from: string, to: string) => {
  return useQuery({
    queryKey: ['conversion-rate', from, to],
    queryFn: () => fixerAPI.getConversionRate(from, to),
    enabled: false,
  });
};

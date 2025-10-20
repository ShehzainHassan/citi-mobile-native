import { FIXER_API_KEY } from '@env';
import { fixerClient } from './clients';
import { ConversionRateAPIResponse, CurrencyAPIResponse } from '@/types';
import { handleAPIError } from '@/utils';

export const fixerAPI = {
  getCurrencySymbols: async () => {
    try {
      const { data } = await fixerClient.get<CurrencyAPIResponse>(
        `/symbols?access_key=${FIXER_API_KEY}`,
      );
      return data.symbols;
    } catch (error) {
      throw handleAPIError(error);
    }
  },

  getConversionRate: async (from: string, to: string) => {
    try {
      const { data } = await fixerClient.get<ConversionRateAPIResponse>(
        `/latest?access_key=${FIXER_API_KEY}&symbols=${from},${to}`,
      );

      const { rates } = data;
      if (!rates?.[from] || !rates?.[to]) return null;
      return rates[to] / rates[from];
    } catch (error) {
      throw handleAPIError(error);
    }
  },
};

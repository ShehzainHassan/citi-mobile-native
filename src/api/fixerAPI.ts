import { ConversionRateAPIResponse, CurrencyAPIResponse } from '@/interfaces';
import { FIXER_API_KEY } from '@env';
import { fixerClient } from './clients';

export const fixerAPI = {
  getCurrencySymbols: async () => {
    const { data } = await fixerClient.get<CurrencyAPIResponse>(
      `/symbols?access_key=${FIXER_API_KEY}`,
    );
    return data.symbols;
  },

  getConversionRate: async (from: string, to: string) => {
    const { data } = await fixerClient.get<ConversionRateAPIResponse>(
      `/latest?access_key=${FIXER_API_KEY}&symbols=${from},${to}`,
    );

    const { rates } = data;
    if (!rates?.[from] || !rates?.[to]) return null;
    return rates[to] / rates[from];
  },
};

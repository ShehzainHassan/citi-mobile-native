import { ConversionRateAPIResponse, CurrencyAPIResponse } from '@/interfaces';
import { FIXER_URL, FIXER_API_KEY } from '@env';
import axios from 'axios';

export const fixerAPI = {
  getCurrencySymbols: async () => {
    const { data } = await axios.get<CurrencyAPIResponse>(
      `${FIXER_URL}/symbols?access_key=${FIXER_API_KEY}`,
    );
    return data.symbols;
  },
  getConversionRate: async (from: string, to: string) => {
    const { data } = await axios.get<ConversionRateAPIResponse>(
      `${FIXER_URL}/latest?access_key=${FIXER_API_KEY}&symbols=${from},${to}`,
    );

    const rates = data.rates;
    if (!rates || !rates[from] || !rates[to]) return null;

    const eurToFrom = rates[from];
    const eurToTo = rates[to];

    const conversionRate = eurToTo / eurToFrom;
    console.log('Conversion Rate = ', conversionRate);
    return conversionRate;
  },
};

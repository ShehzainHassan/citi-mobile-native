import { FIXER_API_KEY } from '@env';

const BASE_URL = 'https://data.fixer.io/api';

export const getCurrencySymbols = async () => {
  try {
    const res = await fetch(`${BASE_URL}/symbols?access_key=${FIXER_API_KEY}`);
    const data = await res.json();
    if (!data.success) throw new Error('Failed to fetch currency symbols');
    return data.symbols;
  } catch (err) {
    console.error('Error fetching symbols:', err);
    throw err;
  }
};

export const getConversionRate = async (from: string, to: string) => {
  try {
    const res = await fetch(`${BASE_URL}/latest?access_key=${FIXER_API_KEY}`);
    const data = await res.json();
    if (!data.success)
      throw new Error(data.error?.info || 'Failed to fetch conversion rate');

    const rates = data.rates;
    if (!rates[from] || !rates[to]) throw new Error('Invalid currency codes');

    return rates[to] / rates[from];
  } catch (err) {
    console.error('Error fetching conversion rate:', err);
    throw err;
  }
};

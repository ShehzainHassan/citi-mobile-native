// Utility functions and helpers
// Date formatting, currency formatting, validation
// Encryption, secure storage, device info

// Common utility functions
// Security helpers and data formatting
// Reusable business logic
import currencyCodes from 'currency-codes';

export const formatPhoneNumber = (input: string) => {
  const digits = input.replace(/\D/g, '');

  if (digits.length <= 2) {
    return `(+${digits})`;
  }

  const countryCode = digits.slice(0, 2);
  const rest = digits.slice(2);

  return `(+${countryCode}) ${rest}`;
};

export const getFlagUrl = (countryCode: string, size: number = 40) => {
  return `https://flagcdn.com/w${size}/${countryCode.toLowerCase()}.png`;
};

export const currencies = currencyCodes
  .codes()
  .map(code => currencyCodes.code(code))
  .filter(
    (
      currency,
    ): currency is NonNullable<ReturnType<typeof currencyCodes.code>> =>
      !!currency && !currency.code.startsWith('X'),
  )
  .map(currency => ({
    code: currency.code,
    name: currency.currency,
  }));

export const formatCurrencyLabel = (code: string, name: string) => {
  return `${code} (${name})`;
};
export const formatCards = (cards: string[]) => {
  return cards.map(card => card.replace(/(\d{4})(?=\d)/g, '$1 ').trim());
};

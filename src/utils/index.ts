// Utility functions and helpers
// Date formatting, currency formatting, validation
// Encryption, secure storage, device info

// Common utility functions
// Security helpers and data formatting
// Reusable business logic

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

export const formatCurrencyLabel = (code: string, name: string) => {
  return `${code} (${name})`;
};

export const formatCards = (cards: string[]) => {
  return cards.map(card => card.replace(/(\d{4})(?=\d)/g, '$1 ').trim());
};

export const prependDollar = (text: string) => {
  if (!text.startsWith('$ ')) {
    return '$ ' + text.replace(/^\$?\s*/, '');
  }
  return text;
};

export const sanitizeAmount = (amount: string): number => {
  return parseFloat(amount.replace(/[^0-9.]/g, '')) || 0;
};

export const maskCardNumber = (card: string): string => {
  const digits = card.replace(/\D/g, '');
  const lastFour = digits.slice(-4);
  return `**** **** **** ${lastFour}`;
};

export const currencySymbolsMap: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  INR: '₹',
  JPY: '¥',
  AUD: 'A$',
  CAD: 'C$',
  CHF: 'CHF',
  CNY: '¥',
  SEK: 'kr',
  NZD: 'NZ$',
};

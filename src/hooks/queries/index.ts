export const QUERY_KEYS = {
  USER: {
    PRIMARY_CARD: ['user', 'primary-card'] as const,
    ALL_CARDS: ['user', 'all-cards'] as const,
    ACCOUNTS: ['user', 'accounts'] as const,
  },
  FIXER: {
    CURRENCY_SYMBOLS: ['fixer', 'currency-symbols'] as const,
    CONVERSION_RATE: ['fixer', 'conversion-rate'] as const,
  },
};

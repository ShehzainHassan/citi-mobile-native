// Utility functions and helpers
// Date formatting, currency formatting, validation
// Encryption, secure storage, device info

// Common utility functions
// Security helpers and data formatting
// Reusable business logic
import { MODAL_OPTIONS_MAP } from '@/config';
import { RefObject } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { APIError, ValidationRule } from '@/types';

export const getFlagUrl = (countryCode: string, size: number = 40) => {
  return `https://flagcdn.com/w${size}/${countryCode.toLowerCase()}.png`;
};

export const formatCurrencyLabel = (code: string, name: string) => {
  return `${code} (${name})`;
};

export const formatCards = (cards: string[]) => {
  return cards.map(card => card.replace(/(\d{4})(?=\d)/g, '$1 ').trim());
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

export const handleModalOpen = (
  placeholder: string,
  setOptions: (opts: string[]) => void,
  setCurrent: (p: string) => void,
  setVisible: (v: boolean) => void,
) => {
  const options = MODAL_OPTIONS_MAP[placeholder] || [];
  setOptions(options);
  setCurrent(placeholder);
  setVisible(true);
};

export const handleScroll = (
  transferKey: string,
  scrollRef: RefObject<ScrollView | null>,
  keys: string[],
) => {
  const index = keys.indexOf(transferKey);
  if (scrollRef.current) {
    if (index === 0) {
      scrollRef.current.scrollTo({ x: 0, animated: true });
    } else if (index === keys.length - 1) {
      scrollRef.current.scrollToEnd({ animated: true });
    }
  }
};

export const extractNumbers = (
  text: string,
  allowPlus: boolean = false,
): string => {
  return allowPlus ? text.replace(/[^\d+]/g, '') : text.replace(/[^0-9]/g, '');
};

export const validationRules: Record<string, ValidationRule> = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Enter a valid email address',
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      'Password must be at least 8 characters, include one uppercase and one number',
  },
  confirmPassword: {
    matchField: 'password',
    message: 'Passwords do not match',
  },
  phone: {
    regex: /^\+?\d{10,14}$/,
    message: 'Enter a valid phone number',
  },
  name: {
    regex: /^[A-Za-z\s]+$/,
    message: 'Name can only contain letters',
  },
  cardNumber: {
    regex: /^\d{12,19}$/,
    message: 'Enter a valid card number',
  },
  amount: {
    regex: /^\d+(\.\d{1,2})?$/,
    message: 'Enter a valid amount',
  },
};

export const sanitizeInput = (value: string, type: string) => {
  switch (type) {
    case 'name':
      return value.replace(/[^a-zA-Z\s]/g, '');
    case 'email':
      return value.trim();
    case 'phone':
      return value.replace(/[^\d+]/g, '');
    case 'cardNumber':
      return value.replace(/\D/g, '');
    case 'amount':
      return value.replace(/[^0-9.]/g, '');
    default:
      return value.trim();
  }
};

export const parseCurrencyAmount = (amount: string): number => {
  if (!amount) return 0;
  return parseFloat(amount.replace(/[^0-9.-]+/g, '')) || 0;
};

export const handleAPIError = (error: unknown): APIError => {
  let code = 'UNKNOWN_ERROR';
  let message = 'Something went wrong';
  let status: number | undefined;
  let details = null;

  if (axios.isAxiosError(error)) {
    const err = error;
    status = err.response?.status;
    details = err.response?.data;

    if (err.code === 'ECONNABORTED') code = 'NETWORK_ERROR';
    else if (err.code === 'ECONNREFUSED') code = 'TIMEOUT';
    else if (status === 401) code = 'UNAUTHORIZED';
    else if (status === 403) code = 'FORBIDDEN';
    else if (status === 404) code = 'NOT_FOUND';
    else if (status && status >= 500) code = 'SERVER_ERROR';

    message = err.message || message;
  }

  if (__DEV__) {
    console.error('API Error:', { code, message, status, details });
  } else {
    // TODO:
    // Send error to Sentry or Bugsnag
  }

  return { code, message, status, details };
};

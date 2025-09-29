// Application constants and configuration values
// API endpoints, storage keys, screen names
// Validation rules, feature flags, error codes

export const API_CONFIG = {
  BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL || 'https://api.citibank.com/v1',
  TIMEOUT: 30000,
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: '@citi_auth_token',
  USER_DATA: '@citi_user_data',
} as const;

// Add more constants as needed...
export const API_CONFIG = {
  BASE_URL:
    process.env.EXPO_PUBLIC_API_BASE_URL || "https://api.citibank.com/v1",
  TIMEOUT: 30000,
} as const;

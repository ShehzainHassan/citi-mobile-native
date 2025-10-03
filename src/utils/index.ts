// Utility functions and helpers
// Date formatting, currency formatting, validation
// Encryption, secure storage, device info

// Common utility functions
// Security helpers and data formatting
// Reusable business logic

export const formatPhoneNumber = (input: string) => {
  const digits = input.replace(/\D/g, "");

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

import { Input } from '@/components';
import { sanitizeInput } from '@/utils';
import { CountryCode, parsePhoneNumberFromString } from 'libphonenumber-js';
import React from 'react';
import { PhoneNumberInputProps } from './PhoneInput.types';

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label,
  value,
  onChangeText,
  defaultCountry = 'VN',
  placeholder = 'Enter phone number',
  keyboardType = 'phone-pad',
  error,
  ...props
}) => {
  const handleChange = (text: string) => {
    const sanitized = sanitizeInput(text, 'phone');

    const phoneNumber = parsePhoneNumberFromString(
      sanitized,
      defaultCountry as CountryCode,
    );

    let formatted = sanitized;
    if (phoneNumber) {
      formatted = phoneNumber.formatInternational();
      const countryCode = `+${phoneNumber.countryCallingCode}`;
      formatted = formatted.replace(countryCode, `(${countryCode})`);
    }

    onChangeText(formatted);
  };

  return (
    <Input
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={handleChange}
      keyboardType={keyboardType}
      error={error}
      {...props}
    />
  );
};

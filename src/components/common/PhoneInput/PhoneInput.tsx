import React, { useState } from 'react';
import { Input } from '@/components';
import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';
import { sanitizeInput, validationRules } from '@/utils';
import { PhoneNumberInputProps } from './PhoneInput.types';

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label,
  value,
  onChangeText,
  defaultCountry = 'VN',
  placeholder = 'Enter phone number',
  keyboardType = 'phone-pad',
  ...props
}) => {
  const [error, setError] = useState<string | undefined>(undefined);

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

    const rule = validationRules.phone;
    if ('regex' in rule) {
      if (!rule.regex.test(sanitized)) {
        setError(rule.message);
      } else {
        setError(undefined);
      }
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

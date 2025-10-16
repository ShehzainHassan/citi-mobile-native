import { CountryCode } from 'libphonenumber-js';

export interface PhoneNumberInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  defaultCountry?: CountryCode;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric' | 'phone-pad' | 'number-pad';
}

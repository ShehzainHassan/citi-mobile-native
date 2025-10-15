import { JSX } from 'react';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (value: boolean) => void;
  label?: string | JSX.Element;
}

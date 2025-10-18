import { Images } from '@/assets/images';
import { BANK_OPTIONS, BRANCH_OPTIONS } from '@/constants';
import { FC } from 'react';
import { ImageSourcePropType } from 'react-native';
import { SvgProps } from 'react-native-svg';

export const TRANSFER_TYPES = ['card', 'sameBank', 'anotherBank'] as const;
export type TransferType = (typeof TRANSFER_TYPES)[number];

export const TRANSFER_OPTIONS: {
  key: TransferType;
  text: string;
  variant: 'secondary' | 'primary';
  image: ImageSourcePropType | FC<SvgProps>;
}[] = [
  {
    key: 'card',
    text: 'Transfer via card number',
    variant: 'secondary',
    image: Images.citiBank,
  },
  {
    key: 'sameBank',
    text: 'Transfer to the same bank',
    variant: 'primary',
    image: Images.citiBank,
  },
  {
    key: 'anotherBank',
    text: 'Transfer to another bank',
    variant: 'secondary',
    image: Images.citiBank,
  },
];

export const TRANSFER_FIELDS: Record<
  TransferType,
  { placeholder: string; editable: boolean }[]
> = {
  card: [
    { placeholder: 'Name', editable: true },
    { placeholder: 'Card number', editable: true },
    { placeholder: 'Amount', editable: true },
    { placeholder: 'Content', editable: true },
  ],
  sameBank: [
    { placeholder: 'Name', editable: true },
    { placeholder: 'Choose branch', editable: false },
    { placeholder: 'Card number', editable: true },
    { placeholder: 'Amount', editable: true },
    { placeholder: 'Content', editable: true },
  ],
  anotherBank: [
    { placeholder: 'Name', editable: true },
    { placeholder: 'Choose bank', editable: false },
    { placeholder: 'Choose branch', editable: false },
    { placeholder: 'Transaction name', editable: true },
    { placeholder: 'Amount', editable: true },
    { placeholder: 'Note', editable: true },
  ],
};

export const KEYBOARD_TYPE_MAP: Record<
  string,
  'default' | 'number-pad' | 'decimal-pad'
> = {
  'Card number': 'number-pad',
  Amount: 'decimal-pad',
};

export const MODAL_OPTIONS_MAP: Record<string, string[]> = {
  'Choose bank': BANK_OPTIONS,
  'Choose branch': BRANCH_OPTIONS,
};

export const isDropdownField = (placeholder: string): boolean =>
  placeholder === 'Choose branch' || placeholder === 'Choose bank';

export const getKeyboardType = (
  placeholder: string,
): 'default' | 'number-pad' | 'decimal-pad' =>
  KEYBOARD_TYPE_MAP[placeholder] || 'default';

export const getTransferInputs = (transfer: TransferType) =>
  TRANSFER_FIELDS[transfer];

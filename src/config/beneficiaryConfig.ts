import { Images } from '@/assets/images';
import { BANK_OPTIONS, BRANCH_OPTIONS } from '@/constants';

export const TRANSFER_TYPES = ['card', 'sameBank', 'anotherBank'] as const;
export type TransferType = (typeof TRANSFER_TYPES)[number];

export const TRANSFER_OPTIONS: {
  key: TransferType;
  text: string;
  image: any;
}[] = [
  { key: 'card', text: 'Transfer via card number', image: Images.citiBank },
  {
    key: 'sameBank',
    text: 'Transfer to the same bank',
    image: Images.citiBank,
  },
  {
    key: 'anotherBank',
    text: 'Transfer to another bank',
    image: Images.citiBank,
  },
];

export const TRANSFER_FIELDS: Record<
  TransferType,
  { placeholder: string; editable: boolean }[]
> = {
  card: [
    { placeholder: 'Enter name', editable: true },
    { placeholder: 'Card number', editable: true },
    { placeholder: 'Amount', editable: true },
    { placeholder: 'Content', editable: true },
  ],
  sameBank: [
    { placeholder: 'Enter name', editable: true },
    { placeholder: 'Choose branch', editable: false },
    { placeholder: 'Card number', editable: true },
    { placeholder: 'Amount', editable: true },
    { placeholder: 'Content', editable: true },
  ],
  anotherBank: [
    { placeholder: 'Enter name', editable: true },
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

import { Card, UserAccount } from '@/types';

export const userCards: Card[] = [
  {
    cardType: 'VISA',
    cardholderName: 'John Smith',
    cardLabel: 'Amazon Platinium',
    cardNumber: 4756123412341234,
    balance: 3469.252,
    currency: '$',
    validFrom: '10/15',
    goodThru: '10/20',
  },
  {
    cardType: 'MASTERCARD',
    cardholderName: 'John Smith',
    cardLabel: 'Amazon Platinium',
    cardNumber: 4756123412341234,
    balance: 5000.0,
    currency: '$',
    validFrom: '10/15',
    goodThru: '10/20',
  },
];

export const userAccounts: UserAccount[] = [
  {
    title: 'Account 1',
    accNo: 190089885456,
    subText1: 'Available balance',
    balance: 20000,
    currency: '$',
    subText2: 'Branch',
    branch: 'New York',
  },
  {
    title: 'Account 2',
    accNo: 190089885457,
    subText1: 'Available balance',
    balance: 12000,
    currency: '$',
    subText2: 'Branch',
    branch: 'New York',
  },
  {
    title: 'Account 3',
    accNo: 190089885458,
    subText1: 'Available balance',
    balance: 230000,
    currency: '$',
    subText2: 'Branch',
    branch: 'New York',
  },
];

export const managementAccounts = [
  {
    title: 'Account',
    accNo: '1900 8988 5456',
    subText1: 'From',
    from: '02/11/2019',
    subText2: 'To',
    to: '02/11/2020',
    subText3: 'Time deposit',
    time: '12 months',
    subText4: 'Interest rate',
    interestRate: '5%',
  },
  {
    title: 'Account',
    accNo: '1900 8988 5456',
    subText1: 'From',
    from: '02/11/2019',
    subText2: 'To',
    to: '02/11/2020',
    subText3: 'Time deposit',
    time: '12 months',
    subText4: 'Interest rate',
    interestRate: '5%',
  },
  {
    title: 'Account',
    accNo: '1900 8988 5456',
    subText1: 'From',
    from: '02/11/2019',
    subText2: 'To',
    to: '02/11/2020',
    subText3: 'Time deposit',
    time: '12 months',
    subText4: 'Interest rate',
    interestRate: '5%',
  },
];

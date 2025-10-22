export interface Card {
  cardType: 'VISA' | 'MASTERCARD' | 'AMEX' | 'DISCOVER' | string;
  cardholderName: string;
  cardLabel?: string;
  cardNumber: number;
  balance: number;
  currency?: string;
  validFrom?: string;
  goodThru?: string;
}

export interface UserAccount {
  title: string;
  accNo: number;
  subText1: string;
  balance: number;
  currency: string;
  subText2: string;
  branch: string;
}

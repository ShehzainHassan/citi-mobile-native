// Navigation type definitions for React Navigation
// Stack param lists for all navigation stacks
// Screen props types for type-safe navigation

import { PaymentData } from '@/interfaces';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ChangePassword: { from?: 'Security' | 'Settings' };
};

export type MainTabParamList = {
  Home: undefined;
  Accounts: { accountId?: string };
  Transfers: undefined;
  Bills: undefined;
  TransactionReport: { accountId?: string; fromDate?: string };
  Search: undefined;
  Messages: undefined;
  MessagesDetails: { headerText: string };
  Settings: undefined;
  Withdraw: undefined;
  PayBill: undefined;
  DetailedPaymentCard: {
    headerText: string;
    paymentData?: PaymentData;
  };
  PaymentDetails: undefined;
  PaymentHistory: undefined;
  CreditCard: undefined;
  CreditCardDetails: undefined;
  SaveOnline: undefined;
  Add: undefined;
  ChooseCard: undefined;
  Management: undefined;
  MobilePrepaid: undefined;
  BillDetails: undefined;
};

export type SearchParamList = {
  SearchForBranch: undefined;
  InterestRate: undefined;
  ExchangeRate: { baseCurrency?: string };
  Exchange: { fromCurrency?: string; toCurrency?: string };
};

export type SettingsParamList = {
  AppInformation: undefined;
  Language: undefined;
  ThemeSelector: undefined;
};
export type RootStackParamList = AuthStackParamList &
  MainTabParamList &
  SearchParamList &
  SettingsParamList;
export type MainTabWithAuthParamList = AuthStackParamList & MainTabParamList;
export type MainTabWithSearchParamList = MainTabParamList & SearchParamList;
export type MainTabWithSettingsParamList = MainTabParamList & SettingsParamList;
export type MainTabWithAuthAndSettingsParamList = AuthStackParamList &
  MainTabParamList &
  SettingsParamList;

// Enable global type checking
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Add more navigation types as needed...

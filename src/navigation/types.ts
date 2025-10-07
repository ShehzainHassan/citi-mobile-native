// Navigation type definitions for React Navigation
// Stack param lists for all navigation stacks
// Screen props types for type-safe navigation

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Onboarding: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ChangePassword: { from?: "ForgotPassword" | "Settings" };
};

export type MainTabParamList = {
  Home: undefined;
  Accounts: undefined;
  Transfers: undefined;
  Bills: undefined;
  TransactionReport: undefined;
  Search: undefined;
  Messages: undefined;
  Settings: undefined;
};

export type SearchParamList = {
  SearchForBranch: undefined;
  InterestRate: undefined;
  ExchangeRate: undefined;
  Exchange: undefined;
};

export type SettingsParamList = {
  AppInformation: undefined;
  Language: undefined;
  ThemeSelector: undefined;
};

export type MainTabWithAuthParamList = AuthStackParamList & MainTabParamList;
export type MainTabWithSearchParamList = MainTabParamList & SearchParamList;
export type MainTabWithSettingsParamList = MainTabParamList & SettingsParamList;
export type MainTabWithAuthAndSettingsParamList = AuthStackParamList &
  MainTabParamList &
  SettingsParamList;

// Add more navigation types as needed...

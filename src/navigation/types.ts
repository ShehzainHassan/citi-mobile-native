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
};

export type MainTabParamList = {
  Home: undefined;
  Accounts: undefined;
  Transfers: undefined;
  Bills: undefined;
  More: undefined;
};

// Add more navigation types as needed...
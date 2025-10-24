export const linking = {
  prefixes: ['citibank://', 'https://citibank.app'],
  config: {
    screens: {
      // Auth Screens
      SignIn: 'signin',
      SignUp: 'signup',
      ForgotPassword: 'forgot-password',
      ChangePassword: 'change-password/:from',

      // Main Screens
      Home: 'home',
      Accounts: 'accounts',
      Cards: 'cards',
      CardDetails: 'cards/:cardId',
      Transfers: 'transfers',
      ConfirmTransfers: 'transfers/confirm/:transferType',
      Bills: 'bills',
      TransactionReport: 'transaction-report/:accountId?/:fromDate?',
      Search: 'search',
      Messages: 'messages',
      MessagesDetails: 'messages/:headerText',
      Settings: 'settings',
      Withdraw: 'withdraw',
      PayBill: 'pay-bill',
      DetailedPaymentCard: 'payment-card/:headerText',
      PaymentDetails: 'payment-details/:billType',
      PaymentHistory: 'payment-history',
      CreditCard: 'credit-card',
      CreditCardDetails: 'credit-card/details',
      SaveOnline: 'save-online',
      Add: 'add',
      ChooseCard: 'choose-card',
      Management: 'management',
      MobilePrepaid: 'mobile-prepaid',
      MobilePrepaidConfirm: 'mobile-prepaid/confirm/:fromCard/:toPhone/:amount',
      BillDetails: 'bill-details/:billType',

      // Beneficiary Screens
      Beneficiary: 'beneficiary',
      AddBeneficiary: 'beneficiary/add',
      ConfirmBeneficiary: 'beneficiary/confirm',

      // Search Screens
      SearchForBranch: 'search/branch',
      InterestRate: 'search/interest-rate',
      ExchangeRate: 'search/exchange-rate/:baseCurrency?',
      Exchange: 'search/exchange/:fromCurrency?/:toCurrency?',

      // Settings Screens
      AppInformation: 'settings/app-info',
      Language: 'settings/language',
      ThemeSelector: 'settings/theme',
    },
  },
};

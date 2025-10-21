import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { I18nextProvider } from 'react-i18next';

import { i18n } from '@/i18n';
import type { RootStackParamList } from '@/navigation/types';

import { IDLE_SCREENS } from '@/constants';
import { useSessionManager } from '@/hooks';
import { getCurrentRouteName, navigationRef } from '@/navigation';
import {
  Accounts,
  Add,
  AddNewBeneficiary,
  AppInformation,
  Beneficiary,
  BillDetails,
  ChangePassword,
  ConfimMobilePrepaid,
  ConfirmBeneficiary,
  ConfirmTransfer,
  CreditCardDetails,
  CreditCardScreen,
  DetailedPayment,
  Exchange,
  ExchangeRate,
  ForgotPassword,
  HomeScreen,
  InterestRate,
  Language,
  Management,
  MessageDetails,
  Messages,
  MobilePrepaid,
  PaymentDetails,
  PaymentHistory,
  PayTheBill,
  SaveOnline,
  Search,
  SearchForBranch,
  Settings,
  SignIn,
  SignUp,
  ThemeSelector,
  TransactionReport,
  Transfer,
  Withdraw,
} from '@/screens';
import { TouchableWithoutFeedback } from 'react-native';
import { ProtectedRoute } from '@/components';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppContent() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          console.log(
            '[Navigation] ready. Current route:',
            getCurrentRouteName(),
          );
        }}
      >
        <SessionProvider />
      </NavigationContainer>
    </I18nextProvider>
  );
}
function SessionProvider() {
  const { resetSession } = useSessionManager();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        const route = getCurrentRouteName();
        if (!IDLE_SCREENS.includes(route)) {
          resetSession();
        }
      }}
    >
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />

        <Stack.Screen
          name="Home"
          children={() => (
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Accounts"
          children={() => (
            <ProtectedRoute>
              <Accounts />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Withdraw"
          children={() => (
            <ProtectedRoute>
              <Withdraw />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Transfers"
          children={() => (
            <ProtectedRoute>
              <Transfer />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="ConfirmTransfers"
          children={() => (
            <ProtectedRoute>
              <ConfirmTransfer />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Messages"
          children={() => (
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="MessagesDetails"
          children={() => (
            <ProtectedRoute>
              <MessageDetails />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Settings"
          children={() => (
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="TransactionReport"
          children={() => (
            <ProtectedRoute>
              <TransactionReport />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Search"
          children={() => (
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="InterestRate"
          children={() => (
            <ProtectedRoute>
              <InterestRate />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="ExchangeRate"
          children={() => (
            <ProtectedRoute>
              <ExchangeRate />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Exchange"
          children={() => (
            <ProtectedRoute>
              <Exchange />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="AppInformation"
          children={() => (
            <ProtectedRoute>
              <AppInformation />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Language"
          children={() => (
            <ProtectedRoute>
              <Language />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="SearchForBranch"
          children={() => (
            <ProtectedRoute>
              <SearchForBranch />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="ThemeSelector"
          children={() => (
            <ProtectedRoute>
              <ThemeSelector />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="PayBill"
          children={() => (
            <ProtectedRoute>
              <PayTheBill />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="PaymentHistory"
          children={() => (
            <ProtectedRoute>
              <PaymentHistory />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="CreditCard"
          children={() => (
            <ProtectedRoute>
              <CreditCardScreen />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="CreditCardDetails"
          children={() => (
            <ProtectedRoute>
              <CreditCardDetails />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="SaveOnline"
          children={() => (
            <ProtectedRoute>
              <SaveOnline />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Add"
          children={() => (
            <ProtectedRoute>
              <Add />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Management"
          children={() => (
            <ProtectedRoute>
              <Management />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="DetailedPaymentCard"
          children={() => (
            <ProtectedRoute>
              <DetailedPayment />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="PaymentDetails"
          children={() => (
            <ProtectedRoute>
              <PaymentDetails />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="BillDetails"
          children={() => (
            <ProtectedRoute>
              <BillDetails />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="MobilePrepaid"
          children={() => (
            <ProtectedRoute>
              <MobilePrepaid />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="MobilePrepaidConfirm"
          children={() => (
            <ProtectedRoute>
              <ConfimMobilePrepaid />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="Beneficiary"
          children={() => (
            <ProtectedRoute>
              <Beneficiary />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="AddBeneficiary"
          children={() => (
            <ProtectedRoute>
              <AddNewBeneficiary />
            </ProtectedRoute>
          )}
        />
        <Stack.Screen
          name="ConfirmBeneficiary"
          children={props => (
            <ProtectedRoute {...props}>
              <ConfirmBeneficiary {...props} />
            </ProtectedRoute>
          )}
        />
      </Stack.Navigator>
    </TouchableWithoutFeedback>
  );
}

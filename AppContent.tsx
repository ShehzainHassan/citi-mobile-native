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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Accounts" component={Accounts} />
        <Stack.Screen name="Withdraw" component={Withdraw} />
        <Stack.Screen name="Transfers" component={Transfer} />
        <Stack.Screen name="ConfirmTransfers" component={ConfirmTransfer} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="MessagesDetails" component={MessageDetails} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="TransactionReport" component={TransactionReport} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="InterestRate" component={InterestRate} />
        <Stack.Screen name="ExchangeRate" component={ExchangeRate} />
        <Stack.Screen name="Exchange" component={Exchange} />
        <Stack.Screen name="AppInformation" component={AppInformation} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="SearchForBranch" component={SearchForBranch} />
        <Stack.Screen name="ThemeSelector" component={ThemeSelector} />
        <Stack.Screen name="PayBill" component={PayTheBill} />
        <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
        <Stack.Screen name="CreditCard" component={CreditCardScreen} />
        <Stack.Screen name="CreditCardDetails" component={CreditCardDetails} />
        <Stack.Screen name="SaveOnline" component={SaveOnline} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Management" component={Management} />
        <Stack.Screen name="DetailedPaymentCard" component={DetailedPayment} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="BillDetails" component={BillDetails} />
        <Stack.Screen name="MobilePrepaid" component={MobilePrepaid} />
        <Stack.Screen
          name="MobilePrepaidConfirm"
          component={ConfimMobilePrepaid}
        />
        <Stack.Screen name="Beneficiary" component={Beneficiary} />
        <Stack.Screen name="AddBeneficiary" component={AddNewBeneficiary} />
        <Stack.Screen
          name="ConfirmBeneficiary"
          component={ConfirmBeneficiary}
        />
      </Stack.Navigator>
    </TouchableWithoutFeedback>
  );
}

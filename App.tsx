import { i18n } from "@/i18n";
import {
  Accounts,
  AppInformation,
  ChangePassword,
  Exchange,
  ExchangeRate,
  ForgotPassword,
  HomeScreen,
  InterestRate,
  Language,
  MessageDetails,
  Messages,
  Search,
  SearchForBranch,
  Settings,
  SignIn,
  SignUp,
  ThemeSelector,
  TransactionReport,
  Withdraw,
} from "@/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { I18nextProvider } from "react-i18next";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "./src/styles/ThemeProvider";

const Stack = createNativeStackNavigator();

function AppContent() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Withdraw"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Accounts" component={Accounts} />
          <Stack.Screen name="Withdraw" component={Withdraw} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="MessagesDetails" component={MessageDetails} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen
            name="TransactionReport"
            component={TransactionReport}
          />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="InterestRate" component={InterestRate} />
          <Stack.Screen name="ExchangeRate" component={ExchangeRate} />
          <Stack.Screen name="Exchange" component={Exchange} />
          <Stack.Screen name="AppInformation" component={AppInformation} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Language" component={Language} />
          <Stack.Screen name="SearchForBranch" component={SearchForBranch} />
          <Stack.Screen name="ThemeSelector" component={ThemeSelector} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppContent />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

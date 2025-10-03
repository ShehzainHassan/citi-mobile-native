import { i18n } from "@/i18n";
import {
  Accounts,
  ForgotPassword,
  HomeScreen,
  SignIn,
  SignUp,
  TransactionReport,
} from "@/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "./src/styles/ThemeProvider";

const Stack = createNativeStackNavigator();

function AppContent() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Accounts" component={Accounts} />
          <Stack.Screen
            name="TransactionReport"
            component={TransactionReport}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

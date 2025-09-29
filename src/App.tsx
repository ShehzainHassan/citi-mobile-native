// Main App component with theme provider
// Wrap entire app with ThemeProvider for consistent theming

import { ThemeProvider } from '@/theme/ThemeProvider';
// import { NavigationContainer } from '@react-navigation/native';
// import { Provider } from 'react-redux';
// import { store } from '@/store';

export default function App() {
  return (
    <ThemeProvider>
      {/* Add Redux Provider, Navigation, etc. here */}
      {/* <Provider store={store}> */}
      {/*   <NavigationContainer> */}
      {/*     <RootNavigator /> */}
      {/*   </NavigationContainer> */}
      {/* </Provider> */}
    </ThemeProvider>
  );
}

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ReactQueryProvider } from '@/providers';
import { persistor, store } from '@/store';
import { ThemeProvider } from '@/styles/ThemeProvider';

import { ErrorBoundary } from '@/components';
import AppContent from './AppContent';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ReactQueryProvider>
      <Provider store={store}>
        <ThemeProvider>
          <ErrorBoundary>
            <PersistGate loading={null} persistor={persistor}>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaProvider>
                  <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                  />
                  <AppContent />
                  <Toast />
                </SafeAreaProvider>
              </GestureHandlerRootView>
            </PersistGate>
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    </ReactQueryProvider>
  );
}

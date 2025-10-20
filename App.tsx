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

import AppContent from './AppContent';
import { ErrorBoundary } from '@/components';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <Provider store={store}>
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
          </Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

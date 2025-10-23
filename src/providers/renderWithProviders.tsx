import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@/styles/ThemeProvider';

export const renderWithProviders = (ui: React.ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

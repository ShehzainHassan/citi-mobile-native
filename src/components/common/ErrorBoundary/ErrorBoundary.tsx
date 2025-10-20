import { useTheme } from '@/theme';
import React from 'react';
import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';
import { Text, TouchableOpacity, View } from 'react-native';
import { errorBoundaryStyles } from './ErrorBoundary.styles';
import { Props } from './ErrorBoundary.types';

export const DefaultFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  if (__DEV__) {
    console.error('ErrorBoundary caught an error:', error);
  } else {
    // TODO: Send error to Sentry or Bugsnag
  }
  const { theme } = useTheme();
  const styles = errorBoundaryStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message}>{error.message}</Text>

      <TouchableOpacity onPress={resetErrorBoundary} style={styles.button}>
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export const ErrorBoundary: React.FC<Props> = ({ children, fallback }) => {
  const FallbackComponent = fallback ? () => <>{fallback}</> : DefaultFallback;

  return (
    <ReactErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ReactErrorBoundary>
  );
};

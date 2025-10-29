import { useTheme } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { errorMessageStyles } from './ErrorMessage.styles';
import { ErrorMessageProps } from './ErrorMessage.types';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  onRetry,
}) => {
  const { theme } = useTheme();
  const styles = errorMessageStyles(theme);
  const [showDetails, setShowDetails] = useState(false);

  const getFriendlyMessage = () => {
    if ('code' in error) {
      switch (error.code) {
        case 'NETWORK_ERROR':
          return 'No internet connection';
        case 'TIMEOUT':
          return 'Request timed out, please try again';
        case 'UNAUTHORIZED':
          return 'You are not authorized to perform this action';
        case 'FORBIDDEN':
          return 'Access is forbidden';
        case 'NOT_FOUND':
          return 'Requested resource not found';
        case 'SERVER_ERROR':
          return 'Server error occurred';
        case 'UNKNOWN_ERROR':
          return error.message || 'Something went wrong';
        default:
          return error.message || 'Something went wrong';
      }
    }

    return error.message || 'Something went wrong';
  };

  return (
    <View style={styles.errorContainer}>
      <View style={styles.errorHeader}>
        <MaterialIcons name="error-outline" size={24} color="red" />
        <Text style={styles.errorText}>{getFriendlyMessage()}</Text>
      </View>

      {onRetry && (
        <TouchableOpacity onPress={onRetry} style={styles.retryButton}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      )}

      {__DEV__ && (
        <TouchableOpacity onPress={() => setShowDetails(prev => !prev)}>
          <Text style={styles.debugToggle}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </Text>
        </TouchableOpacity>
      )}

      {__DEV__ && showDetails && (
        <Text style={styles.debugDetails}>
          {JSON.stringify(error, null, 2)}
        </Text>
      )}
    </View>
  );
};

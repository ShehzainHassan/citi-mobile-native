import { Images } from '@/assets/images';
import { ErrorMessage, OptimizedImage } from '@/components';
import { useAuthStyles, useGlobalStyles, useToast } from '@/hooks';
import { useBiometricAuth } from '@/hooks/useBiometricAuth';
import { useTheme } from '@/theme';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createBiometricAuthViewStyles } from './BiometricAuthView.styles';
import { BiometricAuthViewProps } from './BiometricAuthView.types';

export const BiometricAuthView: React.FC<BiometricAuthViewProps> = ({
  authType,
  onSuccess,
  showText = true,
}) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const styles = createBiometricAuthViewStyles(theme);
  const { error: showToastError } = useToast();
  const { authenticateWithBiometrics } = useBiometricAuth();

  const [biometricError, setBiometricError] = useState<Error | null>(null);

  const handleBiometricAuth = async () => {
    const { success, error } = await authenticateWithBiometrics();
    if (success) {
      onSuccess();
      setBiometricError(null);
    } else {
      const parsedError = new Error(error ?? 'Biometric authentication failed');
      showToastError('Authentication Failed', parsedError.message);
      setBiometricError(parsedError);
    }
  };

  return (
    <View style={globalStyles.largeSpacedColumn}>
      {showText && (
        <Text style={globalStyles.body3}>
          {authType === 'BIOMETRIC'
            ? 'Use your Face or Fingerprint to authenticate'
            : 'Use your device lock (PIN, Pattern, or Password)'}
        </Text>
      )}

      <View style={[globalStyles.centerContainer, styles.biometric]}>
        <TouchableOpacity onPress={handleBiometricAuth}>
          <OptimizedImage
            source={Images.fingerprint}
            style={authStyles.biometricButton}
          />
        </TouchableOpacity>
      </View>

      {biometricError && (
        <ErrorMessage error={biometricError} onRetry={handleBiometricAuth} />
      )}
    </View>
  );
};

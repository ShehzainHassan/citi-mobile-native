import { Images } from '@/assets/images';
import { ImageWithFallback } from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { useBiometricAuth } from '@/hooks/useBiometricAuth';
import { useTheme } from '@/theme';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { createBiometricAuthViewStyles } from './BiometricAuthView.styles';
import { BiometricAuthViewProps } from './BiometricAuthView.types';

export const BiometricAuthView: React.FC<BiometricAuthViewProps> = ({
  authType,
  onSuccess,
}) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const styles = createBiometricAuthViewStyles(theme);

  const { authenticateWithBiometrics } = useBiometricAuth();

  const handleBiometricAuth = async () => {
    const { success, error } = await authenticateWithBiometrics();
    if (success) {
      onSuccess();
    } else {
      Alert.alert('Authentication Failed', error);
    }
  };

  return (
    <View style={globalStyles.largeSpacedColumn}>
      <Text style={globalStyles.body3}>
        {authType === 'BIOMETRIC'
          ? 'Use your Face or Fingerprint to authenticate'
          : 'Use your device lock (PIN, Pattern, or Password)'}
      </Text>

      <View style={[globalStyles.centerContainer, styles.biometric]}>
        <TouchableOpacity onPress={handleBiometricAuth}>
          <ImageWithFallback
            source={Images.fingerprint}
            style={authStyles.biometricButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

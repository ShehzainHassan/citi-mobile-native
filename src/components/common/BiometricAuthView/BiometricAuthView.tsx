import { Images } from '@/assets/images';
import { ImageWithFallback } from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import React from 'react';
import { Alert, Platform, Text, TouchableOpacity, View } from 'react-native';
import { enableBioMetric } from 'react-native-biometric-check';
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
  const handleBiometricAuth = async () => {
    try {
      if (Platform.OS === 'ios') {
        enableBioMetric(
          'Use Face ID / Touch ID',
          'Authenticate to confirm transaction',
          res => {
            if (res === 5) {
              onSuccess();
            } else {
              Alert.alert('Authentication Failed', `${res}`);
            }
          },
        );
      } else {
        enableBioMetric(
          'Authentication Required',
          'Confirm using your biometrics or screen lock (PIN, Pattern, Password)',
          result => {
            const normalizedResult = String(result).toUpperCase();

            if (
              normalizedResult === 'AUTHENTICATION_SUCCESS' ||
              normalizedResult === 'BIOMETRIC_SUCCESS' ||
              normalizedResult === 'BIOMETRICS_SUCCESS' ||
              normalizedResult === 'SUCCESS' ||
              normalizedResult === '5'
            ) {
              onSuccess();
            } else {
              Alert.alert('Authentication Failed', `${result}`);
            }
          },
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Biometric authentication failed.');
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

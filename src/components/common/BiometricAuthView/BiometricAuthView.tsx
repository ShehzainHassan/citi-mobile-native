import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import { Images } from '@/assets/images';
import { ImageWithFallback } from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { enableBioMetric } from 'react-native-biometric-check';
import { BiometricAuthViewProps } from './BiometricAuthView.types';

export const BiometricAuthView: React.FC<BiometricAuthViewProps> = ({
  authType,
  onSuccess,
}) => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();

  const handleBiometricAuth = async () => {
    try {
      if (Platform.OS === 'ios') {
        enableBioMetric(
          'Use Face ID / Touch ID',
          'Authenticate to confirm transaction',
          res => {
            console.log('iOS Biometric Result:', res);

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
            console.log('Android Biometric Result:', result);
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

const styles = StyleSheet.create({
  biometric: {
    marginTop: -24,
  },
});

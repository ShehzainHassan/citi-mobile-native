import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import {
  enableBioMetric,
  checkBiometricSupport,
} from 'react-native-biometric-check';
import { secureStorage } from '@/services';

interface BiometricResult {
  success: boolean;
  error?: string;
}

const BIOMETRIC_ENABLED_KEY = 'BIOMETRIC_ENABLED';
const BIOMETRIC_EMAIL_KEY = 'BIOMETRIC_EMAIL';

export const useBiometricAuth = () => {
  const [biometricAvailable, setBiometricAvailable] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [savedEmail, setSavedEmail] = useState<string | null>(null);

  useEffect(() => {
    checkAvailability();
    loadBiometricPreference();
  }, []);

  const checkAvailability = async () => {
    checkBiometricSupport(status => {
      console.log('BIOMETRIC SUPPORT STATUS = ', status);
      setBiometricAvailable(status === 'SUCCESS');
    });
  };

  const loadBiometricPreference = async () => {
    const enabled = await secureStorage.getItem(BIOMETRIC_ENABLED_KEY);
    const email = await secureStorage.getItem(BIOMETRIC_EMAIL_KEY);
    setBiometricEnabled(Boolean(enabled));
    setSavedEmail(email);
  };

  const authenticateWithBiometrics = async (): Promise<BiometricResult> => {
    try {
      const result = await new Promise<string>(resolve => {
        enableBioMetric(
          Platform.OS === 'ios'
            ? 'Use Face ID / Touch ID'
            : 'Authentication Required',
          Platform.OS === 'ios'
            ? 'Authenticate to continue'
            : 'Confirm using biometrics or device lock',
          res => resolve(String(res)),
        );
      });

      const normalized = result.trim().toUpperCase();

      const successValues = new Set([
        'AUTHENTICATION_SUCCESS',
        'BIOMETRIC_SUCCESS',
        'BIOMETRICS_SUCCESS',
        'SUCCESS',
        '5',
      ]);

      if (successValues.has(normalized)) {
        return { success: true };
      }

      if (__DEV__) {
        console.warn('Biometric failed with response:', normalized);
      }

      return {
        success: false,
        error:
          normalized === 'AUTHENTICATION_FAILED'
            ? 'Biometric authentication was unsuccessful. Please try again.'
            : normalized,
      };
    } catch (e) {
      if (__DEV__) {
        console.error('Biometric exception:', e);
      }

      return {
        success: false,
        error:
          e instanceof Error
            ? e.message
            : 'Biometric authentication failed due to an unexpected error.',
      };
    }
  };

  const enableBiometrics = async (email: string) => {
    await secureStorage.setItem(BIOMETRIC_ENABLED_KEY, 'true');
    await secureStorage.setItem(BIOMETRIC_EMAIL_KEY, email);
    setBiometricEnabled(true);
    setSavedEmail(email);
  };

  const disableBiometrics = async () => {
    await secureStorage.deleteItem(BIOMETRIC_ENABLED_KEY);
    await secureStorage.deleteItem(BIOMETRIC_EMAIL_KEY);
    setBiometricEnabled(false);
    setSavedEmail(null);
  };

  return {
    biometricAvailable,
    biometricEnabled,
    savedEmail,
    authenticateWithBiometrics,
    enableBiometrics,
    disableBiometrics,
  };
};

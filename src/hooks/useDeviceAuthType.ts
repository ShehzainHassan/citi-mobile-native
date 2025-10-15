import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { checkBiometricSupport } from 'react-native-biometric-check';

type AuthType = 'NONE' | 'DEVICE' | 'BIOMETRIC';

export const useDeviceAuthType = (): AuthType => {
  const [authType, setAuthType] = useState<AuthType>('NONE');

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setAuthType('DEVICE');
      return;
    }

    checkBiometricSupport(result => {
      console.log('Biometric Support Result:', result);

      switch (result) {
        case 'SUCCESS':
          setAuthType('BIOMETRIC');
          break;

        case 'BIOMETRIC_NOT_ENROLLED':
        case 'BIOMETRIC_UNAVAILABLE':
        case 'BIOMETRIC_ERROR_HW_UNAVAILABLE':
        case 'BIOMETRIC_ERROR_NONE_ENROLLED':
          setAuthType('DEVICE');
          break;

        default:
          setAuthType('NONE');
          break;
      }
    });
  }, []);

  return authType;
};

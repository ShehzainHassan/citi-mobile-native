import * as Keychain from 'react-native-keychain';

export const secureStorage = {
  async setItem(key: string, value: string): Promise<void> {
    await Keychain.setGenericPassword(key, value, {
      service: key,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      securityLevel: Keychain.SECURITY_LEVEL.SECURE_HARDWARE,
    });
  },

  async getItem(key: string): Promise<string | null> {
    const credentials = await Keychain.getGenericPassword({
      service: key,
      authenticationPrompt: {
        title: 'Authenticate to continue',
      },
    });
    return credentials ? credentials.password : null;
  },

  async deleteItem(key: string): Promise<void> {
    await Keychain.resetGenericPassword({ service: key });
  },

  async isBiometricsAvailable(): Promise<boolean> {
    const biometry = await Keychain.getSupportedBiometryType();
    return biometry !== null;
  },
};

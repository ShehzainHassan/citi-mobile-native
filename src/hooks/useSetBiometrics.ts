import { authService } from '@/services';

export const useSetBiometrics = () => {
  const enableBiometric = async () => {
    await authService.enableBiometric();
  };

  const disableBiometric = async () => {
    await authService.disableBiometric();
  };

  return { enableBiometric, disableBiometric };
};

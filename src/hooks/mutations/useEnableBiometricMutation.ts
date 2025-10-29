import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services';

export const useEnableBiometricMutation = () => {
  return useMutation({
    mutationFn: () => authService.enableBiometric(),
  });
};

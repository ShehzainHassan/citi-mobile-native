import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services';

export const useDisableBiometricMutation = () => {
  return useMutation({
    mutationFn: () => authService.disableBiometric(),
  });
};

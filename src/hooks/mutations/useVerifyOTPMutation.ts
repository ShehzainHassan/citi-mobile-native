import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services';
import { VerifyOTPRequest } from '@/types';

export const useVerifyOTPMutation = () => {
  return useMutation({
    mutationFn: (payload: VerifyOTPRequest) => authService.verifyOTP(payload),
  });
};

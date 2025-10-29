import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services';
import { ResendOTPRequest } from '@/types';

export const useResendOTPMutation = () => {
  return useMutation({
    mutationFn: (payload: ResendOTPRequest) => authService.resendOTP(payload),
  });
};

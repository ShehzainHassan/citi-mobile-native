import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services';
import { ForgotPasswordRequest } from '@/types';

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: (payload: ForgotPasswordRequest) =>
      authService.forgotPassword(payload),
  });
};

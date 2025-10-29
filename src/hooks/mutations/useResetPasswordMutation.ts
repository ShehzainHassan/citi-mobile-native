import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services';
import { ResetPasswordRequest } from '@/types';

export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: (payload: ResetPasswordRequest) =>
      authService.resetPassword(payload),
  });
};

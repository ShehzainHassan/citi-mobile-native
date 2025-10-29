import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services';
import { ChangePasswordRequest } from '@/types';

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationFn: (payload: ChangePasswordRequest) =>
      authService.changePassword(payload),
  });
};

import { authService } from '@/services';
import { store } from '@/store';
import { clearAuth } from '@/store/slices/auth/authSlice';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

export const useSignOutMutation = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async () => {
      const refreshToken = store.getState().auth.refreshToken;
      if (!refreshToken) return;
      await authService.signOut(refreshToken);
      dispatch(clearAuth());
    },
  });
};

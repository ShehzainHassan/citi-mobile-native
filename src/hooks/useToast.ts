import { useCallback } from 'react';
import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export const useToast = () => {
  const showToast = useCallback(
    (type: ToastType, message: string, description?: string) => {
      Toast.show({
        type,
        text1: message,
        text2: description,
        position: 'top',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 50,
      });
    },
    [],
  );

  return {
    success: (message: string, description?: string) =>
      showToast('success', message, description),
    error: (message: string, description?: string) =>
      showToast('error', message, description),
    info: (message: string, description?: string) =>
      showToast('info', message, description),
    warning: (message: string, description?: string) =>
      showToast('warning', message, description),
  };
};

import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services';
import { SignInRequest } from '@/types';
import { useDispatch } from 'react-redux';
import { setTokens } from '@/store/slices/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabWithAuthParamList } from '@/navigation/types';

export const useSignInMutation = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();

  return useMutation({
    mutationFn: async (payload: SignInRequest) => {
      const tokens = await authService.signIn(payload);
      dispatch(setTokens(tokens));
      navigation.navigate('Home');
      return tokens;
    },
  });
};

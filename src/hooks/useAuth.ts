import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabWithAuthParamList } from '@/navigation/types';
import { authService } from '@/services';
import {
  setAuthLoading,
  setTokens,
  setAuthError,
  clearAuth,
} from '@/store/slices/authSlice/authSlice';
import { handleAPIError } from '@/utils';
import { useToast } from '@/hooks';
import { SignInRequest, SignUpRequest } from '@/types';
import { store } from '@/store';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();
  const { success, error: showError } = useToast();

  const applyTokens = (tokens: {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
  }) => {
    dispatch(setTokens(tokens));
  };

  const signIn = async (credentials: SignInRequest) => {
    dispatch(setAuthLoading(true));
    try {
      const tokens = await authService.signIn(credentials);
      applyTokens(tokens);
      success('Sign in successful', 'Welcome back!');
      navigation.navigate('Home');
    } catch (err) {
      const parsed = handleAPIError(err);
      dispatch(setAuthError(parsed.message));
      showError('Sign in failed', parsed.message);
    } finally {
      dispatch(setAuthLoading(false));
    }
  };

  const signUp = async (payload: SignUpRequest) => {
    dispatch(setAuthLoading(true));
    try {
      const tokens = await authService.signUp(payload);
      applyTokens(tokens);
      success('Registered successfully!', 'Welcome!');
      navigation.navigate('Home');
    } catch (err) {
      const parsed = handleAPIError(err);
      dispatch(setAuthError(parsed.message));
      showError('Registration failed', parsed.message);
    } finally {
      dispatch(setAuthLoading(false));
    }
  };

  const signOut = async () => {
    const refreshToken = store.getState().auth.refreshToken;
    if (!refreshToken) return;

    try {
      await authService.signOut(refreshToken);
    } catch (err) {
      const parsed = handleAPIError(err);
      showError('Sign out failed', parsed.message);
    } finally {
      dispatch(clearAuth());
    }
  };

  return { signIn, signUp, signOut };
};

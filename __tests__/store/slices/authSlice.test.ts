import authReducer, {
  clearAuth,
  setAuthError,
  setAuthLoading,
  setTokens,
} from '@/store/slices/authSlice/authSlice';
import { AuthState } from '@/types';

describe('authSlice', () => {
  const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    expiresAt: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  };

  test('should return the initial state', () => {
    expect(authReducer(undefined, { type: '' })).toEqual(initialState);
  });

  test('setTokens should set tokens and authenticate user', () => {
    const mockPayload = {
      accessToken: 'mockAccess123',
      refreshToken: 'mockRefresh123',
      expiresAt: 9999999999,
    };

    const newState = authReducer(initialState, setTokens(mockPayload));

    expect(newState.accessToken).toBe('mockAccess123');
    expect(newState.refreshToken).toBe('mockRefresh123');
    expect(newState.expiresAt).toBe(9999999999);
    expect(newState.isAuthenticated).toBe(true);
  });

  test('clearAuth should reset all auth values', () => {
    const authenticatedState: AuthState = {
      accessToken: 'token',
      refreshToken: 'refresh',
      expiresAt: 12345,
      isAuthenticated: true,
      isLoading: false,
      error: null,
    };

    const newState = authReducer(authenticatedState, clearAuth());

    expect(newState.accessToken).toBeNull();
    expect(newState.refreshToken).toBeNull();
    expect(newState.expiresAt).toBeNull();
    expect(newState.isAuthenticated).toBe(false);
  });

  test('setAuthError should set error and stop loading', () => {
    const errorState = authReducer(initialState, setAuthError('Login failed'));

    expect(errorState.error).toBe('Login failed');
    expect(errorState.isLoading).toBe(false);
  });

  test('setAuthLoading should toggle loading state', () => {
    const loadingState = authReducer(initialState, setAuthLoading(true));
    expect(loadingState.isLoading).toBe(true);

    const stoppedState = authReducer(loadingState, setAuthLoading(false));
    expect(stoppedState.isLoading).toBe(false);
  });
});

import { store } from '@/store';
import { clearAuth } from '@/store/slices/authSlice/authSlice';
import { AuthTokens, UserCredentials } from '@/types';

const FIXED_USER = {
  email: 'test@example.com',
  password: 'Password123',
};

export const authService = {
  async signIn(credentials: UserCredentials): Promise<AuthTokens> {
    if (
      credentials.email !== FIXED_USER.email ||
      credentials.password !== FIXED_USER.password
    ) {
      throw new Error('Invalid credentials');
    }

    const expiresAt = Date.now() + 60 * 60 * 1000;

    return {
      accessToken: 'MOCK_ACCESS_TOKEN',
      refreshToken: 'MOCK_REFRESH_TOKEN',
      expiresAt,
    };
  },

  async refreshAccessToken(): Promise<string> {
    return 'MOCK_ACCESS_TOKEN_REFRESHED';
  },

  async signOut(): Promise<void> {
    store.dispatch(clearAuth());
    return;
  },

  async isAuthenticated(): Promise<boolean> {
    const state = store.getState().auth;
    if (!state.accessToken) {
      return false;
    }

    const now = Date.now();
    if (!state.expiresAt || state.expiresAt < now) {
      return false;
    }

    return true;
  },
};

import { userAPI } from '@/api/userAPI';
import { AuthTokens, SignInRequest, SignUpRequest } from '@/types';
import { handleAPIError } from '@/utils';

export const authService = {
  async signIn(credentials: SignInRequest): Promise<AuthTokens> {
    try {
      const response = await userAPI.loginUser(credentials);
      return {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        expiresAt: new Date(response.expiresAt).getTime(),
      };
    } catch (err) {
      throw handleAPIError(err);
    }
  },

  async signUp(payload: SignUpRequest): Promise<AuthTokens> {
    try {
      const response = await userAPI.addUser(payload);
      return {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        expiresAt: new Date(response.expiresAt).getTime(),
      };
    } catch (err) {
      throw handleAPIError(err);
    }
  },

  async refreshAccessToken(refreshToken: string): Promise<AuthTokens> {
    try {
      const response = await userAPI.refreshToken(refreshToken);
      return {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        expiresAt: new Date(response.expiresAt).getTime(),
      };
    } catch (err) {
      throw handleAPIError(err);
    }
  },

  async signOut(refreshToken: string): Promise<void> {
    try {
      await userAPI.signOut(refreshToken);
    } catch (err) {
      throw handleAPIError(err);
    }
  },

  isAuthenticated(
    accessToken: string | null,
    expiresAt: number | null,
  ): boolean {
    if (!accessToken || !expiresAt) return false;
    return expiresAt > Date.now();
  },
};

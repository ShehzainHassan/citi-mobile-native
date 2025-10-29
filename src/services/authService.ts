import { userAPI } from '@/api/userAPI';
import {
  AuthTokens,
  ChangePasswordRequest,
  ForgotPasswordRequest,
  ResendOTPRequest,
  ResetPasswordRequest,
  SignInRequest,
  SignUpRequest,
  VerifyOTPRequest,
} from '@/types';

export const authService = {
  async signIn(credentials: SignInRequest): Promise<AuthTokens> {
    const response = await userAPI.loginUser(credentials);
    return {
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      expiresAt: new Date(response.expiresAt).getTime(),
    };
  },

  async signUp(payload: SignUpRequest): Promise<AuthTokens> {
    const response = await userAPI.addUser(payload);
    return {
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      expiresAt: new Date(response.expiresAt).getTime(),
    };
  },

  async refreshAccessToken(refreshToken: string): Promise<AuthTokens> {
    const response = await userAPI.refreshToken(refreshToken);
    return {
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      expiresAt: new Date(response.expiresAt).getTime(),
    };
  },

  async signOut(refreshToken: string): Promise<void> {
    return await userAPI.signOut(refreshToken);
  },

  async forgotPassword(payload: ForgotPasswordRequest): Promise<void> {
    return await userAPI.forgotPassword(payload);
  },

  async verifyOTP(payload: VerifyOTPRequest): Promise<string> {
    return await userAPI.verifyOTP(payload);
  },

  async resendOTP(payload: ResendOTPRequest): Promise<string> {
    return await userAPI.resendOTP(payload);
  },

  async resetPassword(payload: ResetPasswordRequest): Promise<void> {
    await userAPI.resetPassword(payload);
  },

  async changePassword(payload: ChangePasswordRequest): Promise<void> {
    await userAPI.changePassword(payload);
  },

  async enableBiometric(): Promise<void> {
    await userAPI.enableBiometric();
  },
  async disableBiometric(): Promise<void> {
    await userAPI.disableBiometric();
  },
  isAuthenticated(
    accessToken: string | null,
    expiresAt: number | null,
  ): boolean {
    if (!accessToken || !expiresAt) return false;
    return expiresAt > Date.now();
  },
};

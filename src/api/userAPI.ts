import { userAccounts, userCards } from '@/mocks';
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
import { USE_MOCK } from '@env';
import { userClient } from './clients/userClient';

export const userAPI = {
  loginUser: async (formData: SignInRequest) => {
    const response = await userClient.post<AuthTokens>('/auth/signin', {
      email: formData.email,
      password: formData.password,
    });
    return response.data;
  },

  addUser: async (formData: SignUpRequest) => {
    const response = await userClient.post('/auth/signup', {
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      acceptTerms: formData.acceptTerms,
    });
    return response.data;
  },

  refreshToken: async (refreshToken: string) => {
    const response = await userClient.post<AuthTokens>('/auth/refresh', {
      refreshToken,
    });
    return response.data;
  },

  forgotPassword: async (formData: ForgotPasswordRequest) => {
    const response = await userClient.post('/auth/forgot-password', {
      email: formData.email,
      phoneNumber: formData.phoneNo,
    });
    return response.data;
  },

  verifyOTP: async (formData: VerifyOTPRequest) => {
    const response = await userClient.post<{ verificationToken: string }>(
      '/auth/verify-otp',
      {
        email: formData.email,
        phoneNumber: formData.phoneNo,
        code: formData.code,
      },
    );
    return response.data.verificationToken;
  },

  resendOTP: async (formData: ResendOTPRequest) => {
    const response = await userClient.post<string>('/auth/resend-otp', {
      email: formData.email,
      phoneNumber: formData.phoneNo,
    });
    return response.data;
  },

  resetPassword: async (formData: ResetPasswordRequest) => {
    const response = await userClient.post<string>('/auth/reset-password', {
      email: formData.email,
      verificationToken: formData.verificationToken,
      newPassword: formData.newPassword,
    });
    return response.data;
  },

  changePassword: async (formData: ChangePasswordRequest) => {
    const response = await userClient.post<string>('/auth/change-password', {
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
      confirmPassword: formData.confirmPassword,
    });
    return response.data;
  },

  signOut: async (refreshToken: string) => {
    await userClient.post('/auth/signout', {
      refreshToken,
    });
  },

  enableBiometric: async () => {
    const response = await userClient.post('/auth/enable-biometric');
    return response.data;
  },

  disableBiometric: async () => {
    const response = await userClient.post('/auth/disable-biometric');
    return response.data;
  },

  getPrimaryCard: () => {
    if (USE_MOCK) {
      return userCards[0];
    } else {
      return null;
    }
  },

  getUserCards: () => {
    if (USE_MOCK) {
      return userCards;
    } else {
      return null;
    }
  },

  getUserAccounts: () => {
    if (USE_MOCK) {
      return userAccounts;
    } else {
      return null;
    }
  },
};

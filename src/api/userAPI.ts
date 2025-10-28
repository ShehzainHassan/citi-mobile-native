import { userAccounts, userCards } from '@/mocks';
import { handleAPIError } from '@/utils';
import { USE_MOCK } from '@env';
import { userClient } from './clients/userClient';
import { AuthTokens, SignInRequest, SignUpRequest } from '@/types';

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

  signOut: async (refreshToken: string) => {
    await userClient.post('/auth/signout', {
      refreshToken,
    });
  },
  getPrimaryCard: () => {
    try {
      if (USE_MOCK) {
        return userCards[0];
      } else {
        return null;
      }
    } catch (error) {
      throw handleAPIError(error);
    }
  },
  getUserCards: () => {
    try {
      if (USE_MOCK) {
        return userCards;
      } else {
        return null;
      }
    } catch (error) {
      throw handleAPIError(error);
    }
  },
  getUserAccounts: () => {
    try {
      if (USE_MOCK) {
        return userAccounts;
      } else {
        return null;
      }
    } catch (error) {
      throw handleAPIError(error);
    }
  },
};

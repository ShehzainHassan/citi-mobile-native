import { userAccounts, userCards } from '@/mocks';
import { handleAPIError } from '@/utils';
import { USE_MOCK } from '@env';

export const userAPI = {
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

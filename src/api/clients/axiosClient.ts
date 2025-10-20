import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { store } from '@/store';
import { authService } from '@/services/authService';
import { clearAuth, setTokens } from '@/store/slices/authSlice/authSlice';
import { handleAPIError } from '@/utils';

let isRefreshing = false;
let failedQueue: {
  resolve: (token: string) => void;
  reject: (err: unknown) => void;
}[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(prom => {
    token ? prom.resolve(token) : prom.reject(error);
  });
  failedQueue = [];
};

export const createAxiosClient = (baseURL: string) => {
  const client = axios.create({
    baseURL,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
  });

  client.interceptors.request.use(async config => {
    const token = store.getState().auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as AxiosRequestConfig & {
        _retry?: boolean;
      };
      const state = store.getState();

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise<string>((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          }).then(token => {
            originalRequest.headers = {
              ...originalRequest.headers,
              Authorization: `Bearer ${token}`,
            };
            return client(originalRequest);
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const newToken = await authService.refreshAccessToken();

          store.dispatch(
            setTokens({
              accessToken: newToken,
              refreshToken: state.auth.refreshToken ?? '',
              expiresAt: Date.now() + 60 * 60 * 1000,
            }),
          );

          processQueue(null, newToken);
          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${newToken}`,
          };
          return client(originalRequest);
        } catch (err) {
          processQueue(err, null);
          store.dispatch(clearAuth());
          throw handleAPIError(err);
        } finally {
          isRefreshing = false;
        }
      }

      throw handleAPIError(error);
    },
  );

  return client;
};

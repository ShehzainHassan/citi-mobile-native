export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
export interface UserPreferences {
  language: string;
  currency: string;
  notificationsEnabled: boolean;
  theme: 'light' | 'dark' | 'system';
}
export interface UserProfile {
  userId: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  accountNumbers: string[];
  kycStatus: 'pending' | 'verified' | 'rejected';
  biometricEnabled: boolean;
  lastLoginAt: Date;
  createdAt: Date;
}
export interface UserState {
  profile: UserProfile | null;
  preferences: UserPreferences;
  isLoading: boolean;
  error: string | null;
}
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}
export interface UserCredentials {
  email: string;
  password: string;
}

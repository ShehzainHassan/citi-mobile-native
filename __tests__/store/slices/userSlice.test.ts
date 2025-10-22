import userReducer, {
  clearUser,
  setUser,
  setUserError,
  setUserLoading,
  updatePreferences,
} from '@/store/slices/user/userSlice';
import { UserProfile, UserPreferences, UserState } from '@/types';

describe('userSlice', () => {
  const initialPreferences: UserPreferences = {
    language: 'en',
    currency: 'USD',
    notificationsEnabled: true,
    theme: 'system',
  };

  const initialState: UserState = {
    profile: null,
    preferences: initialPreferences,
    isLoading: false,
    error: null,
  };

  test('should return initial state', () => {
    expect(userReducer(undefined, { type: '' })).toEqual(initialState);
  });

  test('should handle setUserLoading', () => {
    const nextState = userReducer(initialState, setUserLoading(true));
    expect(nextState.isLoading).toBe(true);
  });

  test('should handle setUser', () => {
    const mockProfile: UserProfile = {
      userId: '123',
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '+123456789',
      accountNumbers: ['ACC123'],
      kycStatus: 'verified',
      biometricEnabled: true,
      lastLoginAt: new Date(),
      createdAt: new Date(),
    };

    const nextState = userReducer(initialState, setUser(mockProfile));

    expect(nextState.profile).toEqual(mockProfile);
    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBeNull();
  });

  test('should handle updatePreferences', () => {
    const updated = userReducer(
      initialState,
      updatePreferences({ language: 'fr', theme: 'dark' }),
    );

    expect(updated.preferences).toEqual({
      ...initialPreferences,
      language: 'fr',
      theme: 'dark',
    });
  });

  test('should handle setUserError', () => {
    const errorState = userReducer(
      initialState,
      setUserError('Something went wrong'),
    );
    expect(errorState.error).toBe('Something went wrong');
    expect(errorState.isLoading).toBe(false);
  });

  test('should handle clearUser', () => {
    const stateWithUser: UserState = {
      ...initialState,
      profile: {
        userId: '1',
        fullName: 'John Doe',
        email: 'john@example.com',
        phoneNumber: '+123456789',
        accountNumbers: ['ACC1', 'ACC2'],
        kycStatus: 'verified',
        biometricEnabled: true,
        lastLoginAt: new Date(),
        createdAt: new Date(),
      },
    };

    const cleared = userReducer(stateWithUser, clearUser());
    expect(cleared.profile).toBeNull();
    expect(cleared.error).toBeNull();
    expect(cleared.isLoading).toBe(false);
  });
});

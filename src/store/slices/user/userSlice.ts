import { UserPreferences, UserProfile, UserState } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    updatePreferences: (
      state,
      action: PayloadAction<Partial<UserPreferences>>,
    ) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    setUserError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearUser: state => {
      state.profile = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  setUser,
  clearUser,
  setUserLoading,
  updatePreferences,
  setUserError,
} = userSlice.actions;

export default userSlice.reducer;

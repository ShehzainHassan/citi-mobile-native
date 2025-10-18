import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthPayload {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role?: string;
  };
  expiresAt: string;
}

interface AuthState {
  auth: AuthPayload | null;
}

const initialState: AuthState = {
  auth: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthPayload>) => {
      state.auth = action.payload;
    },
    clearAuth: state => {
      state.auth = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;

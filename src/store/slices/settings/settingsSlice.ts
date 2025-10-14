import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  currency: string;
}

const initialState: SettingsState = {
  currency: 'USD',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = settingsSlice.actions;
export default settingsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  settings: any | null;
}

const initialState: SettingsState = {
  settings: null,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<any>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = null;
    },
  },
});

export const { setSettings, clearSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
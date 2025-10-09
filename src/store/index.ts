import { configureStore } from "@reduxjs/toolkit";
// Import your slices/reducers
import userReducer from "@/store/slices/user/userSlice";
import settingsReducer from "@/store/slices/settings/settingsSlice";
import authReducer from "@/store/slices/authSlice/authSlice";

// Create the store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    settings: settingsReducer,
  },
  // Optional: middleware or devtools
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

// Infer types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

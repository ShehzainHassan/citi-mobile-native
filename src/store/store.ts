import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from '@/store/slices/user/userSlice';
import settingsReducer from '@/store/slices/settings/settingsSlice';
import authReducer from '@/store/slices/authSlice/authSlice';

const settingsPersistConfig = {
  key: 'settings',
  storage: AsyncStorage,
  whitelist: ['currency'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  settings: persistReducer(settingsPersistConfig, settingsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

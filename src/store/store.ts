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
import { encryptTransform } from './persistConfig';
import { loggerMiddleware } from './middleware/logger';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['accessToken', 'refreshToken', 'expiresAt'],
  transforms: [encryptTransform],
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['profile', 'preferences'],
  transforms: [encryptTransform],
};

const settingsPersistConfig = {
  key: 'settings',
  storage: AsyncStorage,
  whitelist: ['currency'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
  settings: persistReducer(settingsPersistConfig, settingsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(__DEV__ ? [loggerMiddleware] : []),
  devTools: __DEV__,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

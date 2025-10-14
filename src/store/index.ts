export { store, persistor } from './store';

export type { RootState, AppDispatch } from './store';

export { default as authReducer } from './slices/authSlice/authSlice';
export { default as settingsReducer } from './slices/settings/settingsSlice';

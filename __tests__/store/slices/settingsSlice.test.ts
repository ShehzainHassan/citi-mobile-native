import settingsReducer, {
  setCurrency,
  SettingsState,
} from '@/store/slices/settings/settingsSlice';

describe('settingsSlice', () => {
  const initialState: SettingsState = {
    currency: 'USD',
  };

  test('should return the initial state', () => {
    expect(settingsReducer(undefined, { type: '' })).toEqual(initialState);
  });

  test('should handle setCurrency', () => {
    const newState = settingsReducer(initialState, setCurrency('PKR'));
    expect(newState.currency).toBe('PKR');
  });

  test('should update currency multiple times correctly', () => {
    let state = settingsReducer(initialState, setCurrency('EUR'));
    expect(state.currency).toBe('EUR');

    state = settingsReducer(state, setCurrency('JPY'));
    expect(state.currency).toBe('JPY');
  });
});

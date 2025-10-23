/* eslint-env jest */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-haptic-feedback', () => ({
  trigger: jest.fn(),
}));

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('redux-persist', () => {
  const actual = jest.requireActual('redux-persist');
  return {
    ...actual,
    persistStore: () => ({ purge: jest.fn(), flush: jest.fn() }),
  };
});

jest.mock('@react-native-vector-icons/material-icons', () => 'Icon');

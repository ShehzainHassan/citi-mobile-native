import { fireEvent, waitFor } from '@testing-library/react-native';
import { SignIn } from '@/screens/auth/SignIn';
import { useToast } from '@/hooks/useToast';
import { useDeviceAuthType } from '@/hooks/useDeviceAuthType';
import { useFormValidation } from '@/hooks/useFormValidation';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { authService } from '@/services';
import { renderWithProviders } from '@/providers';

jest.mock('@/hooks/useToast');
jest.mock('@/hooks/useDeviceAuthType');
jest.mock('@/hooks/useFormValidation');
jest.mock('@/services', () => ({
  authService: {
    signIn: jest.fn(),
  },
}));

describe('SignIn Screen', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  const mockSuccess = jest.fn();
  const mockError = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });
    (useToast as jest.Mock).mockReturnValue({
      success: mockSuccess,
      error: mockError,
    });
    (useDeviceAuthType as jest.Mock).mockReturnValue('NONE');
    (useFormValidation as jest.Mock).mockReturnValue({
      values: { email: 'test@example.com', password: 'Password123' },
      errors: {},
      handleChange: jest.fn(),
      validateAll: jest.fn(() => true),
    });
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    const { getByPlaceholderText, getByTestId } = renderWithProviders(
      <SignIn />,
    );
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByTestId('sign-in-button')).toBeTruthy();
  });

  test('calls handleSignIn on button press with valid input', async () => {
    (authService.signIn as jest.Mock).mockResolvedValue({ accessToken: 'abc' });

    const { getByTestId } = renderWithProviders(<SignIn />);
    fireEvent.press(getByTestId('sign-in-button'));

    await waitFor(() => {
      expect(authService.signIn).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'Password123',
      });
      expect(mockDispatch).toHaveBeenCalled();
      expect(mockSuccess).toHaveBeenCalledWith(
        'Sign in successful',
        'Welcome back!',
      );
      expect(mockNavigate).toHaveBeenCalledWith('Home');
    });
  });

  test('shows error toast on failed login', async () => {
    (authService.signIn as jest.Mock).mockRejectedValue(
      new Error('Invalid credentials'),
    );

    const { getByTestId } = renderWithProviders(<SignIn />);
    fireEvent.press(getByTestId('sign-in-button'));

    await waitFor(() => {
      expect(mockError).toHaveBeenCalledWith(
        'Sign in failed',
        'Invalid credentials',
      );
    });
  });
});

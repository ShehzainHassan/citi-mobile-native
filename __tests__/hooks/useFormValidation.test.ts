import { renderHook, act } from '@testing-library/react-native';
import { useFormValidation } from '@/hooks/useFormValidation';

jest.mock('@/utils', () => ({
  sanitizeInput: (value: string, field: string) => {
    switch (field) {
      case 'name':
        return value.replace(/[^a-zA-Z\s]/g, '');
      case 'email':
        return value.trim();
      default:
        return value.trim();
    }
  },
  validationRules: {
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Enter a valid email address',
    },
    password: {
      regex: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        'Password must be at least 8 characters, include one uppercase and one number',
    },
    confirmPassword: {
      matchField: 'password',
      message: 'Passwords do not match',
    },
    name: {
      regex: /^[A-Za-z\s]+$/,
      message: 'Name can only contain letters',
    },
  },
}));

describe('useFormValidation hook', () => {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };

  test('initializes with given values', () => {
    const { result } = renderHook(() => useFormValidation(initialValues));
    expect(result.current.values).toEqual(initialValues);
    expect(result.current.errors).toEqual({});
  });

  test('handleChange sanitizes input and updates values', () => {
    const { result } = renderHook(() => useFormValidation(initialValues));

    act(() => result.current.handleChange('name', 'John123'));
    expect(result.current.values.name).toBe('John');
  });

  test('invalid email triggers error', () => {
    const { result } = renderHook(() => useFormValidation(initialValues));

    act(() => result.current.handleChange('email', 'invalid'));
    expect(result.current.errors.email).toBe('Enter a valid email address');
  });

  test('valid email clears error', () => {
    const { result } = renderHook(() => useFormValidation(initialValues));

    act(() => result.current.handleChange('email', 'test@example.com'));
    expect(result.current.errors.email).toBeNull();
  });

  test('password rule works (invalid -> error)', () => {
    const { result } = renderHook(() => useFormValidation(initialValues));

    act(() => result.current.handleChange('password', 'short'));
    expect(result.current.errors.password).toBe(
      'Password must be at least 8 characters, include one uppercase and one number',
    );
  });

  test('confirmPassword mismatch triggers error', () => {
    const { result } = renderHook(() =>
      useFormValidation({ ...initialValues, password: 'Valid123' }),
    );

    act(() => result.current.handleChange('confirmPassword', 'wrong123'));
    expect(result.current.errors.confirmPassword).toBe(
      'Passwords do not match',
    );
  });

  test('validateAll returns false when fields are invalid', () => {
    const { result } = renderHook(() => useFormValidation(initialValues));

    act(() => {
      const valid = result.current.validateAll();
      expect(valid).toBe(false);
    });
  });

  test('validateAll returns true when all fields are valid', () => {
    const { result } = renderHook(() =>
      useFormValidation({
        email: 'test@example.com',
        password: 'Valid123',
        confirmPassword: 'Valid123',
        name: 'John Doe',
      }),
    );

    act(() => {
      const valid = result.current.validateAll();
      expect(valid).toBe(true);
    });
  });

  test('confirmPassword match clears error', () => {
    const { result } = renderHook(() =>
      useFormValidation({
        ...initialValues,
        password: 'Valid123',
      }),
    );

    act(() => result.current.handleChange('confirmPassword', 'Valid123'));
    expect(result.current.errors.confirmPassword).toBeNull();
  });

  test('validateAll(skipPassword) ignores password validation', () => {
    const { result } = renderHook(() =>
      useFormValidation({
        email: 'test@example.com',
        password: 'invalid',
        confirmPassword: '',
        name: 'John',
      }),
    );

    act(() => {
      const valid = result.current.validateAll(true);
      expect(valid).toBe(false);
    });
  });
});

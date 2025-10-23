import { renderHook, act } from '@testing-library/react-native';
import { currencySymbolsMap } from '@/utils';
import { useAmountSelector, useAppSelector } from '@/hooks';

jest.mock('@/hooks/redux', () => ({
  useAppSelector: jest.fn(),
}));
describe('useAmountSelector', () => {
  const mockCurrency = 'USD';
  const mockSymbol = currencySymbolsMap[mockCurrency] || mockCurrency;

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation(selectorFn =>
      selectorFn({ settings: { currency: mockCurrency } }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('initializes with null selectedAmount and empty customAmount', () => {
    const { result } = renderHook(() => useAmountSelector());

    expect(result.current.selectedAmount).toBeNull();
    expect(result.current.customAmount).toBe('');
  });

  describe('handleAmountPress', () => {
    test('sets selectedAmount and clears customAmount when amount is not "Other"', () => {
      const { result } = renderHook(() => useAmountSelector());

      act(() => result.current.handleAmountPress('100'));
      expect(result.current.selectedAmount).toBe('100');
      expect(result.current.customAmount).toBe('');
    });

    test('sets selectedAmount and retains customAmount when amount is "Other"', () => {
      const { result } = renderHook(() => useAmountSelector());

      act(() => result.current.handleCustomAmountChange('123'));
      act(() => result.current.handleAmountPress('Other'));

      expect(result.current.selectedAmount).toBe('Other');
      expect(result.current.customAmount).toBe(`${mockSymbol} 123`);
    });
  });

  describe('handleCustomAmountChange', () => {
    test('clears customAmount for empty or symbol-only input', () => {
      const { result } = renderHook(() => useAmountSelector());

      act(() => result.current.handleCustomAmountChange(''));
      expect(result.current.customAmount).toBe('');

      act(() => result.current.handleCustomAmountChange(mockSymbol));
      expect(result.current.customAmount).toBe('');

      act(() => result.current.handleCustomAmountChange(`${mockSymbol} `));
      expect(result.current.customAmount).toBe('');
    });

    test('formats input without symbol correctly', () => {
      const { result } = renderHook(() => useAmountSelector());

      act(() => result.current.handleCustomAmountChange('456'));
      expect(result.current.customAmount).toBe(`${mockSymbol} 456`);
    });

    test('reformats input with symbol correctly', () => {
      const { result } = renderHook(() => useAmountSelector());

      act(() => result.current.handleCustomAmountChange(`${mockSymbol} 789`));
      expect(result.current.customAmount).toBe(`${mockSymbol} 789`);
    });

    test('strips non-numeric characters and keeps symbol', () => {
      const { result } = renderHook(() => useAmountSelector());

      act(() => result.current.handleCustomAmountChange('$12abc3.45'));
      expect(result.current.customAmount).toBe(`${mockSymbol} 12345`);
    });
  });

  describe('reset', () => {
    test('clears selectedAmount and customAmount', () => {
      const { result } = renderHook(() => useAmountSelector());

      act(() => result.current.handleAmountPress('200'));
      act(() => result.current.handleCustomAmountChange('300'));
      act(() => result.current.reset());

      expect(result.current.selectedAmount).toBeNull();
      expect(result.current.customAmount).toBe('');
    });
  });
});

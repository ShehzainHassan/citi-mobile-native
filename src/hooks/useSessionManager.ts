import { IDLE_SCREENS } from '@/constants';
import { useToast } from '@/hooks';
import { getCurrentRouteName } from '@/navigation';
import { authService } from '@/services';
import { secureStorage } from '@/services/secureStorage';
import { clearAuth } from '@/store/slices/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { useDispatch } from 'react-redux';

const SESSION_TIMEOUT = 5 * 60 * 1000;
const WARNING_TIMEOUT = 4 * 60 * 1000;

export const useSessionManager = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { error: showError } = useToast();

  const lastActivityTime = useRef<number>(Date.now());
  const warningTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (warningTimer.current) {
      clearTimeout(warningTimer.current);
      warningTimer.current = null;
    }
    if (timeoutTimer.current) {
      clearTimeout(timeoutTimer.current);
      timeoutTimer.current = null;
    }
    console.log('[SessionManager] Timers cleared');
  }, []);

  const endSession = useCallback(async () => {
    console.log(
      '[SessionManager] Redirecting to SignIn at:',
      new Date().toLocaleTimeString(),
    );
    clearTimers();
    dispatch(clearAuth());
    await secureStorage.deleteItem('BIOMETRIC_ENABLED');
    await secureStorage.deleteItem('BIOMETRIC_EMAIL');
    await authService.signOut();
    showError('Session expired', 'You were logged out due to inactivity');
    navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] });
  }, [dispatch, navigation, clearTimers, showError]);

  const resetSession = useCallback(() => {
    const currentRoute = getCurrentRouteName();
    const isAuthScreen = IDLE_SCREENS.includes(currentRoute);

    lastActivityTime.current = Date.now();

    console.log(`[SessionManager] Current Route: ${currentRoute}`);
    console.log(`[SessionManager] Is Auth Screen: ${isAuthScreen}`);

    clearTimers();

    if (isAuthScreen) {
      console.log(
        '[SessionManager] Auth screen detected — session timers skipped',
      );
      return;
    }

    console.log(
      `[SessionManager] Show Warning will trigger in ${
        WARNING_TIMEOUT / 1000
      }s`,
    );
    console.log(
      `[SessionManager] Session will end in ${SESSION_TIMEOUT / 1000}s`,
    );

    warningTimer.current = setTimeout(() => {
      const routeAtWarning = getCurrentRouteName();
      const stillAuth = IDLE_SCREENS.includes(routeAtWarning);
      if (!stillAuth) {
        console.log(
          '[SessionManager] Warning toast triggered at:',
          new Date().toLocaleTimeString(),
        );
        showError(
          'Session Expiring',
          "You've been inactive. You'll be logged out in 30 seconds.",
        );
      } else {
        console.log('[SessionManager] Warning skipped — now on auth screen');
      }
    }, WARNING_TIMEOUT);

    timeoutTimer.current = setTimeout(() => {
      const routeAtTimeout = getCurrentRouteName();
      const stillAuth = IDLE_SCREENS.includes(routeAtTimeout);
      if (!stillAuth) {
        console.log(
          '[SessionManager] Session timeout → ending session at:',
          new Date().toLocaleTimeString(),
        );
        endSession();
      }
    }, SESSION_TIMEOUT);
  }, [clearTimers, endSession, showError]);

  const handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      const now = new Date().toLocaleTimeString();
      console.log(
        `[SessionManager] AppState changed to ${nextAppState} at ${now}`,
      );

      if (nextAppState === 'active') {
        const inactiveTime = Date.now() - lastActivityTime.current;
        console.log(`[SessionManager] Inactive for ${inactiveTime / 1000}s`);

        if (inactiveTime > SESSION_TIMEOUT) {
          console.log(
            '[SessionManager] Inactivity exceeded session timeout -> ending session',
          );
          endSession();
        } else {
          resetSession();
        }
      } else {
        console.log('[SessionManager] App backgrounded — clearing timers');
        clearTimers();
      }
    },
    [resetSession, endSession, clearTimers],
  );

  useEffect(() => {
    resetSession();

    const sub = AppState.addEventListener('change', handleAppStateChange);

    let navUnsub: (() => void) | null = null;
    try {
      navUnsub = navigation.addListener('state', () => {
        const currentRoute = getCurrentRouteName();
        console.log(
          '[SessionManager] Navigation state changed. Current route:',
          currentRoute,
        );
        resetSession();
      }) as () => void;
    } catch (err) {
      console.warn(
        '[SessionManager] Could not attach navigation state listener',
        err,
      );
    }

    return () => {
      sub.remove();
      if (navUnsub) navUnsub();
      clearTimers();
    };
  }, [handleAppStateChange, resetSession, clearTimers, navigation]);

  return { resetSession, clearTimers };
};

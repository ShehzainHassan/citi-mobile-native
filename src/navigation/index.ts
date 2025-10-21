// Main navigation configuration
// Root navigator, auth stack, main tab navigator
// Navigation containers and screen components

// Import navigation components and configure routes
// Set up authentication flow and main app navigation
// Handle deep linking and navigation state persistence

import { createNavigationContainerRef } from '@react-navigation/native';
import type { RootStackParamList } from './types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function getCurrentRouteName() {
  const route = navigationRef.getCurrentRoute();
  const name = route?.name;
  return name || '';
}

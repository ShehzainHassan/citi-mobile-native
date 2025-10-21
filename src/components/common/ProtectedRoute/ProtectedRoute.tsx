import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import { RootState } from '@/store';
import { ProtectedRouteProps } from './ProtectedRoute.types';
import { styles } from './ProtectedRoute.styles';

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigation = useNavigation();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  useEffect(() => {
    if (!isAuthenticated) {
      console.log(
        '[ProtectedRoute] User not authenticated. Redirecting to SignIn.',
      );
      navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] });
    }
  }, [isAuthenticated, navigation]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{isAuthenticated ? children : null}</>;
};

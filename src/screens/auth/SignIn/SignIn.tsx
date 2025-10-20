import { Images } from '@/assets/images';
import {
  AuthFooter,
  AuthHeader,
  AuthImageBlock,
  BiometricAuthView,
  Button,
  ErrorMessage,
  Header,
  Input,
} from '@/components';
import {
  useAuthStyles,
  useDeviceAuthType,
  useFormValidation,
  useGlobalStyles,
  useToast,
} from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { MainTabWithAuthParamList } from '@/navigation/types';
import { authService } from '@/services';
import { setTokens } from '@/store/slices/authSlice/authSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

export const SignIn = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();
  const dispatch = useDispatch();

  const { values, errors, handleChange, validateAll } = useFormValidation({
    email: '',
    password: '',
  });
  const { success, error } = useToast();
  const [loginError, setLoginError] = useState<Error | null>(null);
  const authType = useDeviceAuthType();
  const handleLogin = async (email: string, password: string) => {
    try {
      const tokens = await authService.signIn({ email, password });
      dispatch(setTokens(tokens));
      success('Sign in successful', 'Welcome back!');
      navigation.navigate('Home');
      setLoginError(null);
    } catch (err: unknown) {
      const parsedError =
        err instanceof Error ? err : new Error('Something went wrong');
      error('Sign in failed', parsedError.message);
      setLoginError(parsedError);
    }
  };

  const handleSignIn = async () => {
    if (!validateAll()) {
      error('Validation failed', 'Please check your inputs');
      return;
    }
    await handleLogin(values.email, values.password);
  };
  const handleBiometricSuccess = () => {
    const mockEmail = 'test@example.com';
    const mockPassword = 'Password123';

    handleChange('email', mockEmail);
    handleChange('password', mockPassword);

    handleLogin(mockEmail, mockPassword);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={globalStyles.fillAll}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={globalStyles.scrollContent}
        >
          <Header
            title={t(TranslationKeys.auth.signIn)}
            variant="secondary"
            onPress={() => navigation.navigate('SignUp')}
            style={authStyles.headerContainer}
          />

          <View style={globalStyles.roundedContainer}>
            <AuthHeader
              title={t(TranslationKeys.auth.welcomeTitle)}
              subTitle={t(TranslationKeys.auth.welcomeSubtitle)}
            />

            <AuthImageBlock source={Images.authIcon} />

            <View style={authStyles.inputContainer}>
              <Input
                placeholder={t(TranslationKeys.auth.emailPlaceholder)}
                value={values.email}
                onChangeText={text => handleChange('email', text)}
                error={errors.email ?? undefined}
              />
              <Input
                placeholder={t(TranslationKeys.auth.passwordPlaceholder)}
                secureTextEntry
                value={values.password}
                onChangeText={text => handleChange('password', text)}
                error={errors.password ?? undefined}
              />
            </View>

            <Text
              style={authStyles.forgotPassword}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              {t(TranslationKeys.auth.forgotPassword)}
            </Text>

            <Button
              title={t(TranslationKeys.auth.signInButton)}
              onPress={handleSignIn}
              disabled={
                !values.email ||
                !values.password ||
                Object.values(errors).some(err => err !== null)
              }
              style={authStyles.button}
            />

            {authType !== 'NONE' && (
              <BiometricAuthView
                showText={false}
                authType={authType}
                onSuccess={handleBiometricSuccess}
              />
            )}

            <AuthFooter
              label={t(TranslationKeys.auth.noAccount)}
              actionText={t(TranslationKeys.auth.signUp)}
              onActionPress={() => navigation.navigate('SignUp')}
            />
            {loginError && (
              <ErrorMessage
                error={loginError}
                onRetry={() => handleLogin(values.email, values.password)}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

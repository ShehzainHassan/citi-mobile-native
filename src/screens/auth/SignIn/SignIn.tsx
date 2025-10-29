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
  useSignInMutation,
  useToast,
} from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { MainTabWithAuthParamList } from '@/navigation/types';
import { APIError } from '@/types';
import { normalizeError } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SignIn = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();

  const { values, errors, handleChange } = useFormValidation({
    email: '',
    password: '',
  });

  const { error } = useToast();
  const { mutateAsync: signIn, isPending } = useSignInMutation();
  const authType = useDeviceAuthType();
  const [signInError, setSignInError] = useState<APIError | null>(null);
  const handleSignIn = async () => {
    if (!values.email || errors.email) {
      error('Invalid email', 'Please enter a valid email address');
      return;
    }

    try {
      await signIn({ email: values.email, password: values.password });
      setSignInError(null);
    } catch (err) {
      const normalized = normalizeError(err);
      setSignInError(normalized);

      if (normalized.code === 'UNKNOWN_ERROR') {
        error('Sign-in failed', normalized.message);
      }
    }
  };

  const handleBiometricSuccess = () => {
    const mockEmail = 'test@example.com';
    const mockPassword = 'Password123';

    handleChange('email', mockEmail);
    handleChange('password', mockPassword);

    // handleLogin(mockEmail, mockPassword);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAwareScrollView
        contentContainerStyle={globalStyles.scrollContent}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
        enableAutomaticScroll
        extraScrollHeight={Platform.OS === 'ios' ? 80 : 160}
        showsVerticalScrollIndicator={false}
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
            />
          </View>

          <Text
            style={authStyles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            {t(TranslationKeys.auth.forgotPassword)}
          </Text>

          <Button
            testID="sign-in-button"
            title={t(TranslationKeys.auth.signInButton)}
            loading={isPending}
            onPress={handleSignIn}
            disabled={
              isPending || !values.email || !!errors.email || !values.password
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
          {signInError && <ErrorMessage error={signInError} />}

          <AuthFooter
            label={t(TranslationKeys.auth.noAccount)}
            actionText={t(TranslationKeys.auth.signUp)}
            onActionPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

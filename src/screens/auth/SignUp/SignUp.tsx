import { Images } from '@/assets/images';
import {
  AuthFooter,
  AuthHeader,
  AuthImageBlock,
  Button,
  Checkbox,
  ErrorMessage,
  Header,
  Input,
  PhoneNumberInput,
} from '@/components';
import {
  useAuthStyles,
  useFormValidation,
  useGlobalStyles,
  useSignUpMutation,
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

export const SignUp = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const { t } = useTranslation();

  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [signUpError, setSignUpError] = useState<APIError | null>(null);

  const { values, errors, handleChange, validateAll } = useFormValidation({
    name: '',
    email: '',
    password: '',
    phoneNo: '',
  });

  const { mutateAsync: signUp, isPending } = useSignUpMutation();

  const handleSignUp = async () => {
    if (!acceptedTerms || !validateAll()) return;

    try {
      await signUp({
        fullName: values.name,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNo,
        acceptTerms: acceptedTerms,
      });
      setSignUpError(null);
    } catch (err) {
      const normalized = normalizeError(err);
      setSignUpError(normalized);
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAwareScrollView
        contentContainerStyle={globalStyles.scrollContent}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
        extraScrollHeight={Platform.OS === 'ios' ? 80 : 240}
        showsVerticalScrollIndicator={false}
      >
        <Header
          title={t(TranslationKeys.auth.signUp)}
          variant="secondary"
          onPress={() => navigation.navigate('SignIn')}
          style={authStyles.headerContainer}
        />

        <View style={globalStyles.roundedContainer}>
          <AuthHeader
            title={t(TranslationKeys.auth.welcomeTitle)}
            subTitle={t(TranslationKeys.auth.welcomeSubtitleSignUp)}
          />
          <AuthImageBlock source={Images.signUp} />

          <View style={authStyles.inputContainer}>
            <Input
              placeholder={t(TranslationKeys.auth.namePlaceholder)}
              value={values.name}
              onChangeText={text => handleChange('name', text)}
              error={errors.name ?? undefined}
            />

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

            <PhoneNumberInput
              value={values.phoneNo}
              placeholder="Phone Number"
              onChangeText={text => handleChange('phoneNo', text)}
              error={errors.phoneNo ?? undefined}
            />

            <Checkbox
              label={
                <Text style={authStyles.text}>
                  {t(TranslationKeys.auth.termsAgreement)}
                  <Text style={globalStyles.heading3}>
                    {t(TranslationKeys.auth.termsAndConditions)}
                  </Text>
                </Text>
              }
              checked={acceptedTerms}
              onChange={setAcceptedTerms}
            />
          </View>

          <Button
            title={t(TranslationKeys.auth.signUpButton)}
            style={authStyles.signUpButton}
            onPress={handleSignUp}
            loading={isPending}
            disabled={
              isPending ||
              !acceptedTerms ||
              !values.name ||
              !values.email ||
              !values.password ||
              Object.values(errors).some(error => !!error)
            }
          />

          {signUpError && <ErrorMessage error={signUpError} />}

          <AuthFooter
            label={t(TranslationKeys.auth.haveAccount)}
            actionText={t(TranslationKeys.auth.signIn)}
            onActionPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

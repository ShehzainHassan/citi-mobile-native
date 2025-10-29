import { Button, ErrorMessage, Header, Input } from '@/components';
import {
  useAuthStyles,
  useForgotPasswordMutation,
  useFormValidation,
  useGlobalStyles,
  useInputStyles,
  useResendOTPMutation,
  useVerifyOTPMutation,
} from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { AuthStackParamList } from '@/navigation/types';
import { APIError } from '@/types';
import { normalizeError } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ForgotPassword = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const inputStyles = useInputStyles();
  const { t } = useTranslation('auth');

  const [step, setStep] = useState<number>(1);
  // const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleBack = () => {
    if (step === 1) {
      navigation.navigate('SignIn');
    } else {
      setStep(step - 1);
    }
  };

  const { values, errors, handleChange } = useFormValidation({
    email: '',
    password: '',
  });
  const { mutateAsync: forgotPassword } = useForgotPasswordMutation();
  const { mutateAsync: verifyOTP } = useVerifyOTPMutation();
  const { mutateAsync: resendOTP } = useResendOTPMutation();

  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);
  const [isResendingCode, setIsResendingCode] = useState(false);
  const [otpError, setOtpError] = useState<APIError | null>(null);
  const handleSendCode = async () => {
    setIsSendingCode(true);
    try {
      await forgotPassword({ email: values.email });
      setStep(2);
      setOtpError(null);
    } catch (err) {
      setOtpError(normalizeError(err));
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!code.trim()) return;

    setIsVerifyingCode(true);
    try {
      const token = await verifyOTP({ email: values.email, code });
      setOtpError(null);
      navigation.navigate('ChangePassword', {
        from: 'Security',
        email: values.email,
        verificationToken: token,
      });
    } catch (err) {
      setOtpError(normalizeError(err));
    } finally {
      setIsVerifyingCode(false);
    }
  };

  const handleResendCode = async () => {
    if (!values.email || !!errors.email) return;

    setIsResendingCode(true);
    try {
      await resendOTP({ email: values.email });
      setOtpError(null);
    } catch (err) {
      setOtpError(normalizeError(err));
    } finally {
      setIsResendingCode(false);
    }
  };
  return (
    <SafeAreaView
      style={[globalStyles.safeArea, globalStyles.verticalSpread]}
      edges={['top']}
    >
      <Header
        title={t(TranslationKeys.auth.forgotPasswordTitle)}
        onPress={handleBack}
      />

      <View style={[globalStyles.verticalSpread]}>
        <View style={[authStyles.subContainer, globalStyles.paddedColumn]}>
          {step === 1 && (
            <View style={globalStyles.cardContainer}>
              <View style={authStyles.phoneContainer}>
                <Input
                  placeholder={t(TranslationKeys.auth.emailPlaceholder)}
                  value={values.email}
                  onChangeText={text => handleChange('email', text)}
                  error={errors.email ?? undefined}
                />
                {/* <PhoneNumberInput
                  label={t(TranslationKeys.auth.typePhone)}
                  value={phone}
                  placeholder="(+84)"
                  onChangeText={setPhone}
                /> */}
              </View>

              <View style={authStyles.sendContainer}>
                <Text style={[globalStyles.body3, globalStyles.neutral1]}>
                  {t(TranslationKeys.auth.sentCodeInfo)}
                </Text>
                <Button
                  title={t(TranslationKeys.auth.sendCode)}
                  loading={isSendingCode}
                  disabled={isSendingCode || !values.email || !!errors.email}
                  onPress={handleSendCode}
                />
                {otpError && <ErrorMessage error={otpError} />}
              </View>
            </View>
          )}

          {step === 2 && (
            <View style={globalStyles.cardContainer}>
              <View style={authStyles.phoneContainer}>
                <Text style={[globalStyles.caption1, inputStyles.inputLabel]}>
                  {t(TranslationKeys.auth.typeCode)}
                </Text>
                <View style={authStyles.codeContainer}>
                  <View style={authStyles.inputWrapper}>
                    <Input
                      placeholder={t(TranslationKeys.auth.codePlaceholder)}
                      value={code}
                      onChangeText={setCode}
                      keyboardType="number-pad"
                    />
                  </View>
                  <Button
                    title={t(TranslationKeys.auth.resend)}
                    loading={isResendingCode}
                    disabled={
                      isResendingCode || !values.email || !!errors.email
                    }
                    onPress={handleResendCode}
                  />
                  {otpError && <ErrorMessage error={otpError} />}
                </View>
              </View>

              <View style={authStyles.sendContainer}>
                <View style={authStyles.textInfoContainer}>
                  <Text style={[globalStyles.body3, authStyles.textInfo]}>
                    {/* {t(TranslationKeys.auth.verifyInfo, { phone })} */}
                    {t(TranslationKeys.auth.verifyInfo, {
                      phone: values.email,
                    })}
                  </Text>
                  <Text style={[globalStyles.body3, authStyles.textInfo]}>
                    {t(TranslationKeys.auth.expireInfo)}
                  </Text>
                </View>
                <Button
                  title={t(TranslationKeys.auth.changePasswordTitle)}
                  loading={isVerifyingCode}
                  disabled={!code.trim() || isVerifyingCode}
                  onPress={handleVerifyCode}
                />
                {otpError && <ErrorMessage error={otpError} />}
              </View>
            </View>
          )}
        </View>
      </View>
      {step === 2 && (
        <Text
          style={[
            globalStyles.heading3,
            globalStyles.centerContainer,
            authStyles.changePhoneNo,
          ]}
          onPress={() => setStep(1)}
        >
          {t(TranslationKeys.auth.changePhone)}
        </Text>
      )}
    </SafeAreaView>
  );
};

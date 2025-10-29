import { Images } from '@/assets/images';
import {
  Button,
  Header,
  Input,
  SuccessScreen,
  ErrorMessage,
} from '@/components';
import {
  useAuthStyles,
  useChangePasswordMutation,
  useGlobalStyles,
} from '@/hooks';
import { useResetPasswordMutation } from '@/hooks/mutations/useResetPasswordMutation';
import { TranslationKeys } from '@/i18n';
import {
  AuthStackParamList,
  MainTabWithAuthParamList,
} from '@/navigation/types';
import { APIError } from '@/types';
import { normalizeError } from '@/utils';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ChangePasswordRouteProp = RouteProp<AuthStackParamList, 'ChangePassword'>;

export const ChangePassword = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const { t } = useTranslation('auth');
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();
  const route = useRoute<ChangePasswordRouteProp>();
  const { from, email, verificationToken } = route.params ?? {};

  const [recentPassword, setRecentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [changeError, setChangeError] = useState<APIError | null>(null);

  const { mutateAsync: resetPassword } = useResetPasswordMutation();
  const { mutateAsync: changePassword } = useChangePasswordMutation();

  const handleSuccess = () => {
    if (from === 'Security') {
      navigation.navigate('SignIn');
    } else if (from === 'Settings') {
      navigation.navigate('Settings');
    } else {
      navigation.goBack();
    }
  };

  const handleChangePassword = async () => {
    setIsSubmitting(true);
    try {
      if (from === 'Security' && email && verificationToken) {
        await resetPassword({
          email,
          verificationToken,
          newPassword: password,
        });
      } else {
        await changePassword({
          currentPassword: recentPassword,
          newPassword: password,
          confirmPassword,
        });
      }
      setChangeError(null);
      setPasswordChanged(true);
    } catch (err) {
      setChangeError(normalizeError(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFromSettings = from === 'Settings';
  const isButtonDisabled = isFromSettings
    ? !recentPassword.trim() || !password.trim() || password !== confirmPassword
    : !password.trim() || password !== confirmPassword;

  return (
    <SafeAreaView
      style={[globalStyles.safeArea, globalStyles.verticalSpread]}
      edges={['top']}
    >
      <Header
        title={
          passwordChanged ? '' : t(TranslationKeys.auth.changePasswordTitle)
        }
        onPress={() => navigation.goBack()}
      />
      <View style={globalStyles.paddedColumn}>
        {!passwordChanged ? (
          <View style={globalStyles.cardContainer}>
            {isFromSettings && (
              <View
                style={[
                  authStyles.phoneContainer,
                  authStyles.passwordContainer,
                ]}
              >
                <Input
                  label={t(TranslationKeys.auth.recentPassword)}
                  placeholder={t(
                    TranslationKeys.auth.recentPasswordPlaceholder,
                  )}
                  value={recentPassword}
                  onChangeText={setRecentPassword}
                  secureTextEntry
                  required={true}
                />
              </View>
            )}
            <View
              style={[authStyles.phoneContainer, authStyles.passwordContainer]}
            >
              <Input
                label={t(TranslationKeys.auth.newPassword)}
                placeholder={t(TranslationKeys.auth.newPasswordPlaceholder)}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <View
              style={[authStyles.phoneContainer, authStyles.passwordContainer]}
            >
              <Input
                label={t(TranslationKeys.auth.confirmPassword)}
                placeholder={t(TranslationKeys.auth.confirmPasswordPlaceholder)}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>
            <Button
              title={t(TranslationKeys.auth.changePasswordButton)}
              disabled={isButtonDisabled || isSubmitting}
              loading={isSubmitting}
              onPress={handleChangePassword}
            />
            {changeError && <ErrorMessage error={changeError} />}
          </View>
        ) : (
          <SuccessScreen
            headerText=""
            onBack={() => navigation.goBack()}
            title={t(TranslationKeys.auth.passwordChangedTitle)}
            subtitle={t(TranslationKeys.auth.passwordChangedText)}
            btnText={t(TranslationKeys.auth.ok)}
            source={Images.passwordChanged}
            onPress={handleSuccess}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

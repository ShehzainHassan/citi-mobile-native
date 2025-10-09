import { Images } from '@/assets/images';
import { Button, Header, Input, SuccessScreen } from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { TranslationKeys } from '@/i18n';
import {
  AuthStackParamList,
  MainTabWithAuthParamList,
} from '@/navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

type ChangePasswordRouteProp = RouteProp<AuthStackParamList, 'ChangePassword'>;

export const ChangePassword = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const { t } = useTranslation('auth');
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();
  const route = useRoute<ChangePasswordRouteProp>();
  const from = route.params?.from;

  const [recentPassword, setRecentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleSuccess = () => {
    if (from === 'Security') {
      navigation.navigate('SignIn');
    } else if (from === 'Settings') {
      navigation.navigate('Settings');
    } else {
      navigation.goBack();
    }
  };

  const isFromSettings = from === 'Settings';
  const isButtonDisabled = isFromSettings
    ? !recentPassword.trim() || !password.trim() || password !== confirmPassword
    : !password.trim() || password !== confirmPassword;

  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title={
          passwordChanged ? '' : t(TranslationKeys.auth.changePasswordTitle)
        }
        onPress={() => navigation.goBack()}
        style={authStyles.headerContainer}
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
              disabled={isButtonDisabled}
              onPress={() => setPasswordChanged(true)}
            />
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
    </View>
  );
};

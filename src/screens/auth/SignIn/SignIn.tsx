import { Images } from '@/assets/images';
import {
  AuthFooter,
  AuthHeader,
  AuthImageBlock,
  Button,
  Header,
  ImageWithFallback,
  Input,
} from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { MainTabWithAuthParamList } from '@/navigation/types';
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

export const SignIn = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();
  const isDisabled = email.trim() === '' || password.trim() === '';
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();

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
            onPress={() => navigation.navigate('Home')}
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
                value={email}
                onChangeText={setEmail}
              />
              <Input
                placeholder={t(TranslationKeys.auth.passwordPlaceholder)}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
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
              disabled={isDisabled}
            />

            <View style={globalStyles.centerContainer}>
              <ImageWithFallback
                source={Images.fingerprint}
                style={authStyles.biometricButton}
              />
            </View>

            <AuthFooter
              label={t(TranslationKeys.auth.noAccount)}
              actionText={t(TranslationKeys.auth.signUp)}
              onActionPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

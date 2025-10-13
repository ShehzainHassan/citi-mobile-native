import { Images } from '@/assets/images';
import {
  AuthFooter,
  AuthHeader,
  AuthImageBlock,
  Button,
  Checkbox,
  Header,
  Input,
} from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { AuthStackParamList } from '@/navigation/types';
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

export const SignUp = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const isDisabled = !email.trim() || !password.trim() || !name.trim();
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['bottom']}>
      <KeyboardAvoidingView
        style={globalStyles.fillAll}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={globalStyles.scrollContent}
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
                value={name}
                onChangeText={setName}
              />
              <Input
                placeholder={t(TranslationKeys.auth.textInputPlaceholder)}
                value={email}
                onChangeText={setEmail}
              />
              <Input
                placeholder={t(TranslationKeys.auth.passwordPlaceholder)}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <View style={authStyles.checkboxContainer}>
                <Checkbox />
                <Text style={authStyles.text}>
                  {t(TranslationKeys.auth.termsAgreement)}{' '}
                  <Text style={globalStyles.heading3}>
                    {t(TranslationKeys.auth.termsAndConditions)}
                  </Text>
                </Text>
              </View>
            </View>

            <Button
              title={t(TranslationKeys.auth.signUpButton)}
              style={authStyles.signUpButton}
              disabled={isDisabled}
            />

            <AuthFooter
              label={t(TranslationKeys.auth.haveAccount)}
              actionText={t(TranslationKeys.auth.signIn)}
              onActionPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

import { Button, Header, Input, PhoneNumberInput } from '@/components';
import { useAuthStyles, useGlobalStyles, useInputStyles } from '@/hooks';
import { TranslationKeys } from '@/i18n';
import { AuthStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export const ForgotPassword = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const inputStyles = useInputStyles();
  const { t } = useTranslation('auth');

  const [step, setStep] = useState<number>(1);
  const [phone, setPhone] = useState('');
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

  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title={t(TranslationKeys.auth.forgotPasswordTitle)}
        onPress={handleBack}
      />

      <View style={[globalStyles.verticalSpread]}>
        <View style={[authStyles.subContainer, globalStyles.paddedColumn]}>
          {step === 1 && (
            <View style={globalStyles.cardContainer}>
              <View style={authStyles.phoneContainer}>
                <PhoneNumberInput
                  label={t(TranslationKeys.auth.typePhone)}
                  value={phone}
                  placeholder="(+84)"
                  onChangeText={setPhone}
                />
              </View>

              <View style={authStyles.sendContainer}>
                <Text style={[globalStyles.body3, globalStyles.neutral1]}>
                  {t(TranslationKeys.auth.sentCodeInfo)}
                </Text>
                <Button
                  title={t(TranslationKeys.auth.sendCode)}
                  disabled={!phone.trim()}
                  onPress={() => setStep(2)}
                />
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
                  <Button title={t(TranslationKeys.auth.resend)} />
                </View>
              </View>

              <View style={authStyles.sendContainer}>
                <View style={authStyles.textInfoContainer}>
                  <Text style={[globalStyles.body3, authStyles.textInfo]}>
                    {t(TranslationKeys.auth.verifyInfo, { phone })}
                  </Text>
                  <Text style={[globalStyles.body3, authStyles.textInfo]}>
                    {t(TranslationKeys.auth.expireInfo)}
                  </Text>
                </View>
                <Button
                  title={t(TranslationKeys.auth.changePasswordTitle)}
                  disabled={!code.trim()}
                  onPress={() =>
                    navigation.navigate('ChangePassword', {
                      from: 'Security',
                    })
                  }
                />
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
    </View>
  );
};

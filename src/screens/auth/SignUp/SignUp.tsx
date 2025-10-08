import { Images } from "@/assets/images";
import {
  AuthFooter,
  AuthHeader,
  AuthImageBlock,
  Button,
  Checkbox,
  Header,
  Input,
} from "@/components";
import { useAuthStyles, useGlobalStyles, useInputStyles } from "@/hooks";
import { TranslationKeys } from "@/i18n";
import { AuthStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export const SignUp = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const inputStyles = useInputStyles();
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={globalStyles.container}>
      <Header
        title={t(TranslationKeys.auth.signUp)}
        variant="secondary"
        onPress={() => navigation.navigate("SignIn")}
        style={authStyles.headerContainer}
      />
      <View style={globalStyles.roundedContainer}>
        <AuthHeader
          title={t(TranslationKeys.auth.welcomeTitle)}
          subTitle={t(TranslationKeys.auth.welcomeSubtitleSignUp)}
        />
        <AuthImageBlock source={Images.signUp} />
        <View style={inputStyles.inputContainer}>
          <Input placeholder={t(TranslationKeys.auth.namePlaceholder)} />
          <Input placeholder={t(TranslationKeys.auth.textInputPlaceholder)} />
          <Input
            placeholder={t(TranslationKeys.auth.passwordPlaceholder)}
            secureTextEntry
          />
          <View style={authStyles.checkboxContainer}>
            <Checkbox />
            <Text style={authStyles.text}>
              {t(TranslationKeys.auth.termsAgreement)}{" "}
              <Text style={globalStyles.heading3}>
                {t(TranslationKeys.auth.termsAndConditions)}
              </Text>
            </Text>
          </View>
        </View>

        <Button
          title={t(TranslationKeys.auth.signUpButton)}
          style={authStyles.signUpButton}
        />
        <AuthFooter
          label={t(TranslationKeys.auth.haveAccount)}
          actionText={t(TranslationKeys.auth.signIn)}
          onActionPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </View>
  );
};

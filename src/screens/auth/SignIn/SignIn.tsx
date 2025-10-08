import { Images } from "@/assets/images";
import {
  AuthFooter,
  AuthHeader,
  AuthImageBlock,
  Button,
  Header,
  ImageWithFallback,
  Input,
} from "@/components";
import { useAuthStyles, useGlobalStyles, useInputStyles } from "@/hooks";
import { TranslationKeys } from "@/i18n";
import { MainTabWithAuthParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export const SignIn = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const inputStyles = useInputStyles();
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();

  return (
    <View style={globalStyles.container}>
      <Header
        title={t(TranslationKeys.auth.signIn)}
        variant="secondary"
        onPress={() => navigation.navigate("Home")}
        style={authStyles.headerContainer}
      />
      <View style={globalStyles.roundedContainer}>
        <AuthHeader
          title={t(TranslationKeys.auth.welcomeTitle)}
          subTitle={t(TranslationKeys.auth.welcomeSubtitle)}
        />
        <AuthImageBlock source={Images.authIcon} />
        <View style={inputStyles.inputContainer}>
          <Input placeholder={t(TranslationKeys.auth.emailPlaceholder)} />
          <Input
            placeholder={t(TranslationKeys.auth.passwordPlaceholder)}
            secureTextEntry
          />
        </View>

        <Text
          style={authStyles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}>
          {t(TranslationKeys.auth.forgotPassword)}
        </Text>

        <Button title={t(TranslationKeys.auth.signInButton)} />

        <View style={globalStyles.centerContainer}>
          <ImageWithFallback
            source={Images.fingerprint}
            style={authStyles.biometricButton}
          />
        </View>

        <AuthFooter
          label={t(TranslationKeys.auth.noAccount)}
          actionText={t(TranslationKeys.auth.signUp)}
          onActionPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

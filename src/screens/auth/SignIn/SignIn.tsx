import { Images } from "@/assets/images";
import {
  AuthFooter,
  AuthHeader,
  AuthImageBlock,
  Button,
  Header,
  Input,
} from "@/components";
import { useAuthStyles, useGlobalStyles, useInputStyles } from "@/hooks";
import { MainTabWithAuthParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Image, Text, View } from "react-native";

export const SignIn = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const inputStyles = useInputStyles();
  const { t } = useTranslation("auth");
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();

  return (
    <View style={globalStyles.container}>
      <Header
        title={t("signIn")}
        variant="secondary"
        onPress={() => navigation.navigate("Home")}
        style={authStyles.headerContainer}
      />
      <View style={globalStyles.roundedContainer}>
        <AuthHeader title={t("welcomeTitle")} subTitle={t("welcomeSubtitle")} />
        <AuthImageBlock source={Images.authIcon} />
        <View style={inputStyles.inputContainer}>
          <Input placeholder={t("emailPlaceholder")} />
          <Input placeholder={t("passwordPlaceholder")} secureTextEntry />
        </View>

        <Text
          style={authStyles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}>
          {t("forgotPassword")}
        </Text>
        <Button title={t("signInButton")} />
        <View style={globalStyles.centerContainer}>
          <Image
            source={Images.fingerprint}
            style={authStyles.biometricButton}
            resizeMode="contain"
          />
        </View>
        <AuthFooter
          label={t("noAccount")}
          actionText={t("signUp")}
          onActionPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

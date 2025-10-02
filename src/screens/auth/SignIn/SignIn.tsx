import { Images } from "@/assets/images";
import {
  AuthFooter,
  AuthHeader,
  AuthImageBlock,
  Button,
  Header,
  Input,
} from "@/components";
import { useStyles } from "@/hooks/useStyles";
import { AuthStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Image, Text, View } from "react-native";

export const SignIn = () => {
  const { globalStyles, authStyles, inputStyles } = useStyles();
  const { t } = useTranslation("auth");
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={globalStyles.container}>
      <Header title={t("signIn")} variant="secondary" />
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

import { Images } from "@/assets/images";
import { useStyles } from "@/hooks/useStyles";
import { AuthStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Image, Text, TextInput, View } from "react-native";
import { Button } from "../ui";

export const SignIn = () => {
  const { globalStyles, loginStyles, authStyles } = useStyles();
  const { t } = useTranslation("auth");
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={[globalStyles.previous]}>{"<"}</Text>
        <Text style={globalStyles.header}>{t("signIn")}</Text>
      </View>
      <View style={globalStyles.roundedContainer}>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title1}>{t("welcomeTitle")}</Text>
          <Text style={globalStyles.caption}>{t("welcomeSubtitle")}</Text>
        </View>
        <View style={globalStyles.centerContainer}>
          <Image
            source={Images.authIcon}
            style={globalStyles.authLogo}
            resizeMode="contain"
          />
        </View>
        <View style={globalStyles.inputContainer}>
          <TextInput
            placeholder={t("emailPlaceholder")}
            style={[globalStyles.input]}
          />
          <TextInput
            placeholder={t("passwordPlaceholder")}
            style={[globalStyles.input]}
            secureTextEntry
          />
        </View>
        <Text
          style={loginStyles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}>
          {t("forgotPassword")}
        </Text>
        <Button title={t("signInButton")} />
        <View style={globalStyles.centerContainer}>
          <Image
            source={Images.fingerprint}
            style={loginStyles.biometricButton}
            resizeMode="contain"
          />
        </View>
        <View style={authStyles.footerContainer}>
          <Text style={globalStyles.caption}>{t("noAccount")}</Text>
          <Text
            style={globalStyles.heading3}
            onPress={() => navigation.navigate("SignUp")}>
            {t("signUp")}
          </Text>
        </View>
      </View>
    </View>
  );
};

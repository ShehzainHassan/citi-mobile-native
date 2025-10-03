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
import { useStyles } from "@/hooks/useStyles";
import { AuthStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export const SignUp = () => {
  const { globalStyles, authStyles, inputStyles } = useStyles();
  const { t } = useTranslation("auth");
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={globalStyles.container}>
      <Header
        title={t("signUp")}
        variant="secondary"
        style={[authStyles.headerContainer]}
      />
      <View style={globalStyles.roundedContainer}>
        <AuthHeader
          title={t("welcomeTitle")}
          subTitle={t("welcomeSubtitleSignUp")}
        />
        <AuthImageBlock source={Images.signUp} />
        <View style={inputStyles.inputContainer}>
          <Input placeholder={t("namePlaceholder")} />
          <Input placeholder={t("textInputPlaceholder")} />
          <Input placeholder={t("passwordPlaceholder")} secureTextEntry />
          <View style={authStyles.checkboxContainer}>
            <Checkbox />
            <Text style={authStyles.text}>
              {t("termsAgreement")}{" "}
              <Text style={globalStyles.heading3}>
                {t("termsAndConditions")}
              </Text>
            </Text>
          </View>
        </View>

        <Button title={t("signUpButton")} style={authStyles.signUpButton} />
        <AuthFooter
          label={t("haveAccount")}
          actionText={t("signIn")}
          onActionPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </View>
  );
};

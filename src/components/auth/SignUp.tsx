import { Images } from "@/assets/images";
import { useStyles } from "@/hooks/useStyles";
import { AuthStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Image, Text, TextInput, View } from "react-native";
import { Button, Checkbox } from "../ui";

export const SignUp = () => {
  const { globalStyles, authStyles, signUpStyles } = useStyles();
  const { t } = useTranslation("auth");
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={[globalStyles.previous]}>{"<"}</Text>
        <Text style={globalStyles.header}>{t("signUp")}</Text>
      </View>
      <View style={globalStyles.roundedContainer}>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title1}>{t("welcomeTitle")}</Text>
          <Text style={globalStyles.caption}>{t("welcomeSubtitleSignUp")}</Text>
        </View>
        <View style={globalStyles.centerContainer}>
          <Image
            source={Images.signUp}
            style={globalStyles.authLogo}
            resizeMode="contain"
          />
        </View>
        <View style={globalStyles.inputContainer}>
          <TextInput
            placeholder={t("namePlaceholder")}
            style={[globalStyles.input]}
          />
          <TextInput
            placeholder={t("textInputPlaceholder")}
            style={[globalStyles.input]}
          />
          <TextInput
            placeholder={t("passwordPlaceholder")}
            style={[globalStyles.input]}
            secureTextEntry
          />
          <View style={signUpStyles.checkboxContainer}>
            <Checkbox />
            <Text style={signUpStyles.text}>
              {t("termsAgreement")}{" "}
              <Text style={globalStyles.heading3}>
                {t("termsAndConditions")}
              </Text>
            </Text>
          </View>
        </View>

        <Button title={t("signUpButton")} style={signUpStyles.signUpButton} />

        <View style={authStyles.footerContainer}>
          <Text style={globalStyles.caption}>{t("haveAccount")}</Text>
          <Text
            style={globalStyles.heading3}
            onPress={() => navigation.navigate("SignIn")}>
            {t("signIn")}
          </Text>
        </View>
      </View>
    </View>
  );
};

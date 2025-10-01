import { Images } from "@/assets/images";
import { Button } from "@/components";
import { useStyles } from "@/hooks/useStyles";
import { AuthStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const ForgotPassword = () => {
  const { globalStyles, forgotPasswordStyles } = useStyles();
  const { t } = useTranslation("auth");

  const [step, setStep] = useState<number>(1);
  const [pageTitle, setPageTitle] = useState<string>(t("forgotPasswordTitle"));
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  useEffect(() => {
    if (step === 1 || step === 2) {
      setPageTitle(t("forgotPasswordTitle"));
    } else if (step === 3) {
      setPageTitle(t("changePasswordTitle"));
    } else if (step === 4) {
      setPageTitle("");
    }
  }, [step, t]);

  return (
    <View style={forgotPasswordStyles.container}>
      <View
        style={[
          globalStyles.headerContainer,
          forgotPasswordStyles.forgotPasswordContainer,
        ]}>
        <Text
          style={[globalStyles.previous, forgotPasswordStyles.headerText]}
          onPress={() => {
            if (step === 1) {
              navigation.navigate("SignIn");
            } else {
              setStep(step - 1);
            }
          }}>
          {"<"}
        </Text>

        <Text style={[globalStyles.header, forgotPasswordStyles.headerText]}>
          {pageTitle}
        </Text>
      </View>

      {step !== 4 && (
        <View style={forgotPasswordStyles.subContainer}>
          {step === 1 && (
            <View>
              <View style={forgotPasswordStyles.phoneContainer}>
                <Text>{t("typePhone")}</Text>
                <TextInput
                  placeholder={t("phonePlaceholder")}
                  style={[
                    globalStyles.input,
                    globalStyles.body3,
                    forgotPasswordStyles.passwordChangedText,
                  ]}
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>
              <View style={forgotPasswordStyles.sendContainer}>
                <Text
                  style={[
                    globalStyles.body3,
                    forgotPasswordStyles.passwordChangedText,
                  ]}>
                  {t("sentCodeInfo")}
                </Text>
                <Button
                  title={t("sendCode")}
                  disabled={!phone.trim()}
                  onPress={() => setStep(2)}
                />
              </View>
            </View>
          )}

          {step === 2 && (
            <View>
              <View style={forgotPasswordStyles.phoneContainer}>
                <Text>{t("typeCode")}</Text>
                <View style={forgotPasswordStyles.codeContainer}>
                  <TextInput
                    placeholder={t("codePlaceholder")}
                    style={[globalStyles.input, globalStyles.body3]}
                    value={code}
                    onChangeText={setCode}
                    keyboardType="number-pad"
                  />
                  <Button title={t("resend")} />
                </View>
              </View>
              <View style={forgotPasswordStyles.sendContainer}>
                <View style={forgotPasswordStyles.textInfoContainer}>
                  <Text
                    style={[globalStyles.body3, forgotPasswordStyles.textInfo]}>
                    {t("verifyInfo", { phone })}
                  </Text>
                  <Text
                    style={[globalStyles.body3, forgotPasswordStyles.textInfo]}>
                    {t("expireInfo")}
                  </Text>
                </View>
                <Button
                  title={t("changePasswordTitle")}
                  disabled={!code.trim()}
                  onPress={() => setStep(3)}
                />
              </View>
            </View>
          )}

          {step === 3 && (
            <View>
              <View
                style={[
                  forgotPasswordStyles.phoneContainer,
                  forgotPasswordStyles.passwordContainer,
                ]}>
                <Text>{t("newPassword")}</Text>
                <TextInput
                  placeholder={t("newPasswordPlaceholder")}
                  style={[globalStyles.input, globalStyles.body3]}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>
              <View
                style={[
                  forgotPasswordStyles.phoneContainer,
                  forgotPasswordStyles.passwordContainer,
                ]}>
                <Text>{t("confirmPassword")}</Text>
                <TextInput
                  placeholder={t("confirmPasswordPlaceholder")}
                  style={[globalStyles.input, globalStyles.body3]}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
              </View>
              <Button
                title={t("changePasswordButton")}
                disabled={!password.trim() || password !== confirmPassword}
                onPress={() => setStep(4)}
              />
            </View>
          )}
        </View>
      )}

      {step === 2 && (
        <Text
          style={[
            globalStyles.heading3,
            globalStyles.centerContainer,
            forgotPasswordStyles.changePhoneNo,
          ]}
          onPress={() => setStep(1)}>
          {t("changePhone")}
        </Text>
      )}

      {step === 4 && (
        <View>
          <Image
            source={Images.passwordChanged}
            style={globalStyles.authLogo}
            resizeMode="contain"
          />
          <View style={forgotPasswordStyles.changePasswordContainer}>
            <Text style={globalStyles.title3}>{t("passwordChangedTitle")}</Text>
            <Text
              style={[
                globalStyles.body3,
                forgotPasswordStyles.passwordChangedText,
              ]}>
              {t("passwordChangedText")}
            </Text>
          </View>
          <Button
            title={t("ok")}
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
      )}
    </View>
  );
};

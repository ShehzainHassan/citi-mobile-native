import { Images } from "@/assets/images";
import { Button, Header, Input } from "@/components";
import { useStyles } from "@/hooks/useStyles";
import {
  AuthStackParamList,
  MainTabWithAuthParamList,
} from "@/navigation/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, Text, View } from "react-native";

type ChangePasswordRouteProp = RouteProp<AuthStackParamList, "ChangePassword">;

export const ChangePassword = () => {
  const { globalStyles, authStyles } = useStyles();
  const { t } = useTranslation("auth");
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithAuthParamList>>();
  const route = useRoute<ChangePasswordRouteProp>();
  const from = route.params?.from;

  const [recentPassword, setRecentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleSuccess = () => {
    if (from === "ForgotPassword") {
      navigation.navigate("SignIn");
    } else if (from === "Settings") {
      navigation.navigate("Settings");
    } else {
      navigation.goBack();
    }
  };

  const isFromSettings = from === "Settings";
  const isButtonDisabled = isFromSettings
    ? !recentPassword.trim() || !password.trim() || password !== confirmPassword
    : !password.trim() || password !== confirmPassword;

  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title={passwordChanged ? "" : t("changePasswordTitle")}
        onPress={() => navigation.goBack()}
        style={authStyles.headerContainer}
      />
      <View style={globalStyles.paddedColumn}>
        {!passwordChanged ? (
          <View style={globalStyles.cardContainer}>
            {isFromSettings && (
              <View
                style={[
                  authStyles.phoneContainer,
                  authStyles.passwordContainer,
                ]}
              >
                <Input
                  label={t("recentPassword")}
                  placeholder={t("recentPasswordPlaceholder")}
                  value={recentPassword}
                  onChangeText={setRecentPassword}
                  secureTextEntry
                />
              </View>
            )}
            <View
              style={[authStyles.phoneContainer, authStyles.passwordContainer]}
            >
              <Input
                label={t("newPassword")}
                placeholder={t("newPasswordPlaceholder")}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <View
              style={[authStyles.phoneContainer, authStyles.passwordContainer]}
            >
              <Input
                label={t("confirmPassword")}
                placeholder={t("confirmPasswordPlaceholder")}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>
            <Button
              title={t("changePasswordButton")}
              disabled={isButtonDisabled}
              onPress={() => setPasswordChanged(true)}
            />
          </View>
        ) : (
          <View style={globalStyles.paddedColumn}>
            <Image
              source={Images.passwordChanged}
              style={globalStyles.authLogo}
              resizeMode="contain"
            />
            <View style={authStyles.changePasswordContainer}>
              <Text style={globalStyles.title3}>
                {t("passwordChangedTitle")}
              </Text>
              <Text style={[globalStyles.body3, globalStyles.neutral1]}>
                {t("passwordChangedText")}
              </Text>
            </View>
            <Button title={t("ok")} onPress={handleSuccess} />
          </View>
        )}
      </View>
    </View>
  );
};

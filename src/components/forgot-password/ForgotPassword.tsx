import { Images } from "@/assets/images";
import { useStyles } from "@/hooks/useStyles";
import { AuthStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "../ui";

export const ForgotPassword = () => {
  const { globalStyles, forgotPasswordStyles } = useStyles();

  const [step, setStep] = useState<number>(1);
  const [pageTitle, setPageTitle] = useState<string>("Forgot Password");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  useEffect(() => {
    if (step === 1 || step === 2) {
      setPageTitle("Forgot Password");
    } else if (step === 3) {
      setPageTitle("Change Password");
    } else if (step === 4) {
      setPageTitle("");
    }
  }, [step]);

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
                <Text>Type your phone number</Text>
                <TextInput
                  placeholder="(+84)"
                  style={globalStyles.input}
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>
              <View style={forgotPasswordStyles.sendContainer}>
                <Text style={[globalStyles.bodyText]}>
                  We texted you a code to verify your phone number
                </Text>
                <Button
                  title="Send"
                  disabled={!phone.trim()}
                  onPress={() => setStep(2)}
                />
              </View>
            </View>
          )}

          {step === 2 && (
            <View>
              <View style={forgotPasswordStyles.phoneContainer}>
                <Text>Type a code</Text>
                <View style={forgotPasswordStyles.codeContainer}>
                  <TextInput
                    placeholder="Code"
                    style={globalStyles.input}
                    value={code}
                    onChangeText={setCode}
                    keyboardType="number-pad"
                  />
                  <Button title="Resend" />
                </View>
              </View>
              <View style={forgotPasswordStyles.sendContainer}>
                <View>
                  <Text
                    style={[
                      globalStyles.bodyText,
                      forgotPasswordStyles.textInfo,
                    ]}>
                    We texted you a code to verify your phone number{" "}
                    <Text style={globalStyles.heading3}>{phone}</Text>
                  </Text>
                  <Text
                    style={[
                      globalStyles.bodyText,
                      forgotPasswordStyles.textInfo,
                    ]}>
                    This code will expire 10 minutes after this message. If you
                    don't get a message.
                  </Text>
                </View>
                <Button
                  title="Change Password"
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
                <Text>Type your new password</Text>
                <TextInput
                  placeholder="New Password"
                  style={globalStyles.input}
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
                <Text>Confirm your password</Text>
                <TextInput
                  placeholder="Confirm Password"
                  style={globalStyles.input}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
              </View>
              <Button
                title="Change password"
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
          Change your phone number
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
            <Text style={globalStyles.title3}>
              Change password successfully
            </Text>
            <Text style={globalStyles.bodyText}>
              You have successfully changed your password. Please use the new
              password when signing in.
            </Text>
          </View>
          <Button title="Ok" onPress={() => navigation.navigate("SignIn")} />
        </View>
      )}
    </View>
  );
};

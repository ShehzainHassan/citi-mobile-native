import { Images } from "@/assets/images";
import { useStyles } from "@/hooks/useStyles";
import { AuthStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, TextInput, View } from "react-native";
import { Button } from "../ui";

export const SignIn = () => {
  const { globalStyles, loginStyles, authStyles } = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={[globalStyles.previous]}>{"<"}</Text>
        <Text style={globalStyles.header}>Sign in</Text>
      </View>
      <View style={globalStyles.roundedContainer}>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title1}>Welcome to Citibank,</Text>
          <Text style={globalStyles.caption}>
            Hello there, sign in to continue
          </Text>
        </View>
        <View style={globalStyles.centerContainer}>
          <Image
            source={Images.authIcon}
            style={globalStyles.authLogo}
            resizeMode="contain"
          />
        </View>
        <View style={globalStyles.inputContainer}>
          <TextInput placeholder="Email" style={[globalStyles.input]} />
          <TextInput
            placeholder="Password"
            style={[globalStyles.input]}
            secureTextEntry
          />
        </View>
        <Text
          style={loginStyles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}>
          Forgot your password ?
        </Text>
        <Button title="Sign in" />
        <View style={globalStyles.centerContainer}>
          <Image
            source={Images.fingerprint}
            style={loginStyles.biometricButton}
            resizeMode="contain"
          />
        </View>
        <View style={authStyles.footerContainer}>
          <Text style={globalStyles.caption}>Don't have an account?</Text>
          <Text
            style={globalStyles.heading3}
            onPress={() => navigation.navigate("SignUp")}>
            Sign up
          </Text>
        </View>
      </View>
    </View>
  );
};
